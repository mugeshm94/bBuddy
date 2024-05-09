import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tips from "./Tips";
import Appliances from "./Appliances";
import Home from "./Home";

function HomeScreen() {
  return <Home />;
}
function ApplianceScreen() {
  return <Appliances />;
}
function TipsScreen() {
  return <Tips />;
}

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: makeIconRender("home") }}
        />
        <Tab.Screen
          name="Your Appliances"
          component={ApplianceScreen}
          options={{ tabBarIcon: makeIconRender("fridge") }}
        />
        <Tab.Screen
          name="TIPS"
          component={TipsScreen}
          options={{ tabBarIcon: makeIconRender("lightbulb") }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
