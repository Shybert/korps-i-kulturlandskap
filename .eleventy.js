const MarkdownIt = require("markdown-it");
const Terser = require("terser");

module.exports = function (eleventyConfig) {
  const md = new MarkdownIt();
  eleventyConfig.addPairedShortcode("markdown", (content) =>
    md.render(content.trimLeft())
  );

  eleventyConfig.addFilter("jsmin", (code) => {
    const minifiedCode = Terser.minify(code, { ecma: 5 });
    if (minifiedCode.error) {
      console.error("JS minification error: ", minifiedCode.error);
      return code;
    }
    return minifiedCode.code;
  });

  eleventyConfig.setTemplateFormats(["njk", "css", "svg"]);

  return {
    dir: { input: "src" },
  };
};
