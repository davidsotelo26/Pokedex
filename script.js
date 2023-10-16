const getAllPokemons = async () => {
  let arrayPokemons = [];
  for (let index = 1; index <= 151; index++) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + [index]);
    const pokemon = await response.json();

    arrayPokemons.push(pokemon);
  }
  return arrayPokemons;
};

const mapeoPokemons = (pokemonSinMapeo) => {
  return pokemonSinMapeo.map((pokemon) => ({
    name: pokemon.name,
    imagen: pokemon.sprites.versions['generation-i'].yellow.front_gray,
    tipo: pokemon.types[0].type.name,
  }));
};

const dibujaPokemons = (mapeoPokemons) => {

  const sectionListaPokemons$$ = document.querySelector(".listaPokemons")
  
  sectionListaPokemons$$.innerHTML=``

  for (const pokemon of mapeoPokemons) {

    const pokeDiv$$ = document.createElement("div");
        pokeDiv$$.classList.add("divPokemon");
        pokeDiv$$.classList.add("fondo-carta");

    const pokemonNombre$$ = document.createElement("h2");
        pokemonNombre$$.classList.add("nombrePokemon");
        pokemonNombre$$.textContent = pokemon.name;

    const pokemonFoto$$ = document.createElement("img");
        pokemonFoto$$.setAttribute("src", pokemon.imagen);
        pokemonFoto$$.classList.add("fotoPokemon");

    const ptype$$ = document.createElement("p");
        ptype$$.textContent = pokemon.tipo;
        ptype$$.classList.add("fuente-pokemon");
        ptype$$.classList.add("textoTipoPokemon");

    pokeDiv$$.appendChild(pokemonFoto$$);
    pokeDiv$$.appendChild(pokemonNombre$$);
    pokeDiv$$.appendChild(ptype$$);
    
    sectionListaPokemons$$.appendChild(pokeDiv$$);  
    }
  };

const init = async () => {
  const pokemons = await getAllPokemons();
  const pokemonMapeados = mapeoPokemons(pokemons);
  
  const filtroFuego = document.querySelector(".tipoFuego")
  const filtroNormal = document.querySelector(".tipoNormal")
  const filtroAgua = document.querySelector(".tipoAgua")
  const filtroTierra = document.querySelector(".tipoTierra")
  const filtroElectrico = document.querySelector(".tipoelectrico")
  const filtroHada = document.querySelector(".tipohada")
  const filtroVeneno = document.querySelector(".tipoveneno")
  const filtroLucha = document.querySelector(".tipolucha")
  const filtroFantasma = document.querySelector(".tipofantasma")
  const filtroRoca = document.querySelector(".tiporoca")
  const filtroDragon = document.querySelector(".tipodragon")
  const filtroPsiquico = document.querySelector(".tipopsiquico")
  const filtroBicho = document.querySelector(".tipobicho")
  const filtroHielo = document.querySelector(".tipohielo")
  const filtroReset = document.querySelector(".tipoReset")

  filtroNormal.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "normal");
    dibujaPokemons(filtrado);
  });

  filtroFuego.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "fire");
    dibujaPokemons(filtrado);
  });

  filtroAgua.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "water");
    dibujaPokemons(filtrado);
  });

  filtroTierra.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "ground");
    dibujaPokemons(filtrado);
  });

  filtroElectrico.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "electric");
    dibujaPokemons(filtrado);
  });

  filtroHada.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "fairy");
    dibujaPokemons(filtrado);
  });

  filtroVeneno.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "poison");
    dibujaPokemons(filtrado);
  });

  filtroLucha.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "fighting");
    dibujaPokemons(filtrado);
  });

  filtroFantasma.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "ghost");
    dibujaPokemons(filtrado);
  });

  filtroRoca.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "rock");
    dibujaPokemons(filtrado);
  });

  filtroDragon.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "dragon");
    dibujaPokemons(filtrado);
  });

  filtroPsiquico.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "psychic");
    dibujaPokemons(filtrado);
  });

  filtroBicho.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "bug");
    dibujaPokemons(filtrado);
  });

  filtroHielo.addEventListener("click", function(){
    var filtrado = pokemonMapeados.filter(pokemon => pokemon.tipo === "ice");
    dibujaPokemons(filtrado);
  });

  filtroReset.addEventListener("click", function(){
    var TodosLosPokemons = pokemonMapeados;
    dibujaPokemons(pokemonMapeados);

  });

  dibujaPokemons(pokemonMapeados);

};

init();