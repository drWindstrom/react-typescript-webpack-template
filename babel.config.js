module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = [ 
    '@babel/preset-env', 
    '@babel/preset-typescript',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }],
  ];
  
  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'babel-plugin-styled-components',
  ];
  
  // Add plugin for react-refresh in development environment
  if (!api.env('production')) {
    plugins.push('react-refresh/babel');
  }
  console.log('Hello from Babel config!');
  return {
    presets,
    plugins
  };
}