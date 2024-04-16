---
title: Get started with Eleventy
tags: ["eleventy", "starter", "sass", "postcss", "liquid"]
links:
  GitHub: https://github.com/DevZoneOne/starter.eleventy
---

Eleventy is very popular for dynamically creating static websites. But for bigger websites
the default project structure is a bit messy. Creating a easy maintainable project starts
with directly setting up an good project structure.

---

## Introduction

... todo ...

## Static Site Generation

... todo ...

## Eleventy

... todo ...

## Setup New Project

... todo ...

### Empty project

... todo ...

### Reorganize the folder structure

... todo ...

### Liquid instead of Nunjucks

... todo ...

### Adding plugins

... todo ...

```js
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    ...
    // plugins
    eleventyConfig.addPlugin(eleventyRssPlugin);
    ...
}
```

### Configure filters

... todo ...

## Create content

... todo ...

### Pages

... todo ...

### blog posts

... todo ...

## Deploy on Commit

... todo ...

### Netlify

... todo ...

### Github Pages

... todo ...

### Firebase

... todo ...
