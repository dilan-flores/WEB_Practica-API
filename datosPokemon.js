const consultarPokemon = (id,number) => 
{
    //Llamada a una API
    // Estrategia para llamar a una API, en este caso fetch
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //fetch: Permite optener información de cualquier API
        //vamos atrabajar con promesas. Retorna una promesa (No entendí)
    .then(response => { // Para obtener la respuesta la cual se convierte en .json
        console.log(response); // Imprimir en pantalla
        return response.json();
    })
    .then(data => {
        //console.log(data);
        pintarPokemon(data, number);
    })
    .catch(error => {
        console.log(error);
    });
}

//consultarPokemon(1)

//Permite ejecutar la llamada a consultar pokemon
const btnSeleccionar = () => 
{
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon,1);
    consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
    let item = lista.querySelector(`#pok-${id}`); //Idewntifica en que caja pintar
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = data.name;
}

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1





