const withYaml = require('next-plugin-yaml');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withYaml(
  withMDX({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx']
  })
);
