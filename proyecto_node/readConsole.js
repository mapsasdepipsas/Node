const readline = require('readline'); //permite usuario interactuar con la consola
const rl = readline.createInterface(process.stdin, process.stdout);


// Reto 4 (Cont)
// • Mete la parte de readline en otra función en readConsole.js, su cabecera debe ser:
// readConsole(callback)

// Esta función debe preguntar por consola por el name, surname y age del usuario. Guardar dichos
// datos en un objeto literal, y aplicarle la callback recibida como parámetro de entrada de readConsole.

// • Estas dos funciones deben ser independientes, esto es que si se desea escribir y leer los datos de un
// objeto en un fichero se pueda hacer independiente de si este objeto se ha creado a mano o con el
// módulo readConsole.

// • Además la importanción de los módulos creados se debe hacer solo en el fichero index.js. De tal forma
// que con una sola llamada desde index.js obtengamos el mismo resultado que en el ejercicio anterior.

function readConsole(callback){
    let user = {
        name: "",
        surname: "",
        age: 0
    }

rl.question("¿Cómo te llamas? ", (name) =>{
    user.name = name;

    rl.question("¿Cuál es tu apellido? ", (surname) =>{
        user.surname = surname;

        rl.question("¿Cuántos años tienes? ", (age) =>{
            user.age = age;

            callback(user);
            rl.close();

        });
    });
})};


//readConsole(console.log) -- para mostrar x consola las preguntas y dsps el objeto creado

module.exports = readConsole;

//readconsole tiene rl questions para capturar los atrib del objeto
//los inputs se guardan en user
//cuando todas preguntas contestadas -- llama a callback y le pasa el user con sus valores
//rlclose cierra el readline y ya esta