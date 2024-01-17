export async function getPokemonSpecieData(value) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${value}`
  );
  return response.json();
}

export async function getPokemonFormData(value) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
  return response.json();
}

export async function getAbilityData(text) {
  const response = await fetch(`https://pokeapi.co/api/v2/ability/${text}`);
  return response.json();
}

export async function getTypeData(value) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${value}`);
  return response.json();
}
