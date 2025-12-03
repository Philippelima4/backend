// Localização: config/admin.ts (Versão final e única)
export default ({ env }) => ({
  auth: {
    // Lê a variável ADMIN_JWT_SECRET do Render.
    // O fallback é necessário para evitar o crash se o Render não a injetar
    secret: env('ADMIN_JWT_SECRET', 'adminSecretFallbackAqui'), 
  },
  apiToken: {
    // Lê a variável API_TOKEN_SALT do Render.
    salt: env('API_TOKEN_SALT', 'apiTokenSaltFallbackAqui'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'transferSaltFallbackAqui'),
    },
  },
  // Não incluímos aqui o 'secrets' ou 'flags' a não ser que tenhas essas pastas configuradas.
});