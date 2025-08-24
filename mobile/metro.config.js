const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);
// Ensure Metro treats mobile/ as the project root
config.projectRoot = __dirname;
// Don’t watch parent folders to avoid hoisted deps confusion
config.watchFolders = [__dirname];

module.exports = config;
