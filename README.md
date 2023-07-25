﻿# Node Backend Api
Steps to Add Node_Backend_API to your local system
1. Install VSCode (if you don't have on your system).
2. Install Mongodb (if you don't have on your system).
3. Install Postman (if you don't have on your system).
4. Clone this project using https url or download the source code.
5. Open VSCode and move to the node_backend_api or your folder name where this project is cloned.
6. Open CLI and write npm start to start the server

# Get Api to get list of product : /products
1. Open Postman use get method and hit the url http://localhost:7000/products

# Post Api to create poduct : /products/create
1. Open postman use post method and use url http://localhost:7000/products/create
2. Use this body method : Request Payload
{
    "product" : {
        "name" : "productname",
        "quantity" : 1
    }
}

# Delete Api to delete product : /products/:id
1. Open Postman use delete method and use url http://localhost:7000/products/:id
2. :id will be replace with actual product id

# Post Api to update product quantity :/products/:id/update_quantity/?number=10
1. Open Postman use post method and use url http://localhost:7000/products/:id/update_quantity/?number=10
2. :id will be replace with actual product id and number can be 1 to n
