#!/usr/bin/env node

const util = require('util')
const exec = util.promisify(require('child_process').exec)

const FTP_URL = process.env.FTP_URL
const FTP_USER = process.env.FTP_USER
const FTP_PASSWORD = process.env.FTP_PASSWORD

function printResult(result) {
  if (result.stdout) {
    console.info(result.stdout)
  }
  if (result.stderr) {
    console.error(result.stderr)
  }
}

(async function () {
  try {
    const result = await exec(
      `lftp -u ${FTP_USER},${FTP_PASSWORD} ${FTP_URL} <<END_SCRIPT
      mirror -R --delete --delete-first dist/ .
      quit
      END_SCRIPT`
    )
    printResult(result)
  } catch (e) {
    printResult(e)
    process.exit(1)
  }
})()
