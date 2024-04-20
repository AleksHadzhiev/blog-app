const path = require('path')

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },
  localePath: path.resolve('./public/locales'),

  // Dev Config
  // debug: process.env.NODE_ENV === 'development',
  // reloadOnPrerender: process.env.NODE_ENV === 'development',
}

