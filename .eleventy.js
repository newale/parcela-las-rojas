module.exports = function(eleventyConfig) {
  // Copy assets to the output directory
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Return configuration object
  return {
    dir: {
      input: ".", // Current directory as input
      output: "_site" // Output to _site folder
    }
  };
};