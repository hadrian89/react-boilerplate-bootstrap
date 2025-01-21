module.exports = {
  moduleNameMapper: {
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom", // Ensure Jest resolves react-router-dom
    "^src/(.*)$": "<rootDir>/src/$1", // Alias example for "src/"
  },
};
