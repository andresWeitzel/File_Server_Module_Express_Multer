//For using environment variables with .envs
/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['./src/test/mock/setEnvVars.ts'],
  };
  
  module.exports = config;