const ghpages = require('gh-pages')

const BRANCH = process.env.CIRCLE_BRANCH
console.info(`Deploying branch "${BRANCH}"`)

ghpages.publish('dist', {
  dest: BRANCH,
  message: `Publish branch "${BRANCH}"`,
  user: {
    name: 'CircleCI',
    email: 'phil.tsarik@gmail.com',
  },
}, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
