/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.disegno-artlab.gr',
  generateRobotsTxt: false, // robots.txt is managed manually
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
}
