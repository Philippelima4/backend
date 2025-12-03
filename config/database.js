module.exports = ({ env }) => ({
  connection: {
    // Definimos o cliente como PostgreSQL
    client: 'postgres',
    
    connection: {
      // O Render irá injetar o URL de ligação à base de dados que criaste
      connectionString: env('DATABASE_URL'),
      
      // Estas configurações são necessárias para a ligação SSL no Render
      ssl: {
        rejectUnauthorized: env.bool('DB_SSL_NO_VERIFY', false),
      },
    },

    // Configuração de performance (padrão para o Render)
    pool: {
      min: 2,
      max: 10,
    },
    debug: false,
  },
});