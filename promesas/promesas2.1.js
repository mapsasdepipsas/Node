// RETO
// Hacer los retos 2, 3 y 4 de ayer utilizando las nuevas formas para gestionar promesas.
// Para poder hacer los ejercicios tendrás que hacer dos cosas:

// ● En primer lugar, importar el módulo
// fs/promises, para que los métodos de fs devuelvan promesas

// ● Por otro lado, el módulo readline no tiene ninguna opción para devolver promesas, por
// lo que tendrás que usar este código para poder tratarlo como una promesa.

// Hacer estos retos en una nueva carpeta dentro de la rama dia2 subir los cambios y hacer el
// merge con la rama main.


//Reto 2 (DIA1)
//• Crea un objeto con las siguientes propiedades: name, surname, age.

//• Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
//objeto e imprimelo por consola.

//• Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
//ejecutar el archivo de nuevo.

//let { error, log } = require('console');
let fs = require('fs/promises'); //para poder trabajar con promesas
//let readline = require("readline"); //importamos modulo readline para poder usarlo 
//const { json } = require('stream/consumers');



// //Reto 2 dia1 (ES EL RETO 1 DEL DIA2 CON CALLBACKS)
let objeto = {
    name: "Mabel",
    surname: "San Román",
    age: 23,
}

// //creamos el json

let fichero = 'objetopromesa.json';

// // objeto a JSON y guardamos en archivo
// fs.writeFile(fichero, JSON.stringify(objeto), () => {
//     if (error) {
//       console.log(error);
    
//     }else{
//     console.log('Objeto guardado :)');
//     }

//     // leer json con el readfile
// fs.readFile(fichero, (error, data) => {
//     if (error) {
//     console.log(error);

//     }else{
//         console.log(data.toString());
//     }

// });
// });



//Reto 1 PROMESAS

//then/catch (me gusta más así)

fs.writeFile(fichero, JSON.stringify(objeto))

.then( () => {
    return fs.readFile(fichero)
})


.then(data => {
    console.log('Objeto guardado :)');
    console.log(data.toString());
})


.catch( error => {
    console.log(error);
})

//async/await

// async function asyncAwait (){
// try{

//     await fs.writeFile(fichero, JSON.stringify(objeto))

//     let nuevo = await fs.readFile(fichero, 'utf8')

//     console.log(nuevo);

//     } catch (error){
//         console.log(error);
//     }
// }

// asyncAwait()
