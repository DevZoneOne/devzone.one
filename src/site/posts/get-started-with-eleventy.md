---
title: Get started with Eleventy
author: DevZone
tags: ["eleventy", "starter", "sass", "postcss", "liquid"]
links:
  11ty: https://www.11ty.dev/
  GitHub: https://github.com/DevZoneOne/starter.eleventy
packages:
  - eleventy:2.0.x
---

Eleventy is very popular for dynamically creating static websites. But for bigger websites, the default project structure is a bit messy. Creating an easy maintainable project starts
with directly setting up a good project structure.

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

### GitHub Pages

... todo ...

### Firebase

... todo ...
