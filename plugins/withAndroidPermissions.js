const { withAndroidManifest } = require('@expo/config-plugins');

const withAndroidPermissions = (config) => {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;
    const mainApplication = androidManifest.manifest.application[0];

    // Add the permission
    if (!androidManifest.manifest['uses-permission']) {
      androidManifest.manifest['uses-permission'] = [];
    }
    androidManifest.manifest['uses-permission'].push({
      $: {
        'android:name': 'android.permission.DETECT_SCREEN_CAPTURE',
      },
    });

    return config;
  });
};

module.exports = withAndroidPermissions;
