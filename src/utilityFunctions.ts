export function findValue(arr: string[], key1: string, key2: string) {
  return key2
    ? arr.map((item) => item[key1][key2])
    : arr.map((item) => item[key1]);
}

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatId(id: number) {
  const strId = id.toString();
  const str = `000${strId}`;
  return strId.length === 5 ? str.slice(-5) : str.slice(-4);
}

export function removeDuplicate(arr: string[]) {
  const set = new Set(arr);
  return Array.from(set);
}

export function sortItems(arr: string[]) {
  return arr.sort(function (a, b) {
    return a.length - b.length;
  });
}

type PokemonListDataArguments = {
  results: { name: string; url: string }[];
};

export function formatPokemonListData(list: PokemonListDataArguments) {
  const names = list.results.map((item) => item.name);
  const ids = list.results
    .map((item) =>
      item.url.replace("https://pokeapi.co/api/v2/pokemon/", "").slice(0, -1)
    )
    .filter((id) => id.length <= 4);

  return { names, ids };
}

type IdToTextArguments = { names: string[]; ids: string[] };

export function translateIdToText(value: string, object: IdToTextArguments) {
  const validNumberInput = parseInt(value) <= object.ids.length;

  if (validNumberInput) {
    const index = object.ids.indexOf(value);
    return object.names[index];
  } else {
    return value;
  }
}

export function findSimilarItems(value: string, arr: string[]) {
  return arr.filter((name) => name.includes(value.toLowerCase()));
}
