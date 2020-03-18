const bcryptjs = require('bcryptjs');


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [{
      nome: 'Felipe',
      email: 'felipe@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Luana',
      email: 'luana@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Maria',
      email: 'maria@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },

    ], {},
  ),

  down: () => { },
};
