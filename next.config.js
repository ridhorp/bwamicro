const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withReactSvg = require('next-react-svg');
const withImage = require('next-images');

const path = require('path');

module.exports = withPlugins([
  withCss({}),
  withImage({}),
  withReactSvg({
    include: path.resolve(__dirname, "./public/images"),
    webpack(config, options) {
      return config;
    }
  })
]);
