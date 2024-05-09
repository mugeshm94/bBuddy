import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Ensure you have this library

const tips = [
  "Change your light bulbs to LEDs",
  "Wash your clothes in cold water if possible.",
  "Clean or replace all filters in your home regularly. Dirty filters make your system work harder and run longer than necessary",
  "Use your microwave instead of your stove when cooking.",
];

const tips1 = [
  "💡 Use LED Light Bulbs: Replace incandescent bulbs with energy-efficient LEDs for a bright idea!",
  "🔌 Unplug Devices When Not in Use: Disconnect devices to zap phantom energy vampires! 🧛",
  "🌡️ Install a Programmable Thermostat: Control your home's temperature based on your schedule. ❄️🔥",
  "🏆 Use Energy-Efficient Appliances: Choose appliances with high energy efficiency ratings for the win!",
  "🚪 Seal Windows and Doors: Keep the elements out by sealing gaps around windows and doors. 🏡",
  "☀️ Opt for Natural Lighting: Let the sunshine in during the day to brighten your space naturally. 🌞",
  "🚿 Lower Water Heater Temperature: Set your water heater to a lower temperature to save energy and prevent scalding. 🚰",
  "🔌 Use Smart Power Strips: Cut power to idle electronics with smart power strips. 🤖",
  "🏡 Improve Home Insulation: Wrap your home in a cozy blanket with enhanced insulation. 🏠❄️🔥",
  "👚 Air Dry Laundry: Hang dry your clothes for extra freshness and energy savings. 👕",
  "🍳 Practice Efficient Cooking: Cook with lids on pots and use smaller appliances for faster meals. 🍽️",
  "❄️ Adjust Refrigerator and Freezer Temperature: Keep food fresh while saving energy with proper temperatures. 🍎🍗❄️",
  "🌳 Plant Trees Strategically: Plant trees for shade in summer and windbreaks in winter. 🌳❄️☀️",
  "📺 Use Energy-Saving Modes on Devices: Activate energy-saving settings on electronics for smarter power use. 💻📱",
  "🔧 Conduct Regular Maintenance: Keep HVAC systems and appliances in top shape for efficient performance. 🛠️👨‍🔧",
];

const Tips = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <ImageBackground
      style={[styles.container, { resizeMode: "cover" }]}
      source={require("../images/image_bg_1.png")}
    >
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Tips</Text>
      </View> */}
      <ScrollView style={styles.tipsList}>
        {tips1.map((tip, index) => (
          <View key={index} style={styles.tipItem}>
            {/* <MaterialCommunityIcons
              name="check-circle"
              size={24}
              color="white"
            /> */}
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#6c5ce7",
    padding: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  tipsList: {
    flex: 1,
    backgroundColor: "#a29bfe",
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dfe6e9",
  },
  tipText: {
    color: "#000",
    marginLeft: 10,
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#dfe6e9",
  },
  tabItem: {
    alignItems: "center",
  },
});

export default Tips;
