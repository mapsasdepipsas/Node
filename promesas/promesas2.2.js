//Reto 3 (DIA1)
//• Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
//módulo readline de node y solicita los valores del name, surname y age a través de la consola.

//• Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
//readline.

//• Este ejercicio debe hacerse en una única ejecución de JavaScript


//let readline = require ('readline');
//let rl = readline.createInterface(process.stdin, process.stdout);
//let fs = require('fs');
//let { error } = require('console');
let fs = require('fs/promises'); //para poder trabajar con promesas
let readline = require("readline"); //importamos modulo readline para poder usarlo 



//codigo para poder tratar el modulo readline como una promesa (para que aparezcan preguntas por consola y insertemos x ahi datos)
function pregunta(pregunta){
    let question = new Promise((resolve, reject) =>{
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}


//Reto 3 dia1 (ES EL RETO 2 DEL DIA2 CON CALLBACKS)

function consola(){
    let persona = {
        name: '',
        surname: '',
        age: 0
    }


// rl.question("¿Cómo te llamas? " , (name) =>{
//     persona.name = name;

//     rl.question("¿Cuál es tu apellido? ", (surname) =>{
//         persona.surname = surname;

//         rl.question("¿Cuántos años tienes? ", (age) =>{
//             persona.age = age;

//             callb(persona);
//             rl.close();
//         });
//     });
// })};


// consola((persona) =>{
    
// fs.writeFile('readline.json', JSON.stringify(persona), (error) =>{
//     if (error){
//         console.log(error);
//     } else{
//         console.log("Ya está en el json");
//     }
// })
// })



//Reto 2 PROMESAS

return pregunta("¿Cómo te llamas? ")
    .then(name =>{
        persona.name = name;
        return pregunta("¿Cuál es tu apellido? ")
    })

    .then(surname => {
        persona.surname = surname;
        return pregunta("¿Cuántos años tienes? ")
    })

    .then(age => {
        persona.age = age;
        return persona;
    });
}


consola()
    .then(persona => {
        return fs.writeFile('promesas2.2.json', JSON.stringify(persona))
    })

    .then(() =>{
        console.log("Ya está en el json");
    })

    .catch((error) =>{
        console.log(error);
    })