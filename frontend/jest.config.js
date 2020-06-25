module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['**/src/**/*.(js|ts|tsx)'],
  testMatch: ['**/__test__/*.(js|ts|tsx)'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
