import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    productprice: {
        type: Number,
        required: true,
    },
    productdescription: {
        type: String,
        required: true,
    },
    badges: [
        {
            text: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            }
        }
    ],
});

const Product = mongoose.model("Product", productSchema);

export default Product;