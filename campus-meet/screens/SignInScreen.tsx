import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  StyleSheet,
  View,
} from "react-native";
import {
  Button,
  Divider,
  TextInput,
  Subheading,
  Text,
  Title,
  HelperText,
  ActivityIndicator,
  useTheme,
} from "react-native-paper";

import { NetworkRequestFailedException } from "../exceptions/exceptions";
import { RootStackScreenProps } from "../types";
import { sendSignInEmail } from "../utils/auth/signIn";
import { validateEmail } from "../utils/validator/email";

function Feature({ text, img }: { text: string; img: ImageSourcePropType }) {
  return (
    <View style={styles.feature}>
      <Subheading>{text}</Subheading>
      <Image source={img} style={styles.featureImage} />
    </View>
  );
}

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<"SignIn">) {
  const [email, setEmail] = useState({ value: "", error: false });
  const [errorMessage, setErrorMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const theme = useTheme();

  const signIn = async () => {
    Keyboard.dismiss();
    setErrorMessage("");
    setEmailSent(false);
    if (!validateEmail(email.value)) {
      return setEmail({ value: email.value, error: true });
    }
    try {
      setLoading(true);
      await sendSignInEmail(email.value);
      setEmailSent(true);
    } catch (err) {
      console.error(err);
      if (err instanceof NetworkRequestFailedException) {
        setErrorMessage(
          "Could not connect to the server. Please check your network connection."
        );
      } else setErrorMessage((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Title>Campus Meet</Title>
        <Subheading>Meet new students at your campus!</Subheading>
      </View>
      <Divider style={styles.separator} />
      <View style={styles.contents}>
        <View style={{ flex: 1 }}>
          <Subheading style={{ textAlign: "center" }}>
            Find students to...
          </Subheading>
          <View style={styles.featureContainer}>
            {/* TODO: credit <a href="https://www.freepik.com/free-vector/plate-cuttlery-graphic-illustration_2685788.htm#query=lunch&position=0&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik */}
            <Feature
              text="Enjoy lunch"
              img={require("../assets/images/plate-cuttlery.png")}
            />
            {/* <a href="https://www.freepik.com/free-vector/focused-people-studying-online-school_8609144.htm#page=2&query=book%20study&position=43&from_view=search&track=sph">Image by pch.vector</a> on Freepik */}
            <Feature
              text="Study together"
              img={require("../assets/images/study-group.png")}
            />
            {/* Image by <a href="https://www.freepik.com/free-vector/people-playing-table-tennis-hand-drawn-style_10068473.htm#page=2&query=ping%20pong%20table&position=17&from_view=search&track=sph">Freepik</a> */}
            <Feature
              text="And more!"
              img={require("../assets/images/table-tennis.png")}
            />
          </View>
        </View>
        <View style={styles.signIn}>
          <Subheading style={{ textAlign: "center", marginBottom: 10 }}>
            Get started now!
          </Subheading>
          <Text>Sign in with your email address</Text>
          {emailSent && (
            <View>
              <Text>
                Please check your emails to finish the sign in process.
              </Text>
            </View>
          )}

          <TextInput
            label="Email"
            keyboardType="email-address"
            value={email.value}
            error={email.error}
            onChangeText={(text) => setEmail({ value: text, error: false })}
          />
          <HelperText type="error" visible={email.error}>
            Please enter a valid email address
          </HelperText>
          {!!errorMessage && (
            <Text style={{ color: theme.colors.error }}>
              Error: {errorMessage}
            </Text>
          )}
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Button onPress={signIn}>Sign In</Button>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  contents: {
    flex: 1,
    justifyContent: "flex-end",
  },
  featureContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  feature: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column-reverse",
  },
  featureImage: {
    height: 90,
    width: 90,
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  signIn: {
    flex: 1.5,
  },
});
