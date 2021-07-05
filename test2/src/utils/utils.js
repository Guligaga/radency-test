export function upperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function presetCategoryName(cat) {
  if (typeof cat !== "string") {
    return null;
  }
  return cat === "thought" ? "Random Thought" : upperCaseFirst(cat);
}

export function presetDatesList(list) {
  return Array.isArray(list) ? list.join(", ") : list;
}

export function clearObject(obj) {
  Object.keys(obj).forEach((prop) => {
    delete obj[prop];
  });
}

export function getDate() {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
}

export function getDatesList(str) {
  const reg = /(\d{1,2}\/){2}\d{4}/g;
  return str.match(reg) || [];
}
