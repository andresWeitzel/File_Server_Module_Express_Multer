//For using environment variables with .envs
/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['./src/tests/mock/setEnvVars.ts'],
  };
  
  module.exports = config;