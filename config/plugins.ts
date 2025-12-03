export default () => ({});
// Localização: config/plugins.js
module.exports = ({ env }) => ({
  // === ESTE É O NOVO CÓDIGO ===
  'users-permissions': {
    config: {
      // Lê a variável de ambiente 'JWT_SECRET' para o login/registo
      jwtSecret: env('JWT_SECRET'), 
    },
  },
  // Se tiveres outros plugins configurados, adiciona-os aqui
});