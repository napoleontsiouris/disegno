const path = require('path')

module.exports = {
  i18n: {

    locales: ['el'],
    defaultLocale: 'el',
    localeDetection: false,
    // domains: [
    //   {
    //     domain: "localhost",
    //     defaultLocale: "el",
    //     localeDetection: false
    //   },
    // ]
  },
  localePath: path.resolve('./public/static/locales'),
}