module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/images/");

  eleventyConfig.addCollection('postsByTitle', collection => {
    let postsByTitle = collection.getFilteredByTag('posts');
    postsByTitle.sort((a, b) => {
      let c = a.data.title,
        d = b.data.title;
      if (c.startsWith("The ")) {
        c = c.split("The ").pop()
      } else if (c.startsWith("A ")) {
        c = c.split("A ").pop()
      }
      if (d.startsWith("The ")) {
        d = d.split("The ").pop()
      } else if (d.startsWith("A ")) {
        d = d.split("A ").pop()
      }
      return c.localeCompare(d);
    });
    return postsByTitle;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};