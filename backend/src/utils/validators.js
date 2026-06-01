function isValidTitle(title) {
  return typeof title === "string" && title.trim().length > 0;
}

function isValidCompleted(completed) {
  return typeof completed === "boolean";
}

module.exports = {
  isValidTitle,
  isValidCompleted
};