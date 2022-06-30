'use strict'

const {execSync} = require('child_process')

function getCommitHash() {
  return execSync('git rev-parse --short HEAD').toString()
}

module.exports = {getCommitHash}
