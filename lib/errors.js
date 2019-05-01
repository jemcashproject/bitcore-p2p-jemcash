'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bitcore-p2p-jemcash Module {0}'
};

module.exports = require('jcore-lib').errors.extend(spec);
