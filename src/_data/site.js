module.exports = {
	"title": "Hello Jason",
	"description": "Portfolio of Jason Cross",
	"url": "https://hellojason.net/",
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
