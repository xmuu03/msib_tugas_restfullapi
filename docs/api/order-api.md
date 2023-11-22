# Order API

## Create Order

Endpoint : POST /api/orders

Request Body :

```json
{
    "idProduct": 1,
    "price": 100000,    
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "create order success",
    "data" : {        
        "id_orders": 1,
        "id_product": 1,
        "price": 100000,
    },    
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "create order failed",    
}
```

## Remove Order

Endpoint : DELETE /api/orders/:id

Response Body Success :
```json
{
    "status": 200,
    "message": "remove order success",
    "data" : {
        "id_orders": 1,
        "id_product": 1,
        "price": 100000,
    }
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "remove order failed",
}
```