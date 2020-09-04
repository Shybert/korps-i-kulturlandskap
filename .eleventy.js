const MarkdownIt = require("markdown-it");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  const md = new MarkdownIt();
  eleventyConfig.addPairedShortcode("markdown", (content) =>
    md.render(content.trimLeft())
  );

  eleventyConfig.addFilter("humanReadableDate", (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(["nb-NO", "en-GB"], options);
  });

  eleventyConfig.addFilter("limitTo", (array, maxLength) =>
    array.slice(0, maxLength)
  );

  eleventyConfig.addDataExtension("yaml", (content) => yaml.safeLoad(content));

  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/main.css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.setTemplateFormats(["njk", "md", "11ty.js"]);

  return {
    dir: { input: "src" },
  };
};
