let book = null;

function getBook(request, response)
{
    let respuesta;

    if (book !== null) 
        respuesta = {error: false, codigo: 200, data: book}
     else
        respuesta = {error: true, codigo: 404, mensaje: "El libro no existe :("}
    
    response.send(respuesta);
};

function postBook(request, response)
{
    let respuesta;
    console.log(request.body);

    if(book == null || book.id_book !== request.body.id_book)
    {
        book = {id_book: request.body.id_book,
                id_user: request.body.id_user,
                title: request.body.title,
                type: request.body.type,
                author: request.body.author,
                price: request.body.price,
                photo: request.body.photo}

        respuesta = {error: false, codigo: 200,
                    mensaje: "Libro añadido", data: book};
    }

    else
        respuesta = {error: true, codigo: 200,
                    mensaje: "El libro ya existe"};
    
    response.send(respuesta);
};

function putBook(request, response)
{
    let respuesta
    if (book != null)
    {
        book.id_book = request.body.id_book;
        book.id_user = request.body.id_user;
        book.title = request.body.title;
        book.type = request.body.type;
        book.author = request.body.author;
        book.price = request.body.price;
        book.photo = request.body.photo;

        respuesta = {error: false, codigo: 200,
                    mensaje: "Libro actualizado", data: book};
    }

    else
        respuesta = {error: true, codigo: 200,
                    mensaje: "El libro no existe", data: book};

    response.send(respuesta);
};

function deleteBook(request, response)
{
    let respuesta;
    if (book != null)
    {
        book = null;
        respuesta = {error: false, codigo: 200,
                    mensaje: "Libro eliminado", data: book};
    }

    else
    respuesta = {error: true, codigo: 200,
                mensaje: "El libro no existe", data: book};

    response.send(respuesta);
};

module.exports = {getBook, postBook, putBook, deleteBook}