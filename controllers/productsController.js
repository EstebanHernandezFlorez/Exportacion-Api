const Products = require("../models/products");


const getProduct = async (req, res) => {
    const products = await Products.find();
    res.json(products);
};


const postProduct = async (req, res) => {
    const body = req.body;
    let msg = "Products inserted succesful";
    try {
        const products = new Products(body);
        await products.save();
    } catch (error) {
        msg = error;
    }
    res.json({ msg: msg });
};

const putProduct = async (req, res) => {
    const _id = req.params.id
    const { nameProduct, price, weight } = req.body
    let msg = 'Products updated succesful'
    try {
        await Products.findByIdAndUpdate({ _id: _id }, { nameProduct: nameProduct, price: price, weight: weight })
    } catch (error) {
        msg = error
    }
    res.json({ msg: msg })
}

const deleteProduct = async (req, res) => {
    const _id = req.params.id
    try {
        await Products.findByIdAndDelete({ _id: _id })
        res.json('Products deleted successfully')
    } catch (error) {
        res.status(500).json(error, { msg: 'There was problem deleting the product' })
    }
}




module.exports = {
    // exportar funcion
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
};
