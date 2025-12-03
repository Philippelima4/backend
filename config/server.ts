export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  app: {
    keys: env.array('APP_KEYS'),
  },
});

// Altera este ficheiro no teu Backend (Strapi)
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  
  // === ESTE É O NOVO CÓDIGO ===
  app: {
    // Isto diz ao Strapi para usar a variável APP_KEYS que definiste no Render
    keys: env.array('APP_KEYS', ['keyAsupersegura,keyBsupersegura']),
  },
  // ============================
  app: {
    // Isto diz ao Strapi para usar a variável APP_KEYS que definiste no Render
    keys: env.array('JWT_SECRET', ['keyAsupersegura,minha_admin_secret23423342']),
  },
});
