// create mini-express app(Seperate route, Not a HTTP server)
import exp from 'express'

import { hash,compare } from 'bcrypt';

import { UserModel } from '../models/UserModel.js';

import { verifyToken } from '../middleware/verifyToken.js';

import jwt from 'jsonwebtoken'  // jsonwebtoken doesnt support es6 modules
const {sign} = jwt              // thats why we dont use default export on jsonwebtoken

export const userApp = exp.Router()

// DEFINE USER REST API route

    //NOTE:
        // userApp.get(path,req-handler) -> default route

        // app.use(req,res,next) -> app level middleware
        // userApp.get(path,middlewarefn,req-handler) -> route level middleware

    // User login
    userApp.post("/auth",async(req,res)=>{
        // get user email and password
        const {email,password} = req.body
        // verify email
        let user = await UserModel.findOne({email: email})
        // if email not exists
        if(!user)
        {
            return res.status(404).json({message:"Invalid email"})
        }
        // otherwise validate password
        let validation = await compare(password,user.password)

        // if invalid password
        if(!validation)
        {
            return res.status(400).json({message:"Invalid password"})
        }
        // if passwords are matched
            // create token (jsonwebtoken - jwt)
            const signedToken = sign({email:email},"ddppuvab",{expiresIn:"1h"}) // "10" - 10ms, 10 - 10s, "10d" - 10 days, "1w" - 1 week     
            // store token as httpOnly cookie
            res.cookie("token",signedToken,{
                httpOnly: true,
                sameSite: "lax",     // strict,lax,none
                secure: false       // can be true if https protocol is used
            })
            res.status(200).json({message:"Login success",payload:user})
    })

    //Create new User
    userApp.post("/users",async(req,res)=>{
        // express v5 has inbuilt error catching mechanism

        //get new user obj from req
        const newUser = req.body;
        // hash the password
        const hashedPassword = await hash(newUser.password,10)
        //replace the password with hashed password
        newUser.password = hashedPassword
        // Create new user document
        const newUserDocument = new UserModel(newUser)
        // save
        await newUserDocument.save()
        // send response
        res.status(201).json({message:"User created"})
    })

    //Read all Users
    // Making this route a protected route
    userApp.get("/users",verifyToken,async(req,res)=>{
        // read all users from db
        let usersList = await UserModel.find()
        // send response
        res.status(200).json({message:"List of Users",payload:usersList})
    })

    // Read User 
    userApp.get("/user",verifyToken,async(req,res)=>{
        
        // find user by id (security violation)
        // const UserObj = await UserModel.findOne({_id:uid})
        // const UserObj = await UserModel.findById(uid)
        
        // read user by email from req
        const emailOfUser = req.user?.email
        console.log(emailOfUser)

        // populate method is used to get the details of products from reference
        // cart.product should contain the name of referenced model and not the name of the collection
        const UserObj = await UserModel.findOne({email: emailOfUser}).populate("cart.product")

        if(!UserObj)
        {
            return res.status(404).json({message:"User not found"})
        }
        // send response
        res.status(200).json({message:"User details",payload:UserObj})
    })
        /* NOTE:
         - Use findOne method to read a document with non object id fields
         - Use findById method to read a document with object id */
    
    // Update a User by ID
    userApp.put("/users/:id",verifyToken,async(req,res)=>{
        const uid = req.params.id
        // get modified user from req
        const modifiedUser = req.body
        // find user by id & update
        const updatedUser = await UserModel.findByIdAndUpdate
                           (uid,
                            {$set:{...modifiedUser}},
                            {new:true,runValidators:true}) // third arg new: true returns modified data
        // send response
        res.status(200).json({message:"Found user and modifying",payload:updatedUser})
    })

    // Delete a User by ID
    userApp.delete("/users/:id",async(req,res)=>{
        const uid = req.params.id
        // find user by ID and delete
        let deletedUser = await UserModel.findByIdAndDelete(uid)
        if(!deletedUser)
        {
            return res.status(404).json({message:"User not found"})
        }
        // send response
        res.status(200).json({message:"User deleted"})
    })

    // Add product to cart
    userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
        // read product id from url param
        const productId = req.params.pid

        // get email of user
        const userOfEmail = req.user?.email

        const user = await UserModel.findOne({email: emailOfUser})
        console.log(user)

        // check for existing products
        

        // add product to cart
        let addToCart = await UserModel.findOneAndUpdate({email:userOfEmail},
            {$push:{cart:{product:productId}}})

        // if user invalid
        if(!addToCart)
        {
            return res.status(404).json({message:"User not found"})
        }
        return res.status(201).json({message:"Added to cart"})
    })


    // // Add product to cart
    // userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //     // read product id from url param
    //     const productId = req.params.pid

    //     // get email of user
    //     const userOfEmail = req.user?.email

    //     // add product to cart
    //     let addToCart = await UserModel.findOneAndUpdate({email:userOfEmail},
    //         {$push:{cart:{product:productId}}})

    //     // if user invalid
    //     if(!addToCart)
    //     {
    //         return res.status(404).json({message:"User not found"})
    //     }
    //     return res.status(201).json({message:"Added to cart"})
    // })

/* Status code:
    200 - success
    201 - created
    400 - bad request (client side)
    401 - Unauthorised
    403 - authenticated but not authorised (forbidden)
    404 - Not found
    500 - Server error
*/