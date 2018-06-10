#!/usr/bin/env node

const util = require('util')
const exec = util.promisify(require('child_process').exec)

const FTP_URL = process.env.FTP_URL
const FTP_USER = process.env.FTP_USER
const FTP_PASSWORD = process.env.FTP_PASSWORD

;(async function () {
  const {stdout, stderr} = await exec(
    `lftp -u ${FTP_USER},${FTP_PASSWORD} ${FTP_URL} <<END_SCRIPT
    mirror -R --delete --delete-first dist/ .
    quit
    END_SCRIPT`
  )
  if (stdout) {
    console.info(stdout)
  }
  if (stderr) {
    console.error(stderr)
  }
})()
