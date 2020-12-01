<<<<<<< HEAD
const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('index', { name: 'Josh', prods: products, path: '/', pageTitle: 'Home' });
        })
        .catch(err => console.log(err));
};

// exports.getProductDetail = (req, res, next) => {
//     Product.findById(req.params.prodId)
//         .then(product => {
//             res.render('product-detail', { prod: product, pageTitle: 'Product Detail', path: '/', name: 'Edward' });
//         })
//         .catch(err => console.log(err));
// }

exports.addToCart = (req, res, next) => {
    req.user.addToCart(req.body.id)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));
}

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            console.log(user);
            res.render('cart', { cart: user.cart, pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Edward' });
        })
        .catch(err => console.log(err));
}

exports.deleteInCart = (req, res, next) => {
    req.user.removeFromCart(req.body.prodId)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));

=======
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
>>>>>>> d24f10696d5bb0d95b201439408306fb93c69e8b
}