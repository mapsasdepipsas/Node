//Reto 2
//• Crea un objeto con las siguientes propiedades: name, surname, age.

//• Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
//objeto e imprimelo por consola.

//• Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
//ejecutar el archivo de nuevo.

let fs = require('fs');

let objeto = {
    name: "Mabel",
    surname: "San Román",
    age: 23,
}

//creamos el json
let fichero = 'objeto.json';

// objeto a JSON y guardamos en archivo
fs.writeFile(fichero, JSON.stringify(objeto), (error) => {
    if (error) {
      console.log(error);
    
    }else{
    console.log('Objeto guardado :)');
    }

    // leer json con el readfile
fs.readFile(fichero, (error, data) => {
    if (error) {
    console.log(error);

    }else{
        console.log(data.toString());
    }

});
});