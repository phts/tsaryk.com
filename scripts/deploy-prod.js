#!/usr/bin/env node

const util = require('util')
const exec = util.promisify(require('child_process').exec)
const shellescape = require('shell-escape')

const DIST_FILES = 'dist/.'
const SSH_HOST = process.env.SSH_HOST
const SSH_PATH = process.env.SSH_PATH
const SSH_SCRIPT = process.env.SSH_SCRIPT
const SSH_USER = process.env.SSH_USER

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
    const commands = [
      [
        'scp', '-r',
        '-o', 'StrictHostKeyChecking=no',
        DIST_FILES,
        `${SSH_USER}@${SSH_HOST}:${SSH_PATH}`,
      ],
      [
        'ssh',
        '-o', 'LogLevel=ERROR',
        `${SSH_USER}@${SSH_HOST}`,
        SSH_SCRIPT,
      ],
    ]
    for (const args of commands) {
      const command = shellescape(args)
      const result = await exec(command)
      printResult(result)
    }
  } catch (e) {
    printResult(e)
    process.exit(1)
  }
})()
