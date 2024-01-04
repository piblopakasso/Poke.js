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
    return `#${id}`;
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
