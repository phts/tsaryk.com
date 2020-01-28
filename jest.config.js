'use strict'

module.exports = {
  transform: {
    '^.+rambdax.cjs.js': '<rootDir>/config/jest-empty-preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: ['app', 'node_modules'],
  transformIgnorePatterns: ['node_modules/(?!(rambdax)/)'],
}
