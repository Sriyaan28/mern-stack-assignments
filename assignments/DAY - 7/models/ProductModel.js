import { Schema,model } from "mongoose";

// Creating Product Schema
const productSchema = new Schema({
    productId:{
        type: Number,
        required:[true,"Product ID is required"]
    },
    productName:{
        type: String,
        required:[true,"Product Name is required"]
    },
    price:{
        type: Number,
        required: [true,"Price is required"],
        min: 10000,
        max: 50000
    },
    brand:{
        type: String,
        required: [true,"Brand is required"]
    }
},{
    versionKey: false,
    timestamps: true,
});

export const ProductModel = model("product",productSchema)  // 'product' is the model name