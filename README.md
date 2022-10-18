# Hello Jason Portfolio

[Eleventy](https://11ty.dev) + [TailwindCSS](https://tailwindcss.com/) and based on the [Eleventy Web Starter](https://github.com/chrissy-dev/eleventy-web-starter)

## Getting Started

### Install dependencies

```
npm install
```

### Working locally
Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build
Minify HTML, minify JS, inline and minify CSS.

``` 
npm run build
```

---

## Deployment

Automated deploys when merging into master branch via GitHub Actions. This site is being hosted on GitHub Pages by exposing the gh-pages branch to a custom domain.

---

#### Credits

- The project uses [Eleventy](https://11ty.dev) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/) (can be changed)
- [PostCSS](https://github.com/postcss) set up to handle:
	- [TailwindCSS](https://tailwindcss.com/)
	- CSS Imports
	- Autoprefixer 
- PurgeCSS to remove unused CSS (set up for TailwindCSS by default) in production
- [HTML Minifier](https://www.npmjs.com/package/html-minifier) to minify HTML in production
- CSS inlined and minified in production
- [esbuild](https://esbuild.github.io/) used to bundle and minify scripts
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)
- [Luxon](https://moment.github.io/luxon/) for formatting dates and times
- [NPM Run All](https://www.npmjs.com/package/npm-run-all) to run multiple scripts
