const path = require('path');
module.exports = {
  "stories": ["../src/stories/**/Introduction.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
    return config;
  },
  docs: {
    autodocs: true
  }
};