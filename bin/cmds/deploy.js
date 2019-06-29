'use strict'

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const hikaru = require('../../lib')
const kubectl = require('../../lib/kubectl')

exports.command = 'deploy <spec>'
exports.description = 'deploy a spec to a cluster'
exports.builder = function (yargs) {
  return yargs
    .option('context', {
      alias: 'c',
      description: 'kubectl alias for cluster',
      demandOption: true
    })
    .option('scale', {
      alias: 's',
      description: 'scale factor to apply to the cluster'
    })
    .option('tokenFile', {
      alias: 'f',
      description: 'path to file containing tokens to be applied to the spec'
    })
}

exports.handler = async function (argv) {
  const options = {
    spec: argv.spec,
    context: argv.context
  }

  const version = kubectl.version(options.context)
  options.version = `${version.serverVersion.major}.${version.serverVersion.minor.replace(/[^0-9]/g, '')}`

  if (argv.tokenFile) {
    options.data = yaml.safeLoad(fs.readFileSync(path.resolve(argv.tokenFile), { encoding: 'utf8' }))
  }

  if (argv.scale) {
    options.scale = argv.scale
  }

  try {
    await hikaru.deploy(options)
  } catch (err) {
    console.error(err.message)
    process.exitCode = 1
  }
}