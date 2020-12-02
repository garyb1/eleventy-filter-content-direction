const directionFilter = require("./");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("direction", directionFilter);
};