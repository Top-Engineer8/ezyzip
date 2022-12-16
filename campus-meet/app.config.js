import "dotenv/config";

// use emulator per default if not explicitly defined
let useFirebaseEmulator = true;
if (process.env.FIREBASE_USE_EMULATOR !== undefined) {
  useFirebaseEmulator = process.env.FIREBASE_USE_EMULATOR === "TRUE";
}

const firebaseConfig = {
  useEmulator: useFirebaseEmulator,
  apiKey: useFirebaseEmulator ? "any" : process.env.FIREBASE_API_KEY,
  authDomain: useFirebaseEmulator ? "any" : process.env.FIREBASE_AUTH_DOMAIN,
  projectId: useFirebaseEmulator
    ? "demo-campus-meet"
    : process.env.FIREBASE_PROJECT_ID,
  storageBucket: useFirebaseEmulator
    ? "any"
    : process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  emulatorAuthUrl: useFirebaseEmulator ? "http://10.0.2.2:9099" : undefined,
  emulatorDbDomain: useFirebaseEmulator ? "10.0.2.2" : undefined,
  emulatorDbPort: useFirebaseEmulator ? "8080" : undefined,
};

export default {
  expo: {
    name: "campus-meet",
    slug: "campus-meet",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "campus-meet",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.campusmeet",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.campusmeet",
    },
    web: {
      favicon: "./assets/images/favicon.png",
    },
    extra: {
      eas: {
        projectId: "cd83ea1a-8e7e-4eb5-844f-e392253ce42a",
      },
      firebase: firebaseConfig,
    },
  },
};
