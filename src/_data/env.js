const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://janky.life';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
  assets: 'static',
};

const dir = {
  img: `/${folder.assets}/images/`,
}

module.exports = {
  siteName: 'Janky',
  author: 'Jason Cross',
  environment,
  isProd,
  folder,
  base: {
    site: baseUrl,
    img: `${baseUrl}${dir.img}`,
  },
};
