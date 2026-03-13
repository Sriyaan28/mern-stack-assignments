// CREATE HTTP SERVER
import exp from 'express'       //no need of mentioning path 

const app = exp()

// use body parser middleware
app.use(exp.json())

//custom middleware
function middleware1(req,res,next)
{
    res.json({message:'Response from middleware1'})
    console.log("res from middleware1")
}
function middleware2(req,res,next)
{
    res.json({message:'Response from middleware2'})
}
app.use(middleware1)




// set a port number
const port = 4000
//assign port number to http server
app.listen(port,()=>{console.log(`Server listening on port: ${port}`)})

// TEST DATA
let users = []

// Create API (usually done in different files) -> eg: User API
// REST API - Representational state transfer

// http://localhost:4000/users  - endpoint

//route to handle GET request of client 
app.get('/users',(req,res)=>{
    res.json({message:"All Users data",payload: users})
})
//route to handle *specific* GET request of client
app.get('/users/:id',(req,res)=>{
    let idOfUrl = Number(req.params.id);
    let user = users.find(user=>user.id === idOfUrl)
    if(!user)
        return res.json({message: "User not found"})
    res.json({message: "User data of specific ID",payload: user})
})

//route to handle POST request of client
app.post('/users',(req,res)=>{
    // newUser data
    const newUser = req.body
    // pushing newUser data to users array
    users.push(newUser)
    res.json({message:"New User Created"})
})

//route to handle PUT request of client
app.put('/users',(req,res)=>{
    // get modified user from client
    let modifiedUser = req.body
    // get index of modifiedUser in user array
    let index = users.findIndex((user)=>user.id === modifiedUser.id)
    //if index not found
    if(index === -1)
    {
        return res.json({message:"User not found"})
    }
    users.splice(index,1,modifiedUser)
    // message user regarding updation
    res.json({message:"User data Updated"})
})

//route to handle DELETE request of client
app.delete('/users/:id',(req,res)=>{                        // :x represents URL parameter
    // Get parameters from URL
    let idOfUrl = Number(req.params.id)
    // Find index of user
    let index = users.findIndex(user=>user.id === idOfUrl)
    // if user not found
    if(index === -1)
        return res.json({message:"User not found"})
    // Delete user
    users.splice(index,1)
    // Send response
    res.json({message:"User deleted"})
})


