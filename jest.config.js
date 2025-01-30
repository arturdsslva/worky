export const roots = ['<rootDir>/src'];
export const collectCoverageFrom = ['<rootDir>/src/**/*.ts'];
export const testEnvironment = 'node';
export const transform = {
    '.+\\.ts$': 'ts-jest'
};
export const moduleNameMapper = {
    '@/(.*)': '<rootDir>/src/$1'
};
export const collectCpverage = true;