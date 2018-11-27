const ghpages = require('gh-pages')

const BRANCH = process.env.CIRCLE_BRANCH
console.info(`Deploying to https://phts.github.io/tsarik.me/${BRANCH}/`)

ghpages.publish('dist', {
  dest: BRANCH,
  message: `Publish branch "${BRANCH}"`,
  user: {
    name: 'CircleCI',
    email: 'phil@tsaryk.com',
  },
}, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
