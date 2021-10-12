/**
 * @type {import('next').NextConfig}
 */

const withAntdLess = require('next-plugin-antd-less')
const nextTranslate = require('next-translate')

module.exports = nextTranslate(
  withAntdLess({
    // optional
    modifyVars: { '@primary-color': '#23b5b5' },

    images: {
      domains: ['fakestoreapi.com'],
    },

    // Other Config Here...

    webpack(config) {
      return config
    },
  })
)
