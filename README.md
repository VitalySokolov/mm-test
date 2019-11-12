## Description

MM Assignment.
This is a simple application providing REST API to get a result.

## Installation

```bash
$ npm install
```

## REST API

The REST API to the application is described below.

## Get result with base rule

### Request

    http://localhost:3000/api/result?a=false&b=true&c=true&d=11.15&e=5&f=29
    
All query params are mandatory.

a, b, c - boolean
d - number
e, f - integers(should be in range (-9007199254740990, 9007199254740990), otherwise result could be incorrect).

### Response
    
    Status: 200 OK
    Content-Type: application/json
    {
        "h": "T",
        "k": 0.37166666666666615
    }
    
In case of invalid params or invalid keys combination:

    {
        "statusCode": 400,
        "error": "Bad Request",
        "message": <Error message>
    }
    
## Get result with custom rule

### Request

    http://localhost:3000/api/result/<rule>?a=false&b=true&c=true&d=11.15&e=5&f=29
    
Where allowed rule values are: [base, custom1, custom2].

### Response
    
    Status: 200 OK
    Content-Type: application/json
    {
        "h": "T",
        "k": 0.37166666666666615
    }
    
In case of invalid params, invalid keys combination, or invalid rule:

    {
        "statusCode": 400,
        "error": "Bad Request",
        "message": <Error message>
    }
    

## Running the app

Application is running on port 3000.

```bash
# development
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test
```
