# Employee API

## List Data Employee

Endpoint : GET /api/employees

Response Body Success :
```json
{
    "status": 200,
    "message": "get employees success",
    "data" : [
        {
            "id_emplooye" : 1,
            "nama": "John",
            "job": "programmer",
            "salary": 50000000
        },
        {
            "id_emplooye" : 2,
            "nama": "John",
            "job": "programmer",
            "salary": 50000000
        },
    ]
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "get list employees failed",    
}
```

## Get Data Employee

Endpoint : GET /api/employees/:id

Response Body Success :
```json
{
    "status": 200,
    "message": "get employees success",
    "data" : {
        "id_emplooye" : 1,
        "nama": "John",
        "job": "programmer",
        "salary": 50000000
    }
}
```

Response Body Error :
```json
{
    "status": 404,
    "message": "employee not found",    
}
```

## Create Data Employee

Endpoint : POST /api/employees

Request Body :

```json
{
    "nama": "John Doe",
    "job": "programmer",
    "salary": 50000000
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "create employees success",
    "data" : {        
        "nama": "John",
        "job": "programmer",
        "salary": 50000000
    },    
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "create employees failed",    
}
```


## Update Data Employee

Endpoint : PUT /api/employees/:id

Request Body :

```json
{
    "nama": "John Doe Updated",
    "job": "programmer",
    "salary": 50000000
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "Update employees success",
    "data" : {
        "id_emplooye" : 1,
        "nama": "John Doe Updated",
        "job": "programmer",
        "salary": 50000000
    },            
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "Update employees failed",    
}
```


## Remove Data Employee

Endpoint : DELETE /api/employees/:id

Response Body Success :
```json
{
    "status": 200,
    "message": "Remove employee success",
    "data" : {
        "id_emplooye" : 1,
        "nama": "John",
        "job": "programmer",
        "salary": 50000000
    }
}
```

Response Body Error :
```json
{
    "status": 404,
    "message": "employee not found",    
}
```