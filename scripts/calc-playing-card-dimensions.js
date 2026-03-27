'use strict'

const RATIO = 0.1387 * 2

const initialW = parseInt(process.argv.find((x) => x.startsWith('w=')).split('=')[1])
const initialH = parseInt(process.argv.find((x) => x.startsWith('h=')).split('=')[1])
const initialX = parseInt(process.argv.find((x) => x.startsWith('x=')).split('=')[1])
const initialY = parseInt(process.argv.find((x) => x.startsWith('y=')).split('=')[1])

const outW = Math.round(initialW / RATIO)
const outH = Math.round(initialH / RATIO)
const outX = Math.round(initialX / RATIO)
const outY = Math.round(initialY / RATIO)

console.info(`
x={${outX}}
y={${outY}}
width={${outW}}
height={${outH}}
`)
