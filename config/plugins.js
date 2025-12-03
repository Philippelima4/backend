module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      // Lê a variável de ambiente JWT_SECRET
      jwtSecret: env('JWT_SECRET'),
    },
  },
});
