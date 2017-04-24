module.exports = neutrino => neutrino.config
  .when(process.env.NODE_ENV === 'production', config => config
    .plugin('copy')
    .tap(args => {
      args[1].ignore = ['*.css', '*.scss', '*.js', '*.ejs', '*.jsx'];
      return args;
    }));
