const express = require("express");
require('dotenv').config();
const dbConnection = require("../database/config");
const { getProduct, putProduct, postProduct, deleteProduct } = require("../controllers/productsController");



class Server {
    constructor() {
        this.app = express();
        this.Listen();
        this.dbConnection();
        this.pathProducts = "/api/products";
        this.route();
    }
    async dbConnection() {
        await dbConnection();
    }
    route() {
        this.app.use(express.json());
        this.app.get(this.pathProducts, getProduct);
        this.app.put(this.pathProducts + "/:id", putProduct);
        this.app.post(this.pathProducts, postProduct);
        this.app.delete(this.pathProducts + "/:id", deleteProduct);
    }


    Listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
        });
    }
}




module.exports = Server;