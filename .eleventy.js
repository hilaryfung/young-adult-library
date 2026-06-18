module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/images/");

  eleventyConfig.addCollection('postsByTitle', collection => {
    const postsByTitle = collection.getFilteredByTag('posts');
    postsByTitle.sort((a, b) => a.data.title.localeCompare(b.data.title));
    return postsByTitle;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};