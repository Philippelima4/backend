const path = require('path');
// Importamos a biblioteca para ler a URL do Render
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  // Verificamos se existe uma variável DATABASE_URL (típico do Render)
  const databaseUrl = env('DATABASE_URL');

  // --- CONFIGURAÇÃO PARA O RENDER (PRODUÇÃO) ---
  if (databaseUrl) {
    const config = parse(databaseUrl);
    
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            // Importante: Aceita certificados auto-assinados do Render
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), 
          },
        },
        debug: false,
      },
    };
  }

  // --- CONFIGURAÇÃO LOCAL (NO TEU COMPUTADOR) ---
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  };
};