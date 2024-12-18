const express = require('express')
const { productCtrl } = require("../controllers/productCtrl");

const productRouter = express.Router();

productRouter.get('/home', productCtrl.home)

module.exports = {
    productRouter
};