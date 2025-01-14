const withTM = require('./next-transpile-modules')(['shared', 'shared-ts', 'shared-ui', 'lodash-es'], {
  resolveSymlinks: false,
  debug: true,
});

module.exports = withTM({
  eslint: {
    ignoreDuringBuilds: true,
  },
});
