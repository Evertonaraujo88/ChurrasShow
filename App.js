import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import Main from "./src/pages/main/main";
import Home from "./src/pages/home/home";
import Login from "./src/pages/login/login";
import FirstPage from "./src/pages/firstPage/firstPage";
import CreateAccount from "./src/pages/createAccount/createAccount";

import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';

import { useCallback } from 'react';
import RedefinePassword from './src/pages/redefinePassword/redefinePassword';
import { CheckEmail } from './src/pages/checkEmail/checkEmail';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Cintra: require("./assets/fonts/CintraRegular.ttf"),
    lato_regular: Lato_400Regular,
    lato_bold: Lato_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='FirstPage'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name='Main'
          component={Main} />

        <Stack.Screen
          name='Home'
          component={Home} />


        <Stack.Screen
          name='Login'
          component={Login} />


        <Stack.Screen
          name='FirstPage'
          component={FirstPage} />

        <Stack.Screen
          name='RedefinePassword'
          component={RedefinePassword} />


        <Stack.Screen
          name="CheckEmail"
          component={CheckEmail} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
