---
title: Get started with Eleventy 3
author: DevZone
tags: ["eleventy", "starter", "sass", "postcss", "liquid"]
draft: true
links:
  11ty: https://www.11ty.dev/
  GitHub: https://github.com/DevZoneOne/starter.eleventy
packages:
  - eleventy:3.0.x
---

Eleventy is very popular for dynamically creating static websites. But for bigger websites, the default project structure is a bit messy. Creating an easy maintainable project starts
with directly setting up a good project structure.

<!--more-->

## Introduction

... todo ...

## Static Site Generation (SSG)

There are multiple ways to maintain a website, the old fashion way of directly editing the html sources is 'okish' for a singe page website that hardly never
changes, but I think we can agree that this is not a preference.

Then we start looking at content mangement systems, for example WordPress. These content systems offer great functionalities for both content writers as web
masters (to bring up an old term). But they require a backend server that can run such an web application which comes with important maintenance requirements
to keep your website safe. Especially self-hosted wordpress instances get attacked all the time by hack attempts to get access to your CMS.

The third option is a Static Site Generation 'CMS'. The content is not edited directly on the website but locally like you would do when building an application
and then 'compiled' into static webpages which then are uploaded to a static web server like Apache, or a service like Netlify.

The upsides of SSG is the very simple, low budget and relatively easy to secure server requirements, while the website is still easy to update quickly when needed. The response will be quicker as nothing needs to be generated on requesting pages.

There are obviously also downsides, like with everything in life. Most important is the content is mostly maintained in MarkDown (md) files (there are other options) which require a small time to get used to for non-technical content writers. Also the make up of the texts is more limited compared to for example Wordpress. Also, the structure of the website is mostly managed by the directory structure of the content files. This as well requires some getting used to. Although there are options to split the content files completely from the layout, styling and other source files, in many cases this is mixed and that makes it harder to split responsibilities of the people maintaining the website.

## Eleventy

... todo ...

## Eleventy Starter Template

This page describes how to start from scratch, but we are providing this as a GitHub starter template to get you started much quicker!
Click in GitHub on {{< button >}}Use this template{{< /button >}} to use this template to create a new repo or open it in a codespace environment.

Here is the [starter template repo](https://github.com/DevZoneOne/starter.eleventy) or [create directly a new repo with it](https://github.com/new?template_name=starter.eleventy&template_owner=DevZoneOne). 

## Setup New Project

... todo ...
```bash
$ mkdir my-website
$ cd my-website
$ echo '# Heading' > index.md
$ npx @11ty/eleventy --serve
[11ty] Writing ./_site/index.html from ./index.md (liquid)
[11ty] Wrote 1 file in 0.06 seconds (v3.1.5)
[11ty] Watching…
[11ty] Server at http://localhost:8080/
```

### Empty project

... todo ...

### Organize the folder structure

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

### Blog posts

... todo ...

## Deploy on Commit

... todo ...

### Netlify

... todo ...

### GitHub Pages

... todo ...

### Firebase

... todo ...
