//Reto 1

//• Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
//• Pasados tres segundos, se debe imprimir “Mensaje 2”.
//• Y después de que se imprima este mensaje, que se imprima “Mensaje 3”

console.log("Mensaje 1");

setTimeout(function(){
    console.log("Mensaje 2");

    setTimeout(function(){
        console.log("Mensaje 3");
    }, 1000)

},3000)

//entro en la funcion, pasan 3 seg e imorime mensaje2.
//entro en la siguiente, pasa 1 segundo despues de los 3 de antes y se imprime mensaje3.