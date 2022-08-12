/* eslint-disable */
export default {
  displayName: 'backend',
  preset: '../../jest.preset.js',
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    }
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/backend'
};
