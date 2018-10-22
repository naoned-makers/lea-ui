module.exports = (env, argv) =>
  require(`./config/webpack/config.${argv.mode}.js`)(env);
