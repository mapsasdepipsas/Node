//importacion de modulos
const cors = require('cors');
const express = require('express');
const bookRouters = require("./routers/user.routers");
const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 4000); //definicion puerto

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(bookRouters);


app.use(function(req, res, next)
{
    res.status(404).json({error: true,
                        codigo: 404,
                        message: "Endpoint no encontrado"})
})

app.use(errorHandling);

module.exports = app;