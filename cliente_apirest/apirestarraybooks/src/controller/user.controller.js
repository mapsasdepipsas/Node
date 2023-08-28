const Book = require ('../models/book');

let books = [new Book(32, 398, "Los juegos del hambre", "tapa blanda", "Suzanne Collins", 20, "https://m.media-amazon.com/images/I/51h3YpAz6rL._AC_UF1000,1000_QL80_.jpg"),
            new Book(55, 85, "1984", "Tapa dura", "George Orwell", 13, "https://m.media-amazon.com/images/I/81WunXo0giL._AC_UF1000,1000_QL80_.jpg"),
            new Book(71, 32, "El retrato de Dorian Gray", "Tapa blanda", "Oscar Wilde", 14, "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625453d2824577de941130f6_60ed4ad94998371648c8067e_9788418008573_alta201.jpeg")]


function getBooks(request, response){
    let respuesta;

    if (books.length > 0) 
        respuesta = {error: false, codigo: 200, data: books};
    else
        respuesta = {error: true, codigo: 404, mensaje: "No hay libros :("};
    
    response.send(respuesta);
}

function getBookbyId(request, response){
    let idbook = request.query.id_book; 
    let book = books.find(book => book.id_book == idbook);

    if (book != -1){ //si book existe (no es igual a null, undefined...)
        let respuesta ={
            error: false,
            codigo: 200, 
            mensaje: "Libro encontrado",
            data: book
        }
        response.send(respuesta);
    }else{
        let respuesta={
            error: true,
            codigo: 404,
            mensaje: "El libro no existe"
        }
        response.send(respuesta);
    }
}

function postBooks(request, response){

    let nuevolibro = {
        id_book: request.body.id_book,
        id_user: request.body.id_user,
        title: request.body.title,
        type: request.body.type,
        author: request.body.author,
        price: request.body.price,
        photo: request.body.photo
    };

    let libroYaExiste = books.find(book => book.id_book == nuevolibro.id_book);

    if (libroYaExiste){
        let respuesta = {
            error: true,
            codigo: 200,
            mensaje: "El libro ya existe",
            data: null
        }
        response.send(respuesta);

    }else{
        books.push(nuevolibro);

        let respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro añadido :)",
            data: nuevolibro
        };
        response.send(respuesta);
    }
}

function putBook(request,response){
    let libroEditar = request.query.id_book; //es request.query NO request.body
    let libroeditado ={
        id_book: request.body.id_book,
        id_user: request.body.id_user,
        title: request.body.title,
        type: request.body.type,
        author: request.body.author,
        price: request.body.price,
        photo: request.body.photo
    };

    let indexlibro = books.find(book => book.id_book == libroEditar);
    
    if(indexlibro != -1){
        books[indexlibro] = libroeditado

        let respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Libro actualizado",
            data: libroeditado
        }
        response.send(respuesta);
    }else{
        let respuesta ={
            error: true,
            codigo: 404,
            mensaje: "El libro no existe",
            data: null
        }
        response.send(respuesta);
    }
}

function deleteBook(request, response){
    let libroborrar = request.query.id_book; 
    let indexlibro = books.find(book => book.id_book == libroborrar)

    if (indexlibro != -1){
        books.splice(indexlibro, 1); //lo eliminamos del array
        let respuesta ={
            error: false,
            codigo: 200,
            mensaje: "Libro eliminado",
            data: indexlibro
        }
        response.send(respuesta);
    }else{
        let respuesta ={
            error: true,
            codigo: 404,
            mensaje: "El libro no existe",
            data: null
        }
        response.send(respuesta);
    }
}


module.exports = {getBooks, getBookbyId, postBooks, putBook, deleteBook};
