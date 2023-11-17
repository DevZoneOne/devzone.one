let data = {
  layout: "post",
  tags: ["post-en"],
  date: "git Last Modified",
  permalink: "en/posts/{{ title | slugify }}/index.html",
  css: ["prism-darcula.css"],
};

if (process.env.NODE_ENV === "production") {
  data.date = "git Last Modified";
}

module.exports = data;
