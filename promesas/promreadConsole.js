const readline = require('readline'); //permite usuario interactuar con la consola
let fs = require('fs/promises'); //para poder trabajar con promesas
 //para que al escribir por consola no salga la misma letra doble


//codigo para poder tratar el modulo readline como una promesa (para que aparezcan preguntas por consola y insertemos x ahi datos)
function pregunta(pregunta){
    return new Promise((resolve) => {

        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(pregunta, (respuesta) => {
            rl.close();
            resolve(respuesta);
            
        });
       
    });
}
//modificamos el codigo de arriba para que cada letra de la respuesta que yo inserto x consola a las preguntas no se duplique
//hacemos que no haya tantas instancias de readline (rl) abiertas en cada llamada a pregunta. Si solo usamos
//un rl para todas las preguntas --> la interaccion se hara correctamente :)

// Reto 4 (Cont) (DIA1)
// • Mete la parte de readline en otra función en readConsole.js, su cabecera debe ser:
// readConsole(callback)

// Esta función debe preguntar por consola por el name, surname y age del usuario. Guardar dichos
// datos en un objeto literal, y aplicarle la callback recibida como parámetro de entrada de readConsole.

// • Estas dos funciones deben ser independientes, esto es que si se desea escribir y leer los datos de un
// objeto en un fichero se pueda hacer independiente de si este objeto se ha creado a mano o con el
// módulo readConsole.

// • Además la importanción de los módulos creados se debe hacer solo en el fichero index.js. De tal forma
// que con una sola llamada desde index.js obtengamos el mismo resultado que en el ejercicio anterior.


//PARA THEN/CATCH

// function readConsole(){
//     let user = {
//         name: "",
//         surname: "",
//         age: 0
//     }

//PARA ASYNC/AWAIT
    async function readConsole(){
        let user = {
            name: "",
            surname: "",
            age: 0
        }

// rl.question("¿Cómo te llamas? ", (name) =>{
//     user.name = name;

//     rl.question("¿Cuál es tu apellido? ", (surname) =>{
//         user.surname = surname;

//         rl.question("¿Cuántos años tienes? ", (age) =>{
//             user.age = age;

//             callback(user);
//             rl.close();

//         });
//     });
// })};



//Reto 3 PROMESAS

//THEN/CATCH

// return pregunta("¿Cómo te llamas? ")
//     .then(name =>{
//         user.name = name;
//         return pregunta("¿Cuál es tu apellido? ")
//     })

//     .then(surname =>{
//         user.surname =surname;
//         return pregunta("¿Cuántos años tienes? ")
//     })

//     .then(age =>{
//         user.age = age;
//         return user;
//     });
// }



//ASYNC/AWAIT

try{
    user.name = await pregunta("¿Cómo te llamas? ");
    user.surname = await pregunta("¿Cuál es tu apellido? ");
    user.age = await pregunta("¿Cuántos años tienes? ")

    return user;
}catch(error){
    console.log(error);
}
}

module.exports = readConsole;

//readConsole(console.log) -- para mostrar x consola las preguntas y dsps el objeto creado

//readconsole tiene rl questions para capturar los atrib del objeto
//los inputs se guardan en user
//cuando todas preguntas contestadas -- llama a callback y le pasa el user con sus valores
//rlclose cierra el readline y ya esta