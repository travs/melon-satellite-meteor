// configure our web3 object, and get contract instances
const web3 = require('web3');
const satellite_artifacts = require('../../../node_modules/satellite/build/contracts/Satellite.json');
const email_artifacts = require('../../../node_modules/satellite/build/contracts/ProofOfEmail.json');

function configure () {
  let provider = new Web3.providers.HttpProvider('http://localhost:8545');
  let web3 = new Web3(provider);
  let Satellite = contract(satellite_artifacts);
  let ProofOfEmail = contract(email_artifacts);
  Satellite.setProvider(provider);
  ProofOfEmail.setProvider(provider);
  let satellitePromise = Satellite.deployed()
    .then(instance => this.satellite = instance)
  let poePromise = ProofOfEmail.deployed()
    .then(instance => this.proofOfEmail = instance)
  return Promise.all([satellitePromise, poePromise]);
}

module.exports = configure
