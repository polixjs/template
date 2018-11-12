'use strict';

const typeorm = require('typeorm');

(async () => {
  console.log('create connection');
  await typeorm.createConnection();
})();