function getDate() {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
}

function getDatesList(str) {
  const reg = /(\d{1,2}\/){2}\d{4}/g;
  return str.match(reg) || [];
}

module.exports = {
  getDate,
  getDatesList,
};
