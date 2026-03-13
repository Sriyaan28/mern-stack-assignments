// Create a mini express app
import exp from 'express'

import { ProductModel } from '../models/ProductModel.js'
import { UserModel } from '../models/UserModel.js';

export const productApp = exp.Router()

// Define PRODUCT REST API routes

    //Create new Product
    productApp.post("/products",async(req,res)=>{
        // get new product obj from req body
        const newProduct = req.body;
        // Create new product document
        const newProductDocument = new ProductModel(newProduct)
        // save
        await newProductDocument.save()
        // send response
        res.status(201).json({message:"New Product created"})
    })

    // Read all products
    productApp.get("/products",async(req,res)=>{
        let productsList = await ProductModel.find()
        //send response
        res.status(200).json({message:"List of Products",payload:productsList})
    })

    // Read product by ID
    productApp.get("/products/:id",async(req,res)=>{
        const pid = req.params.id
        const productObj = await UserModel.findById(pid)
        if(!productObj)
        {
            return res.status(404).json({message:"Product not found",err:err.message})
        }
        res.status(200).json({message:"User details",payload:productObj})
    })

    // Update product by ID
    productApp.put("/products/:id",async(req,res)=>{
        const pid = req.params.id
        const modifiedProduct = req.body
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            pid,
            {$set:{...modifiedProduct}},
            {new: true,runValidators:true}
        )
        res.status(200).json({message:"Found product and modifying",payload:updatedProduct})
    })

    // Delete a User by ID
    productApp.delete("/users/:id",async(req,res)=>{
        const pid = req.params.id
        let deletedProduct = await ProductModel.findByIdAndDelete(pid)
        if(!deletedProduct)
        {
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product deleted"})
    })