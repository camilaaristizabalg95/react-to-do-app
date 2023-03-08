const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@services': 'src/services',
    '@adapters': 'src/adapters',
    '@components': 'src/components',
    '@hooks': 'src/hooks',
    '@interceptors': 'src/interceptors',
    '@mocks': 'src/mocks',
    '@pages': 'src/pages',
    '@redux': 'src/redux',
    '@utils': 'src/utils',

  })(config);

  return config;
};