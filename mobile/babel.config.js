// Set EXPO_ROUTER_APP_ROOT before babel processes files
// Must be a relative path string for require.context
if (typeof process.env.EXPO_ROUTER_APP_ROOT === 'undefined') {
  process.env.EXPO_ROUTER_APP_ROOT = './app';
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Note: expo-router/babel is included in babel-preset-expo for SDK 50+
    // No need to add it separately
  };
};

