import { Schema,model } from "mongoose";

// Create cartSchema
const cartSchema = new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref:"product"  //should contain the name of the product model 
    },
    count:{
        type: Number,
        default: 1
    }
})

// Create User Schema -> eg:(username, password, email, age)
const userSchema = new Schema({
    //structure of User resource
    username:{
        type: String,                         //=>  String in mongoose, string in js
        required:[true,"Username is required"],
        minLength:[4,"Min length is 4 chars"],
        maxLength:[8,"Max length is 8 chars"]
        // pattern: ['regex pattern',""]
    },
    password:{
        type: String,
        required:[true,"Password is required"],
    },
    email:{
        type: String,
        required:[true,"Email is required"],
        unique: [true,"Email already exists"]
    },
    age:{
        type: Number,
        required:[true,"Age is required"]
    },
    cart: [cartSchema],
},{
    versionKey: false,
    timestamps: true,
});

// Generate UserModel
export const UserModel = model("user",userSchema)


