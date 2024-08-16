const { Schema, model } = require("mongoose");

const ProductsSchema = {
    nameProduct: {
        type: String,
        unique: true,
        required: [true, "The field nameProduct is required"],
    },
    price: {
        type: Number,
        required: [true, "The field price is required"],
        minlength: [4, "Min 4 characters"],
    },
    weight: {
        type: String,
        required: [true, "The field weight is required"],
    },
};

module.exports = model("Products", ProductsSchema, "products"); //la primera vehicle se refiere a la clase general
//la segunda  VehicleSchema se refiere al schema(nombre del esquema) /// el tercero vehicle nombre de la coleccion
