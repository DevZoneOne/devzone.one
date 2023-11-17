let data = {
  layout: "post",
  tags: ["post-nl"],
  permalink: "nl/posts/{{ page.fileSlug | slugify }}/index.html",
  css: ["prism-darcula.css"],
};

if (process.env.NODE_ENV === "production") {
  data.date = "git Last Modified";
}

module.exports = data;
