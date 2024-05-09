import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Make sure to install expo icons or any other icon library

const Login = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../images/bg_image_app.png")}
      style={[styles.background, { backgroundColor: "rgba(115,123,236,0.6)" }]}
    >
      <View style={styles.header}>
        <AntDesign name="questioncircleo" size={24} color="white" />
      </View>

      <View style={[styles.content, { paddingTop: 230 }]}>
        <Text style={styles.title}>😊 Let's get Started</Text>
        <Text style={styles.subtitle}>
          Sign up to the family and get started immediately
        </Text>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: "#4285F4",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  googleButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Login;
