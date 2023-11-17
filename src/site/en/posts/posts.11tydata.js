let data = {
  layout: "post",
  tags: ["post-en"],
  permalink: "en/posts/{{ title | slugify }}/index.html",
  css: ["prism-darcula.css"],
};

if (process.env.NODE_ENV === "production") {
  data.date = "git Last Modified";
}

module.exports = data;
