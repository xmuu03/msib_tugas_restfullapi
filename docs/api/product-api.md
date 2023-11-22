# Product API

## List Data Product

Endpoint : GET /api/products

Response Body Success :
```json
{
    "status": 200,
    "message": "get products success",
    "data" : [
        {
            "id_product" : 1,
            "name": "product 1",
        },
        {
            "id_product" : 2,
            "name": "product 2",
        },
    ]
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "get list products failed",    
}
```

## Get Data Product

Endpoint : GET /api/products/:id

Response Body Success :
```json
{
    "status": 200,
    "message": "get products success",
    "data" : {
        "id_product" : 1,
        "name": "product 1",
    }
}
```

Response Body Error :
```json
{
    "status": 404,
    "message": "product not found",    
}
```

## Create Data Product

Endpoint : POST /api/products

Request Body :

```json
{
    "name": "new product",
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "create products success",
    "data" : {        
        "name": "new product",
    },    
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "create products failed",    
}
```


## Update Data Product

Endpoint : PUT /api/products/:id

Request Body :

```json
{
    "name": "product update",
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "Update product success",
    "data" : {
        "id_product" : 1,
        "name": "product update",
    },            
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "Update product failed",    
}
```


## Remove Data Product

Endpoint : DELETE /api/products/:id

Response Body Success :
```json
{
    "status": 200,
    "message": "Remove employee success",
    "data" : {
        "id_product" : 1,
        "name": "product name",
    }
}
```

Response Body Error :
```json
{
    "status": 404,
    "message": "product not found",    
}
```