//Reto 3
//• Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
//módulo readline de node y solicita los valores del name, surname y age a través de la consola.

//• Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
//readline.

//• Este ejercicio debe hacerse en una única ejecución de JavaScript


let readline = require ('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let fs = require('fs');

function consola(callb){
    let persona = {
        name: '',
        surname: '',
        age: 0
    }


rl.question("¿Cómo te llamas? " , (name) =>{
    persona.name = name;

    rl.question("¿Cuál es tu apellido? ", (surname) =>{
        persona.surname = surname;

        rl.question("¿Cuántos años tienes? ", (age) =>{
            persona.age = age;

            callb(persona);
            rl.close();
        });
    });
})};


consola((persona) =>{
    
fs.writeFile('readline.json', JSON.stringify(persona), (error) =>{
    if (error){
        console.log(error);
    } else{
        console.log("Ya está en el json");
    }
})
})