import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import type { Node } from "react";
import AddButton from "campus-meetcomponentsedit_button.ts";

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Button
        icon="account-edit"
        style={styles.edit_buttom}
        mode="elevated"
        onPress={() => {
          props.navigation.navigate("Create", {
            _id,
            name,
            picture,
            phone,
            salary,
            email,
            position,
          });
        }}
      >
        Edit
      </Button>

      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.paragraph}>Reynel Villabona</Text>
      <Image
        style={styles.logo}
        source={require("../assets/images/reynel.jpg")}
      />
      <Text style={styles.paragraph2}>Age:</Text>
      <Text style={styles.paragraph3}>28</Text>
      <Text style={styles.paragraph4}>Hobbies:</Text>
      <Text style={styles.paragraph5}>read and sing</Text>
      <Text style={styles.paragraph6}>University:</Text>
      <Text style={styles.paragraph7}>Politecnico di Milano</Text>
    </View>
  );
}

const Profile = (props) => {
  const { _id, name, picture, phone, salary, email, position } =
    props.route.params.item;
};

const styles = StyleSheet.create({
  edit_buttom: {
    fontSize: 20,
    padding: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#386ca0",
  },
  title: {
    margin: 16,
    paddingVertical: 0,

    backgroundColor: "#a0c8f0",
    color: "#20232a",
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    width: 1000,
    height: 30,
  },

  paragraph7: {
    margin: 16,
    paddingVertical: 8,
    borderRadius: 10,
    color: "#20232a",
    marginTop: 24,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
    top: 460,
    left: 130,
    width: 150,
    height: 35,
  },
  paragraph6: {
    margin: 16,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "#eee",
    backgroundColor: "#eee",
    borderRadius: 10,
    color: "#20232a",
    marginTop: 24,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
    top: 460,
    left: 50,
    width: 70,
    height: 35,
  },
  paragraph5: {
    margin: 16,
    paddingVertical: 8,
    borderRadius: 10,
    color: "#20232a",
    marginTop: 24,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
    top: 420,
    left: 130,
    width: 100,
    height: 35,
  },
  paragraph4: {
    margin: 16,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "#eee",
    backgroundColor: "#eee",
    borderRadius: 10,
    color: "#20232a",
    marginTop: 24,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
    top: 420,
    left: 50,
    width: 60,
    height: 35,
  },
  paragraph3: {
    margin: 16,
    paddingVertical: 8,
    borderRadius: 10,
    color: "#20232a",
    marginTop: 24,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
    top: 385,
    left: 130,
    width: 40,
    height: 35,
  },
  paragraph2: {
    margin: 16,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "#eee",
    borderRadius: 10,
    backgroundColor: "#eee",
    color: "#20232a",
    marginTop: 24,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
    top: 385,
    left: 50,
    width: 35,
    height: 35,
  },
  paragraph: {
    margin: 16,
    paddingVertical: 10,

    backgroundColor: "#a0c8f0",
    color: "#20232a",
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    width: 1000,
    top: -10,
    height: 45,
  },
  logo: {
    height: 150,
    width: 140,
  },
});
