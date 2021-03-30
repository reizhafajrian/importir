import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Message, Cart, Feed, Home, User } from "../../pages/index";
import { ICUser, ICFeed, ICCart, ICHome, ICMessage } from "../../assets/index";
import Svg, { Circle, Path } from "react-native-svg";
import { bottomNavigationColor } from "../../utils/Colors/index";
import { Keyboard } from "react-native";

const Tab = createMaterialBottomTabNavigator();
const useTabBarVisibility = () => {


};


const BottomNav = () => {
	// const [visible, setVisible] = React.useState(true);

  // React.useEffect(() => {
  //   let keyboardEventListeners;
  //   if (Platform.OS === 'android') {
  //     keyboardEventListeners = [
  //       Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
  //       Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
  //     ];
  //   }
  //   return () => {
  //     if (Platform.OS === 'android') {
  //       keyboardEventListeners &&
  //         keyboardEventListeners.forEach(eventListener => eventListener.remove());
  //     }
  //   };
  // }, []);

  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "white",
        position: "absolute",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow:"hidden"
      }}
      style={{position:"relative"}}
      keyboardHidesNavigationBar={false}
      initialRouteName={`Home`}
      activeColor={bottomNavigationColor.primary}
      shifting={false}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused === true ? (
              <Svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M1 8.50531V20C1 20.5523 1.44772 21 2 21H6.5C7.05228 21 7.5 20.5523 7.5 20V15.3333C7.5 15.117 7.56893 14.9042 7.70619 14.737C9.88948 12.0765 11.9305 13.5057 12.8399 14.7625C12.9498 14.9143 13 15.0994 13 15.2868V20C13 20.5523 13.4477 21 14 21H19C19.5523 21 20 20.5523 20 20V8.50531C20 8.18757 19.849 7.88874 19.5932 7.70025L11.0932 1.43709C10.7404 1.17717 10.2596 1.17717 9.9068 1.43709L1.4068 7.70025C1.151 7.88874 1 8.18757 1 8.50531Z"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
              </Svg>
            ) : (
              <ICHome />
            ),
        }}

      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            focused === true ? (
              <Svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M7.5 2H5C4.37049 2 3.77771 2.29639 3.4 2.8L1.4 5.46667C1.14036 5.81286 1 6.23393 1 6.66667V8"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
                <Path
                  d="M1 6.5H8.5"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
                <Path
                  d="M1 6V19.5C1 20.6046 1.89543 21.5 3 21.5H16.5C17.6046 21.5 18.5 20.6046 18.5 19.5V9"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
                <Path
                  d="M6 10C9.35012 15.5699 11.0921 15.3359 14 10"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
                <Circle cx="14.5" cy="3.5" r="3.5" fill="#E87B5E" />
              </Svg>
            ) : (
              <ICCart />
            ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) =>
            focused === true ? (
              <Svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M1 9.02195C4.5 8.85528 11.7 10.9219 12.5 20.5219"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
                <Path
                  d="M1 1.02195C6.83333 0.688612 18.9 4.02195 20.5 20.0219"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
                <Circle cx="3.5" cy="18.022" r="1.5" fill="#B4B4B4" />
              </Svg>
            ) : (
              <ICFeed />
            ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ focused }) =>
            focused === true ? (
              <Svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M17.5462 20.5H2C1.44772 20.5 1 20.0523 1 19.5V4.91421C1 4.649 1.10536 4.39464 1.29289 4.20711L4.20711 1.29289C4.39464 1.10536 4.649 1 4.91421 1H17.5109C17.8195 1 18.1108 1.14247 18.3003 1.38606L21.2894 5.22917C21.4259 5.4047 21.5 5.62073 21.5 5.84311V16.1243C21.5 16.3665 21.4121 16.6005 21.2526 16.7828L18.2988 20.1585C18.1089 20.3755 17.8346 20.5 17.5462 20.5Z"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
                <Circle
                  cx="7.5"
                  cy="10.5"
                  r="1.5"
                  fill={`${bottomNavigationColor.primary}`}
                />
                <Circle
                  cx="15.5"
                  cy="10.5"
                  r="1.5"
                  fill={`${bottomNavigationColor.primary}`}
                />
              </Svg>
            ) : (
              <ICMessage />
            ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({ focused }) =>
            focused === true ? (
              <Svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M1 19.5V17.7656C1 16.0554 1.91635 14.4764 3.40118 13.6279V13.6279C4.12125 13.2164 4.93623 13 5.76556 13H13.1972C14.0467 13 14.8772 13.2514 15.584 13.7226V13.7226C16.781 14.5207 17.5 15.8641 17.5 17.3028V19.5"
                  stroke={`${bottomNavigationColor.primary}`}
                  stroke-width="2"
                />
                <Circle cx="9.5" cy="4" r="4" fill={`${bottomNavigationColor.primary}`} />
              </Svg>
            ) : (
              <ICUser />
            ),
        }}
      />
    </Tab.Navigator>
  
  );
  
};
export default BottomNav