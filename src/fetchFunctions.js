export async function getPokemonSpecie(value) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${value}`
  );
  return response.json();
}

export async function getPokemonForms(value) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
  return response.json();
}

export async function getAbilityInformation(text) {
  const response = await fetch(`https://pokeapi.co/api/v2/ability/${text}`);
  return response.json();
}
