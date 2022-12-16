import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Linking from "expo-linking";
import { FirebaseError } from "firebase/app";
import {
  ActionCodeSettings,
  getAuth,
  sendSignInLinkToEmail,
} from "firebase/auth";

import { NetworkRequestFailedException } from "../../exceptions/exceptions";

const getActionCodeSettings = (): ActionCodeSettings => {
  return {
    url:
      "https://campus-meet-cc6a6.web.app/?" +
      new URLSearchParams({
        appUrl: Linking.createURL("/sign-in/"),
      }),
    handleCodeInApp: true,
  };
};

export const sendSignInEmail = async (email: string) => {
  const auth = getAuth();
  try {
    await sendSignInLinkToEmail(auth, email, getActionCodeSettings());
  } catch (e) {
    if (e instanceof FirebaseError) {
      if (e.code === "auth/network-request-failed") {
        throw new NetworkRequestFailedException();
      }
    }
    throw e;
  }
  await AsyncStorage.setItem("email", email);
};
