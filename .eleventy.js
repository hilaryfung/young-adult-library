module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/images/");
  eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addFilter("lowercase", function(string) {
    return string.toLowerCase();
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};