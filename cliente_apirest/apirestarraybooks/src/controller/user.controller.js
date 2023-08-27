const Book = require ('../models/book');

let books = [];
let book = null;

function getBooks(request, response){
    let respuesta;

    if (book != null) 
        respuesta = {error: false, codigo: 200, data: book};
    else
        respuesta = {error: true, codigo: 404, mensaje: "El libro no existe :("};
    
    response.send(respuesta);
}

function getBookbyId(request, response){
    let idbook = parseInt(request.query.id);
    let book = books.find(book => book.id_book == idbook);

    if (book){
        response.json({error: false, codigo: 200, data: book});
    }else{
        response.status(404).json({error: true, codigo: 404, mensaje: "El libro no existe :("})
    }
}

function postBooks(request, response){
    let respuesta;

    if (book == null) {
        book = {
            id_book: request.body.id_book,
            id_user: request.body.id_user,
            title: request.body.title,
            type: request.body.type,
            author: request.body.author,
            price: request.body.price,
            photo: request.body.photo
        };

        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro añadido",
            data: book
        };
    } else {
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "El libro ya existe"
        };
    }
    
    response.send(respuesta);
}

function putBook(request,response){
    let respuesta;
    if (book != null) {
        book.id_book = request.body.id_book;
        book.id_user = request.body.id_user;
        book.title = request.body.title;
        book.type = request.body.type;
        book.author = request.body.author;
        book.price = request.body.price;
        book.photo = request.body.photo;

        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro actualizado",
            data: book
        };
    } else {
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "El libro no existe",
            data: book
        };
    }
    
    response.send(respuesta);
}

function deleteBook(request, response){
    let respuesta;

    if (book != null) {
        book = null;
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro eliminado",
            data: book
        };
    } else {
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "El libro no existe",
            data: book
        };
    }
    
    response.send(respuesta);
}


module.exports = {getBooks, getBookbyId, postBooks, putBook, deleteBook};