import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import your screens here
import SignUpScreen from "./Screens/Login";
import DashboardScreen from "./Screens//Dashboard"; // This would include the Home, Appliances, and Tips routes
import Dashboard from "./Screens//Dashboard";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// // Dashboard Bottom Tab Navigator
// function DashboardTabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Dashboard"
//         component={DashboardScreen}
//         options={{
//           tabBarLabel: "Dashboard",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="view-dashboard"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// Main Stack Navigator
function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }} // Assuming you don't want a header for the sign-up screen
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }} // Assuming you want to hide the header for the dashboard as it has its own tab navigation
      />
      {/* Add more stack screens if needed */}
    </Stack.Navigator>
  );
}

// The main app component with navigation containers
function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
