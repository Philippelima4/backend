export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // === Configuração da Chave de Sessão (APP_KEYS) ===
  app: {
    // Lê a variável de ambiente APP_KEYS. Se não existir no Render, usa as chaves de fallback.
    keys: env.array('APP_KEYS', ['fallbackKey-01-para-dev', 'fallbackKey-02-para-dev']),
  },
  // ==================================================
});