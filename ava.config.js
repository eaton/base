export default {
  files: ['test/**/*', '!test/**/fixtures/**/*', '!test/**/*.md'],
  typescript: {
    rewritePaths: {
      'src/': 'dist/',
    },
    compile: false,
  },
};
