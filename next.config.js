/**
 * @type {import('next').NextConfig}
 */

const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  // optional
  modifyVars: { '@primary-color': '#23b5b5' },
  // optional
  lessVarsFilePath: 'styles/theme.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  images: {
    domains: ['fakestoreapi.com'],
  },

  // Other Config Here...

  webpack(config) {
    return config
  },
})
