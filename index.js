const yargs = require('yargs')
const jwt = require('jsonwebtoken')
const keypair = require('keypair')
const fs = require('fs')

const defaultPayload = {
  "exp": 1893456000, // Expires 2030-01-01
  "mustFanout": true,
}

yargs.scriptName("stream-sea-jwt")
  .command('sign', 'Sign a JWT', args => {
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
    const payload = argv.payload ? JSON.parse(argv.payload) : defaultPayload
    const jwtSerialized = jwt.sign(payload, argv.jwtSecret)
    console.log(jwtSerialized)
  })
  .command('generate', 'Generate a keypair', args => {
    args.option('filePrefix', {
      alias: 'o',
      type: 'string',
      describe: 'Prefix for output file names'
    })
  }, argv => {
    console.log('generating...')
    const {private, public} = keypair()
    fs.writeSync(fs.openSync(`${argv.filePrefix || ''}private.pem`, 'w'), private)
    fs.writeSync(fs.openSync(`${argv.filePrefix || ''}public.pem`, 'w'), public)
  })
  .strict()
  .argv