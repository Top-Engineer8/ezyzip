import { getAuth, signOut } from "firebase/auth";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Title } from "react-native-paper";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useAuthentication } from "../../hooks/useAuthentication";
import { RootTabScreenProps } from "../../types";

export default function DiscoverMeetingsScreen({
  navigation,
}: RootTabScreenProps<"DiscoverMeetings">) {
  const [meetings, setMeetings] = useState<any[]>([]);

  const db = getFirestore();
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "meetings"));
    const meetings = querySnapshot.docs.map((doc) => doc.data());
    setMeetings(meetings);
  };
  if (!meetings.length) {
    getData();
  }

  const meetingElements = meetings.map((meeting, i) => (
    <Text key={i}>{JSON.stringify(meeting)}</Text>
  ));

  return (
    <View style={styles.container}>
      <Title>Discover Meetings</Title>
      <Text>Found {meetings.length} meetings</Text>
      {meetingElements}
      <Button onPress={getData}>Reload</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
