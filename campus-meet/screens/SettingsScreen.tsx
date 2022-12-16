import { getAuth, signOut } from "firebase/auth";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
import { StyleSheet } from "react-native";
import { Button, Headline, Title } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useAuthentication } from "../hooks/useAuthentication";
import { RootTabScreenProps } from "../types";

export default function SettingsScreen({
  navigation,
}: RootTabScreenProps<"Settings">) {
  const { user } = useAuthentication();

  const logout = () => {
    signOut(getAuth());
  };

  const doTheThing = async () => {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "meetings"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
    try {
      const docRef = await addDoc(collection(db, "meetings"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log(`New document has id ${docRef.id}`);
    } catch (error) {
      console.error(`Error adding document: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <Title>Settings: To be done</Title>
      <Headline>Feel free to use as a playground</Headline>
      <Text>Logged in as {user?.email}</Text>
      <Button onPress={() => logout()}>Logout</Button>
      <Button onPress={() => doTheThing()}>Do the thing!</Button>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
