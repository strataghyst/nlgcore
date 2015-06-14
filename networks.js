var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fcfef7e0'),
  addressVersion: 0x26,
  privKeyVersion: 0xA6,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('922f5851a2c6b8aa1a2de53c10c5deb87839e55b2eb62b74f6bfb561a4715d6c'),
    merkle_root: hex('f8dcd6e372bf9002b89d6da07b0e6fb65b623751458de65a4497603ecb0bed4b'),
    height: 0,
    nonce: 2200095,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1009843200,
    bits: 504365040,
  },
  dnsSeeds: [
    'seed-000.guldencoin.net',
    'seed-001.guldencoin.org',
    'seed-002-guldencoin.nl',
    'seed-003.guldencoin.net',
    'seed-004.guldencoin.org'
  ],
  defaultClientPort: 9231
};

exports.mainnet = exports.livenet;

exports.testnet = {  //not setup for guldencoin yet
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 265310,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1392281929,
    bits: 486604799,
  },
  dnsSeeds: [
    'xx',
    'xx'
  ],
  defaultClientPort: 19333
};
