"use strict";

module.exports = function (app) {
    // const userController = require('../controllers/user');
    // app.route('/user').get(userController.get);
    // app.route('/auth').post(userController.auth);

    // //product
    // const productController = require('../controllers/product');
    // app.route('/product').get(productController.get);
    // // app.route('/product/category/:id').get(productController.getByCategoryId);
    // app.route('/product/brand/:id').get(productController.getByBrandId);
    // app.route('/product/collection/:id').get(productController.getByCollectionId);
    // app.route('/product/category/:name').get(productController.getCategory);

    //user
    var userController = require("../controllers/user");
    app.route("/user").get(userController.get);
    app.route("/user/:id").get(userController.findOne);
    app.route("/login").post(userController.auth);
    app.route("/user").put(userController.update);
    app.route("/user").post(userController.create);
    app.route("/user/:id").delete(userController.delete);

    //product
    var productController = require("../controllers/product");
    app.route("/product").get(productController.get);
    app.route("/product/:id").get(productController.getId);
    app.route("/product/category/:name").get(productController.getCategory);

    //brand
    var brandController = require("../controllers/brand");
    app.route("/brand").get(brandController.get);
    app.route("/brand/:id").get(brandController.getId);

    //category
    var categoryController = require("../controllers/category");
    app.route("/category").get(categoryController.get);
    app.route("/category/:id").get(categoryController.getId);

    //collection
    var collectionController = require("../controllers/category");
    app.route("/collection").get(collectionController.get);
    app.route("/collection/:id").get(collectionController.getId);
};
