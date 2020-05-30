const MarkdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  const md = new MarkdownIt();
  eleventyConfig.addPairedShortcode("markdown", (content) =>
    md.render(content.trimStart())
  );

  eleventyConfig.setTemplateFormats(["njk", "css"]);

  return {
    dir: { input: "src" },
  };
};
