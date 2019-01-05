const K8sClient = require('@npm-wharf/auto-kubernetes-client')
const log = require('bole')('connection')

async function getClient (config) {
  validate(config)
  const connection = {
    url: config.url
  }
  let creds = ''

  if (config.username && config.password) {
    connection.auth = {
      user: config.username,
      password: config.password
    }
    if (config.ca) {
      log.debug(`authenticating with username '${config.username}' and password using included CA`)
      Object.assign(connection, {

      })
    } else {
      log.debug(`authenticating with username '${config.username}' and password without TLS verification`)
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
      connection.insecureSkipTlsVerify = true
    }
    creds = 'username and password'
  } else if (config.token) {
    connection.auth = {
      bearer: config.token
    }
    if (config.ca) {
      log.debug(`authenticating with token '${config.token}' and included CA`)
      Object.assign(connection, {
        agentOptions: {
          ca: config.ca
        }
      })
    } else {
      log.debug(`authenticating with token '${config.token}' without TLS verification`)
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
      connection.insecureSkipTlsVerify = true
    }
    creds = 'bearer token'
  } else {
    if (config.ca) {
      log.debug(`authenticating with asymmetric key exchange and included CA`)
      connection.ca = config.ca
    } else {
      log.debug(`authenticating with asymmetric key exchange without TLS verification`)
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
      connection.insecureSkipTlsVerify = true
    }
    connection.cert = config.cert
    connection.key = config.key
    creds = 'cluster certificates'
  }

  log.debug(`connecting to '${connection.url}' ...`)
  try {
    var client = await K8sClient(connection)
  } catch (err) {
    log.error(`could not connect to '${connection.url}':\n\t${err.message}`)
    throw new Error(`failed to connect to Kubernetes cluster '${config.url}' with ${creds}:\n\t'${err.message}'`)
  }
  client.version = config.version
  client.saveDiffs = config.saveDiffs
  return client
}

function validate (config) {
  if (config.username || config.password) {
    if (!config.username) {
      throw new Error('Cannot authenticate to Kubernetes cluster via basic auth without a valid username')
    }
    if (!config.password) {
      throw new Error('Cannot authenticate to Kubernetes cluster via basic auth without a valid password')
    }
  } else if (!config.token) {
    if (!config.cert) {
      throw new Error('Cannot authenticate to Kubernetes cluster via certificates without a valid client cert')
    }
    if (!config.key) {
      throw new Error('Cannot authenticate to Kubernetes cluster via certificates without a valid client key')
    }
  }
}

module.exports = {
  getClient: getClient
}
