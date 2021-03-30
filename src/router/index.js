import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import BottomNav from "../component/BottomNavigation/index"
import Detail from "../pages/Detail";
const Stack=createStackNavigator()
export default function Router() {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={BottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
