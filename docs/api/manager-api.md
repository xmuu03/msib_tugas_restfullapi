# Manager API

## List Data Manager

Endpoint : GET /api/managers

Response Body Success :
```json
{
    "status": 200,
    "message": "get list manager success",
    "data" : [
        {
            "id_manager" : 1,
            "nama": "manager 1",
            "job" : "job 1"
        },
        {
            "id_manager" : 2,
            "nama": "manager 2",
            "job" : "job 2"
        },
    ]
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "get list manager failed",    
}
```

## Get Data Manager

Endpoint : GET /api/managers/:id

Response Body Success :
```json
{
    "status": 200,
    "message": "get manager success",
    "data" : {
        "id_manager" : 1,
        "nama": "manager 1",
        "job" : "job 1"
    }
}
```

Response Body Error :
```json
{
    "status": 404,
    "message": "data not found",    
}
```

## Create Data Manager

Endpoint : POST /api/managers

Request Body :

```json
{
    "nama": "new manager",
    "job" : "new job"
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "create manager success",
    "data" : {        
        "nama": "new manager",
        "job" : "new job"
    },    
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "create manager failed",    
}
```


## Update Data Manager

Endpoint : PUT /api/managers/:id

Request Body :

```json
{
    "nama": "manager updated", //optional
    "job" : "job updated" //optional
}
```

Response Body Success :
```json
{
    "status": 200,
    "message": "Update manager success",
    "data" : {
        "id_manager" : 1,
        "nama": "manager update",
        "job" : "job updated"
    },            
}
```

Response Body Error :
```json
{
    "status": 500,
    "message": "Update manager failed",    
}
```


## Remove Data Manager

Endpoint : DELETE /api/managers/:id

Response Body Success :
```json
{
    "status": 200,
    "message": "Remove manager success",
    "data" : {
        "id_manager" : 1,
        "nama": "manager 1",
        "job" : "job 1"
    }
}
```

Response Body Error :
```json
{
    "status": 404,
    "message": "data not found",    
}
```