module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/scripts/setup-tests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
};
