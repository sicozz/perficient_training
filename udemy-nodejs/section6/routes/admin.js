//module.exports = path.dirname(require.main.filename);
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const products = [];

const addProductHtml = `
<form action="/admin/add-product" method="POST">
    <input type="text" name="title">
    <button type=submit>Add Product</button>
</form>`

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;