// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Add proper asset handling
const { assetExts, sourceExts } = config.resolver;
config.resolver.assetExts = [...assetExts, 'png', 'jpg', 'jpeg', 'gif', 'webp'];
config.resolver.sourceExts = [...sourceExts, 'svg'];

module.exports = config;
