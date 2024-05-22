const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ramazan-imashov-auth.pp.ua',
      changeOrigin: true,
      secure: false,
    })
  );
};
