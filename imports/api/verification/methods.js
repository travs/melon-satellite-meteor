const Sentencer = require('sentencer');

Meteor.methods({
  'verification.request'({ email, ethAddress }) {
    // hit the contract to make a puzzle, and send the code to email
    var code = Sentencer.make('{{ adjective }} {{ adjective }} {{ nouns }}');
    var token = web3.sha3(code);
    emailVerifyInstance.puzzle(
      req.params.address, web3.sha3(token, {encoding: 'hex'}), web3.sha3(req.params.email),
      {from: web3.eth.accounts[0]}
    )
    .then(() => {
      sendCodeEmail(req.params.email, code);
      res.send(`Verification email sent to ${req.params.email}`);
    })
  }
});
