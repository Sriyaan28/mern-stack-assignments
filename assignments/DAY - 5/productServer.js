// CREATE HTTP SERVER
import exp from 'express'       //no need of mentioning path 

const app = exp()

// use body parser middleware
app.use(exp.json())

// set a port number
const port = 4000
//assign port number to http server
app.listen(port,()=>{console.log(`Server listening on port: ${port}`)})

// Create product API with below operations
    //Create new Product ({productId,name,brand,price})
    //Read all products
    //Read all Products by brand
    //Update product
    //Delete product by ID

let products = []

//Create products
app.post('/products',(request,response)=>{
    let newProduct = request.body
    products.push(newProduct)
    response.json({message:"New product added"})
})

//Read All products
app.get('/products',(request,response)=>{
    response.json({message:"List of all products",payload:products})
})

// Read all products by brand
app.get('/products-brand',(request,response)=>{
    let brands = products.map((product)=>product.brand)
    response.json({message:"Products by brand",payload:brands})
})

// Update product
app.put('/products',(request,response)=>{
    let modifiedProduct = products.findIndex((product)=>product.productId === modifiedProduct.productId)
    if(index === -1)
    {
        return response.json({message:"Product unavailable to modify"})
    }
    products.splice(index,1,modifiedProduct)
    response.json({message:"Product updated"})
})

// Delete product by ID
app.delete('/products/:id',(request,response)=>{
    let idOfUrl = Number(request.params.id)
    let index = products.findIndex((product)=>product.productId === idOfUrl)
    if(index === -1)
    {
        return response.json({message:"Product unavailable"})
    }
    products.splice(index,1)
    response.json({message:"Product deleted"})
})
