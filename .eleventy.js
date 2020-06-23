const MarkdownIt = require("markdown-it");
const Terser = require("terser");
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

  eleventyConfig.addFilter("jsmin", (code) => {
    const minifiedCode = Terser.minify(code, { ecma: 5 });
    if (minifiedCode.error) {
      console.error("JS minification error: ", minifiedCode.error);
      return code;
    }
    return minifiedCode.code;
  });

  eleventyConfig.addDataExtension("yaml", (content) => yaml.safeLoad(content));

  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/main.css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.setTemplateFormats(["njk", "md"]);

  return {
    dir: { input: "src" },
  };
};
