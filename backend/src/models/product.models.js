const Mongoose = require("mongoose");

const productSchema = new Mongoose.Schema({
    productname: {
        type: String,
        required: [true, "Product name is required"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"]
    },
    category: {
        type: String,
        required: [true, "Product category is required"]
    },
    stock: {
        type: Number,
        required: [true, "Product stock is required"],
        min: [0, "Stock cannot be negative"]
    },
    Quality: {
        type: Number,
        required: [true, "Product quality is required"],
        enum: ["new", "used", "refurbished"]
    },
    image: {
        type: String,
        required: [true, "Product image URL is required"]
    }   
}, { timestamps: true });

const Product = Mongoose.model("Product", productSchema);

module.exports = Product;