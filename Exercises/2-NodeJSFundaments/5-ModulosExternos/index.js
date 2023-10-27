const minimist = require('minimist');

const args = minimist(process.argv.slice(2))

console.log(args)

const name = args['name']

console.log(name)