//Reto 1
// Crea un servidor web con el módulo express que realice las siguientes tareas:

// 1. Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el
// cliente.

// 2. Debe mostrar por consola la url, método y el user-agent por el que se está haciendo la petición.

const express = require('express');
const app = express();

//middlewares para que aparezca por consola (next para cerrar el ciclo)
app.use((req, res, next) => {
    console.log("Petición recibida del cliente");
    console.log("URL: ", req.url);
    console.log("Metodo: ", req.method);
    console.log("User-agent: ", req.headers ['user-agent']);
    next();
});

// 3. Le retorne al usuario un mensaje del tipo application/json con el status code 200 y un mensaje con
// este contenido: { ok: true, message: ‘Recibido!’ }

app.get('/', (req, res)=> {
    res.status(200).json({ok: true, message: "Recibido!"})
})

// 4. Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode: 200 y un
// mensaje con este contenido: { ok: true, message: ‘Adios!’ }

app.get('/bye', (req, res) =>{
    res.status(200).json({ok: true, message: "Adios!"})
})

app.listen(3000);

//5. Comprobar su funcionamiento con Postman.
