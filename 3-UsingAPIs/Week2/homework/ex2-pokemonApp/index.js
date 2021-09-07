'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  // TODO complete this function
  try {
    const response = await fetch(url);
    if (response.ok) {
      const pokemonData = await response.json();
      return pokemonData;
    }
    throw new Error(response.status);
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons() {
  //Get data for pokemon list
  const pokemonData = await fetchData(
    'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
  );
  const allPokemons = pokemonData.results;
  // Created Select element
  const pokemonList = document.createElement('select');
  pokemonList.name = 'Select-your-pokèmon';
  pokemonList.style.width = '150px';
  pokemonList.style.visibility = 'hidden';
  document.body.appendChild(pokemonList);
  //Created dynamic option children
  const eachPokemon = document.createElement('optgroup');
  eachPokemon.setAttribute('label', 'The first Pokèmons');
  pokemonList.appendChild(eachPokemon);
  //forEach loop to populate all options from <select>
  allPokemons.forEach((pokemon) => {
    const originalPokemon = document.createElement('option');
    originalPokemon.setAttribute('value', `${pokemon.name}`);
    originalPokemon.textContent = `${pokemon.name}`;
    eachPokemon.appendChild(originalPokemon);
  });
  //created heading element
  const title = document.createElement('button');
  title.textContent = 'Get your Pokèmon';
  title.style.width = '300px';
  title.style.position = 'absolute';
  title.style.top = '50%';
  title.style.left = '40%';
  title.style.fontSize = '2em';
  document.body.appendChild(title);
  //add event listener if user click the button
  const buttonHandler = () => {
    pokemonList.style.visibility = 'visible';
    title.style.visibility = 'hidden';
  };
  title.addEventListener('click', buttonHandler);
  //add event listener if user change pokemon
  pokemonList.addEventListener('change', (event) => {
    allPokemons.forEach((pokemon) => {
      if (pokemon.name === event.target.value) {
        fetchImage(pokemon.url);
      }
    });
  });
}

async function fetchImage(url) {
  //Request image of each pokemon
  const pokemonImage = await fetchData(url);
  const image = pokemonImage.sprites.front_default;

  //inserting image to DOM element

  onePokemonImage.setAttribute('src', `${image}`);
}
const onePokemonImage = document.createElement('img');
onePokemonImage.style.width = '100px';
document.body.appendChild(onePokemonImage);

async function main() {
  // TODO complete this function
  try {
    await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    await fetchAndPopulatePokemons(fetchData);
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column-reverse';
  } catch (error) {
    console.log('No data has been found');
  }
}
window.addEventListener('load', main);
