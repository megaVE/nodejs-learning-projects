const minimist = require('minimist');
const suma = require('./suma').suma;

const args = minimist(process.argv.slice(2))
console.log(args)

const a = parseInt(args["a"])
const b = parseInt(args["b"])

console.log(`Suma liczb "a" (${a}) i "b" (${b}) to`)
suma(a,b)