import minifier from "html-minifier-terser";
import prettier from "prettier";
import path from "path";

const minify = (content, outputPath) => {
  if (outputPath && outputPath.endsWith(".html")) {
    let minified = minifier.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
    return minified;
  }

  return content;
};

const prettify = (content, outputPath) => {
  if (outputPath) {
    const extname = path.extname(outputPath);
    if (extname) {
      switch (extname) {
        case ".html":
        case ".json":
          // Strip leading period from extension and use as the Prettier parser.
          const parser = extname.replace(/^./, "");
          return prettier.format(content, {
            parser,
            printWidth: 160,
            singleAttributePerLine: false,
            bracketSameLine: true,
          });

        default:
          return content;
      }
    }
  }
  return content;
};

export default {
  minify,
  prettify,
};
