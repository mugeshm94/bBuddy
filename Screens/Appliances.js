import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Make sure to install expo icons or any other icon library

const Room = ({ roomName, appliances, onAddMore }) => {
  return (
    <View style={styles.roomContainer}>
      <Text style={styles.roomTitle}>{roomName}</Text>
      {appliances.map((appliance, index) => (
        <Text key={index} style={styles.applianceName}>
          {appliance}
        </Text>
      ))}
      <TouchableOpacity onPress={onAddMore} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add more</Text>
      </TouchableOpacity>
    </View>
  );
};

const Appliances = () => {
  // Placeholder for actual add function
  const handleAddMore = () => {
    console.log("Add more appliances");
  };

  const handleAddRoom = () => {
    console.log("Add room");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Manage Your Appliances</Text>
        <AntDesign name="questioncircleo" size={24} color="#fff" />
      </View>
      <Room
        roomName="Room 1"
        appliances={["Samsung Washing machine", "Voltas Air conditioner"]}
        onAddMore={handleAddMore}
      />
      <Room
        roomName="Room 2"
        appliances={["Amazon Alexa", "Samsung water heater"]}
        onAddMore={handleAddMore}
      />
      <TouchableOpacity onPress={handleAddRoom} style={styles.addRoomButton}>
        <Text style={styles.addRoomButtonText}>+ Add Room</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a29bfe",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#6c5ce7",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  roomContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  applianceName: {
    fontSize: 16,
    color: "#333",
    paddingLeft: 20,
    paddingVertical: 4,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#e6e6e6",
    padding: 10,
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  addRoomButton: {
    marginVertical: 20,
    backgroundColor: "#6c5ce7",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  addRoomButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Appliances;
