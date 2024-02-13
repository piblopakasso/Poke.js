export function findObjectValue(object, key, value) {
  let arr = [];

  for (const item of Object.values(object)) {
    if (value === undefined) {
      arr.push(item[key]);
    } else {
      arr.push(item[key][value]);
    }
  }

  return arr;
}

export function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatId(id) {
  if (id.length > 4) {
    return `${id}`;
  } else {
    const str = `000${id}`;
    return str.slice(-4);
  }
}

export function formatName(name) {
  return name.toUpperCase();
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
