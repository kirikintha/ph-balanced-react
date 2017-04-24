// If using as a preset from the CLI or configured in package.json,
// override its configuration directly:
const merge = require('deepmerge');

module.exports = (neutrino) => {
  neutrino.config.module
    .rule('lint')
      .use('eslint')
        .tap(options => merge(options, {
          rules: {
            'max-len': ['error', 120, 2, {
              ignoreUrls: true,
              ignoreComments: false,
              ignoreStrings: true,
              ignoreTemplateLiterals: true,
            }],
          },
        }));
};
