const StyleDictionary = require('style-dictionary').extend({
  source: ['src/tokens/**/*.json', 'src/tokens/*.json'],
  platforms: {
    scss: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    // ...
  },
});

StyleDictionary.buildAllPlatforms();
