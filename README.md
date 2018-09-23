# Plastic Karma REST API

## Overview

Plastic Karma's REST API is a scaleable, quick, and efficent program. Using MongoDB and their Atlas service for scalable servers,
Heroku for scalable Node.js servers, and Express for quick responses and maximum efficentcy. The API allows all of our platforms (IOS, Andriod,
Websites), to communicate on one centeral database servers. This allows us to just change the one server instead of all of our platforms,
allowing increased reliability and ease of use.

## Tutorial

Some sample with [Postman](https://www.getpostman.com/) can be found [here](https://www.getpostman.com/collections/0bd736c7995968861cfc).

## Deploying

1. Clone (```git clone https://github.com/tokyojack/Plastic-Karma-User-Rest-API```
2. ``CD`` into the folder
3. Run ```npm install``` for the packages
4. Add your MongoDB atlas URL into the ```config.js``` file
5. Run ```node index.js``` to start the server
6. Start testing it out at ```localhost:8080```

## Queries

### POST - /add - Creates a product

* `email` - String
* `password` - Integer
* `current_score` - String
* `waste_score` - String
* `prior_month_score` - Integer

*Example successful response*
``` JSON
{
    "message": "User created successfully"
}
```
<h2></h2>


### GET - /find/<UPC> - Returns info about a product

*Example successful response*
``` JSON
{
    "_id": "5ba7b8102071244568b9b126",
    "email": "tokyojack2001@gmail.com",
    "password": "asd123",
    "current_score": 0,
    "waste_score": 0,
    "prior_month_score": 0
}
```
<h2></h2>


### POST - /increasescore - Increases a users score

* `email` - String
* `amount` - Integer

*Example successful response*
``` JSON
{
    "message": "Score added successfully",
    "score": 30
}
```
<h2></h2>


### Support

For support, simply just email us at support@plastickarma.com
