module.exports = {
	"title": "Janky",
	"description": "Janky",
	"url": "https://janky.life/",
	"author": "Jason Cross",
	"meta_data": {
		// "twitter": "@chrissy_dev",
		"opengraph_default": "/static/opengraph-default.jpg"
	},
	"nav": {
		"home": "/",
		"blog": "/",
		"projects": "/projects/",
		"about": "/about/"
	},
	"env": process.env.ELEVENTY_ENV === 'production'
}
