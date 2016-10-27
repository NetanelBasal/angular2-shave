module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [{
      pattern: 'test/main.js',
      watched: false
    }],
    exclude: [],
    preprocessors: {
      'test/main.js': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.config')({
      env: 'test'
    }),
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}