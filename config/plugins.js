module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      // Lê a variável de ambiente JWT_SECRET
      jwtSecret: env('JWT_SECRET'),
    },
  },
});

// Localização: config/plugins.js (TENHO DE USAR module.exports AQUI)
module.exports = ({ env }) => ({
  // === CORREÇÃO: Chave de Login/Registo ===
  'users-permissions': {
    config: {
      // Lê a variável JWT_SECRET do Render para autenticação da API.
      jwtSecret: env('JWT_SECRET', 'jwtSecretFallback'),
    },
  },
  // Se tiveres o plugin 'upload' (para ficheiros), podes adicioná-lo aqui:
  // upload: {
  //   config: {
  //     provider: 'aws-s3', // Exemplo
  //     // ...
  //   },
  // },
});