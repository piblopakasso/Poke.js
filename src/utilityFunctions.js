export function findValue(array, key1, key2) {
  return key2
    ? array.map((item) => item[key1][key2])
    : array.map((item) => item[key1]);
}

export function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatId(id) {
  const str = `000${id}`;
  return id.length === 5 ? str.slice(-5) : str.slice(-4);
}

export function removeDuplicate(arr) {
  const set = new Set(arr);
  return Array.from(set);
}

export function sortItems(arr) {
  return arr.sort(function (a, b) {
    return a.length - b.length;
  });
}

export function formatPokemonListData(list) {
  const names = list.results.map((item) => item.name);
  const ids = list.results
    .map((item) =>
      item.url.replace("https://pokeapi.co/api/v2/pokemon/", "").slice(0, -1)
    )
    .filter((id) => id.length <= 4); //we need only pokemons` ids. (pokemons have id with 1-4 digits, pokemons` forms have id with 5 digits)

  return { names, ids };
}

export function translateIdToText(value, object) {
  const validNumberInput =
    !isNaN(value) && value !== "" && value <= object.ids.length;

  if (validNumberInput) {
    const index = object.ids.indexOf(value);
    return object.names[index];
  } else {
    return value;
  }
}

export function findSimilarItems(value, object) {
  return object.names.filter((name) => name.includes(value.toLowerCase()));
}
