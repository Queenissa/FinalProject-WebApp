const Product = require('../models/product.model');

//Get All product
const getAllProducts = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            return res.send(err)
        }
        res.send(products)
    });
}

//Search Products
const getProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            return res.send(err)
        }
        res.render('products_view', {
            product: product,
            name: req.session.name
        });
    });
}


function getId() {
    Product.find({}, 'product_number -_id', (err, product) => {
        if (err) {
            return res.send(err)
        }
        let lastID = product[product.length - 1]
        var number = lastID.product_number;
    });
}

//Add Products
const addProduct = (req, res) => {
    var date = new Date(Date.now())
    var created_at = date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear() + ' :: ' + date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
    var updated_at = date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear() + ' :: ' + date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();

    let createProduct = new Product({
        productNumber: req.body.productNumber,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        price: req.body.price,
        qty: req.body.qty,
        img: req.body.img,
        created_at: created_at,
        updated_at: updated_at,
        created_by: req.body.userlogged,
        updated_by: req.body.userlogged
    });

    productToCreate.save((err, product) => {
        if (err) {
            return res.send(err);
        }
        res.redirect('/products')
    });
}


module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
}