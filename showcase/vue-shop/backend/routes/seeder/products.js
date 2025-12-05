//https://medium.com/@jaouad_45834/full-stack-shopping-cart-with-mevn-stack-part-1-89dae1f35378

const express = require('express');
const router = express.Router();
const faker = require('faker');
faker.locale = "en";

const Model = require('../../model');
const {Product, Manufacturer} = Model;

router.get('/', function (req, res, next) {
    for (let i = 0; i < 20; i++) {
        let product = new Product({
            name : faker.commerce.productName(),
            description : faker.lorem.paragraph(),
            image: "https://images-na.ssl-images-amazon.com/images/I/4196ru-rkjL.jpg",
            price : faker.commerce.price(),
            manufacturer: faker.company.companyName()
            
        });
        
        product.save();
    }
    res.redirect('/')
});


module.exports = router;