//Reto 4
// • Mete la parte de fs en una función en writeAndReadObject, su cabecera debe ser:
// writeAndRead(path, obj)

// En esta función se debe escribir en el fichero cuyo nombre está en el parámetro path el objeto literal
// guardado en el parámetro obj. Y luego leer dicho fichero y mostrarlo
// por consola.

const fs = require('fs');

function writeAndRead(path, obj) {

    fs.writeFile(path, JSON.stringify(obj), (error) =>{

        if (error) {
            console.log(error);
        } else {
            console.log('Guardado :)');

            fs.readFile(path, (error, data) =>{
                if (error) {
                    console.log(error);
                } else {
                    console.log(data.toString());
                }
            });
        }
    });
}

module.exports = writeAndRead;

//funcion writeandread parametros= path y obj
//el fs.writefile hace que guardemos objeto en datos json (en index)
//fs.readfile lee lo que escribimos en archivo (en index)