// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
// import { connectAuthEmulator } from "firebase/auth";
import {
  connectAuthEmulator,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseEnvConfig = Constants.manifest?.extra?.firebase;

const firebaseConfig = {
  apiKey: firebaseEnvConfig.apiKey,
  authDomain: firebaseEnvConfig.authDomain,
  projectId: firebaseEnvConfig.projectId,
  storageBucket: firebaseEnvConfig.storageBucket,
  messagingSenderId: firebaseEnvConfig.messagingSenderId,
  appId: firebaseEnvConfig.appId,
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

if (firebaseEnvConfig.useEmulator) {
  connectAuthEmulator(auth, firebaseEnvConfig.emulatorAuthUrl);
  connectFirestoreEmulator(
    db,
    firebaseEnvConfig.emulatorDbDomain,
    firebaseEnvConfig.emulatorDbPort
  );
}
