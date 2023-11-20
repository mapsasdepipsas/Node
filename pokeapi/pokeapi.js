//los id del formulario
let input = document.querySelector('#input');
let boton = document.querySelector('#boton');
let notexto= document.querySelector('#notexto');

//los id de donde sale el pokemon
let resultado= document.querySelector('.resultado')
let pokemonh3 = document.querySelector('#pokemonh3');
let pokemonfoto =document.querySelector('#pokemonfoto');
let pokemonhabiltit =document.querySelector('#pokemonhabiltit');
let pokemonhabilidades= document.querySelector('#pokemonhabilidades');

let astring =(texto) =>{
    texto = texto[0].toUpperCase() + texto.substring(1); //para que salgan en las habilidades las letras minusculas y mayus.
    return texto;
}

let sacarpokemon = (info) => {
    let request = fetch(`https://pokeapi.co/api/v2/pokemon/${info}`); //hacemos el fetch

    request.then( data => data.json()) //que la data la transforme en json
            .then(({name, id, abilities, sprites}) => { //lo que queremos que nos muestre
                name = astring(name);
                pokemonh3.innerHTML = `${name} (${id})`; //cambiamos el h3 a nombre e id del pokemon al darle al boton

                if(sprites.front_default != null){
                    pokemonfoto.src = sprites.front_default;
                }else{
                    pokemonfoto.src = "https://i.pinimg.com/originals/81/82/d8/8182d8cbea7f45d66d6511153e21ca32.png"
                }


                pokemonhabiltit.innerHTML = "Habilidades:";
                let listahabilidades = document.querySelector("#listahabilidades");
                if(listahabilidades != null){
                    listahabilidades.remove();
                }

                let nuevalista = document.createElement("ul"); //creamos nueva lista q almacene el pokemon insertado
                nuevalista.id = 'listahabilidades';
                resultado.appendChild(nuevalista);

                abilities.forEach(elemento => { //cada habilidad creara un li que se añadira a la lista de habilidades
                    let nuevo = document.createElement('li');
                    nuevalista.appendChild(nuevo);
                    
                    let ability = astring(elemento.ability.name);
                    nuevo.innerHTML = ability;
                });  
            })
            .catch( (error) =>{
                pokemonh3.innerHTML = "Este pokemon no existe :(";
                pokemonhabiltit.innerHTML = "Introduce otro nombre";

                if(document.querySelector("#listahabilidades") != null){
                    document.querySelector("#listahabilidades").remove();
                    pokemonhabilidades.remove();
                }
                console.log(error)
            })
}


boton.addEventListener("click", (evento) => {
    evento.preventDefault(); // asi no se recarga la pagina
    let inputvalue = input.value;
    if (inputvalue == '' || inputvalue == "0") {
        notexto.innerHTML = "Busca un pokémon";
    } else {

        notexto.innerHTML = "";
        inputvalue = inputvalue.toLowerCase(); //para que de igual escribir en mayus o minus
        pokemonhabilidades.innerHTML = ""; // limpia lo introducido
        sacarpokemon(inputvalue);
    }
},);