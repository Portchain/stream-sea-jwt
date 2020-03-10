const yargs = require('yargs')
const jwt = require('jsonwebtoken')

const defaultPayload = {
  "exp": 1893456000, // Expires 2030-01-01
  "mustFanout": true,
}

yargs.command('$0', 'Sign a JWT', args => {
  args.option('jwtSecret', {
    alias: 's',
    type: 'string',
    describe: 'JWT secret'
  })
  .option('payload', {
    alias: 'p',
    type: 'string',
    describe: 'payload'
  })
  .demandOption('jwtSecret')
}, (argv) => {
  const payload = argv.payload || defaultPayload
  const jwtSerialized = jwt.sign(payload, argv.jwtSecret)
  console.log(jwtSerialized)
})
.argv