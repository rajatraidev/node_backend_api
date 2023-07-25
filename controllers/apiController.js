// Required Product Model
const Product = require('../models/products');

// Method For Product List
module.exports.productList = function(req, res){
    let data = {};
    let products = [];
    if(req){
        Product.find({}).then((product) => {
            if(product.length > 0){
                product.forEach(element => {
                    products.push(
                        {
                            id: element.id,
                            name: element.name,
                            quantity: element.quantity
                        }
                    )
                });
                data = {
                    products : products
                }
                return res.json(data);
            }
            data = {
                data : {
                    message : 'No Product Found'
                }
            }
            return res.json(data);
            
        }).catch((err)=> {
            data = {
                data : {
                    message : 'Error while getting product details'
                }
            }

            return res.json(data);
        })
    }
}

// Method For Create Product
module.exports.productCreate = function(req, res){
    let data = {};
    if(req.body.product && req.body.product.name && req.body.product.quantity){
        // Checking Product Exist
        Product.findOne({name: req.body.product.name}).then((product) => {
            // If Product Already Exist Return with Id
            if(product){
                data = {
                    data : {
                        data : {
                            message : "Product Already Exist",
                            productId : product.id
                        }
                    }
                }
                return res.json(data);
            }
            // Inserting Into Mongo
            Product.create({
            name: req.body.product.name,
            quantity: req.body.product.quantity
            }).then( (product) => {
                data = {
                        data : {
                            id : product.id,
                            name: product.name,
                            quantity: product.quantity
                        }
                    }
                    return res.json(data);
            }).catch((err) => {
                data = {
                    data : {
                        data : {
                            message : "Error while creating product"
                        }
                    }
                }
            return res.json(data);
            }); 
        }).catch((err) => {
            data = {
                data : {
                    data : {
                        message : "Error while creating product"
                    }
                }
            }
            return res.json(data);
        }); 
    }
    else{
        data = {
            data : {
                message : "Key is missing in body"
            }
        }
        return res.json(data);
    }
}

// Method For Delete Product
module.exports.productDelete = function(req, res){
    let data = {};
    if(req.params.id){
        Product.findById(req.params.id)
        .then((product) => {
            if(product){
                Product.findByIdAndDelete(req.params.id).then((product) => {
                    data = {
                        data : {
                            message : "product deleted"
                        }
                    }
                    return res.json(data);
                }).catch((err) =>  {
                    data = {
                        data : {
                            message : "Product Id Not Found"
                        }
                    }   
                    return res.json(data);
                });
            }
            else{
                data = {
                    data: {
                        message: "Product Id Not Found"
                    }
                }
                return res.json(data);
            }
        })
        .catch((err) => {
            data = {
                data : {
                    message : "Product Id Not Found"
                }
            }
            return res.json(data);
        });
    }
}

// Method For Update Product
module.exports.productUpdate = function(req, res){
    if(req.params.id && req.query.number){
        Product.findById(req.params.id)
        .then((product) => {
            if(product){
                let quantity = parseInt(product.quantity) + parseInt(req.query.number);
                Product.findByIdAndUpdate(req.params.id, {quantity: quantity}).then((product) => {
                    data = {
                        data : {
                            product : {
                                id : product.id,
                                name : product.name,
                                quantity : quantity
                            },
                            message : "updated successfully"
                        }
                    }
                    return res.json(data);
                }).catch((err) =>  {
                    data = {
                        data : {
                            message : "Product Not Found"
                        }
                    }   
                    return res.json(data);
                });
            }
            else{
                data = {
                    data: {
                        message: "Product Not Found"
                    }
                }
                return res.json(data);
            }
        })
        .catch((err) => {
            data = {
                data : {
                    message : "Product Not Found"
                }
            }
            return res.json(data);
        });
    }
}
