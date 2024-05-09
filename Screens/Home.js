import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"; // Make sure to install expo icons or any other icon library

const tips = [
  "Change your light bulbs to LEDs",
  "Use natural light when possible.",
  "Wash your clothes in cold water if possible.",
];

const roomsData = [
  { key: "1", icon: "desk-lamp", label: "Office" },
  { key: "2", icon: "sofa", label: "Living Room" },
  { key: "3", icon: "bed-empty", label: "Bedroom" },
  { key: "4", icon: "silverware-fork-knife", label: "Kitchen" },
  // Assuming you have a 'plus' icon for adding a new room
  { key: "5", icon: "plus-box", label: "Add" },
];
const Card = ({ title }) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>
      •{" "}
      {
        "🌞 Lower thermostat in winter; raise it in summer. Save energy, stay cozy!"
      }
    </Text>
    <Text style={styles.cardText}>
      • {"🚿 Shorter showers save water, energy, and bring a happy planet!"}
    </Text>
    <Text style={styles.cardText}>
      • {"💡 Switch to LED bulbs - bright ideas that save energy and money!"}
    </Text>
  </View>
);
const HorizontalCardList = () => {
  const data = [
    { id: "1", title: "Card 1" },
    { id: "2", title: "Card 2" },
    { id: "3", title: "Card 3" },
    { id: "4", title: "Card 4" },
    // Add more cards as needed
  ];

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card title={item.title} />}
    />
  );
};

const Home = () => {
  const renderRoomItem = ({ item }) => (
    <TouchableOpacity style={styles.roomItem}>
      <MaterialCommunityIcons name={item.icon} size={40} color="white" />
      <Text style={styles.roomItemLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Hello Ankush</Text>
        <AntDesign
          name="questioncircleo"
          size={24}
          color="white"
          style={styles.helpIcon}
        />
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitle}>Tips</Text>
        {/* <ScrollView
          horizontal="true"
          style={{
            flexDirection: "row", // This ensures a horizontal layout
            padding: 10,
          }}
        >
          <View style={{ backgroundColor: "white" }}>
            <Text style={styles.tipText}>
              • Change your light bulbs to LEDs
              <Text style={styles.tipText}></Text>
              "Use natural light when possible.",
            </Text>
            <Text style={styles.tipText}>
              "Wash your clothes in cold water if possible.",
            </Text>
          </View>
        </ScrollView> */}
        <HorizontalCardList />
      </View>

      <View style={styles.roomsContainer}>
        <Text style={styles.sectionTitle}>Rooms</Text>
        <FlatList
          data={roomsData}
          renderItem={renderRoomItem}
          keyExtractor={(item) => item.key}
          numColumns={2}
        />
      </View>
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
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#6c5ce7",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  helpIcon: {
    // styles if needed
  },
  gauge: {
    // Placeholder for gauge graphic
    height: 100,
    backgroundColor: "#6c5ce7", // Replace with actual gauge component/graphic
    marginVertical: 20,
  },
  tipsContainer: {
    backgroundColor: "#6c5ce7",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  tipText: {
    color: "#173592",
  },
  roomsContainer: {
    padding: 20,
  },
  roomItem: {
    backgroundColor: "#6c5ce7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  roomItemLabel: {
    color: "white",
    marginTop: 8,
  },
  card: {
    width: 250,
    height: 200,
    margin: 10,
    backgroundColor: "lightgray",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 16,
  },
});

export default Home;
