module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },

  /**
   * An array of regexp pattern strings that are matched against all source file paths before transformation.
   * 변환전 모든 소스 파일에 매치되는 정규 표현식 배열입니다. 테스트 경로가 이 배열의 패턴과 일치한다면 해당 테스트는 변환되지 않는다.
   */
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)'],
};