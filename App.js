import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";
import { InputHandler } from "./src/components/InputHandler/InputHandler.jsx";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

// SplashScreen.preventAutoHideAsync();

export default function App() {

    
    //   const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //       await SplashScreen.hideAsync();
    //     }
    //   }, [fontsLoaded]);
    
    //   if (!fontsLoaded) {
    //     return null;
    //   }
 return (
    // onLayout={onLayoutRootView}
    <RegistrationScreen />
//   <View style={styles.container}>
//    <Text style={styles.title}>Hello Masha!</Text>
//    <InputHandler />
//    <StatusBar style="auto" />
//   </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "green",
  alignItems: "center",
  justifyContent: "center",
 },
 title: {
  fontSize: 30,
  fontWeight: "bold",
  padding: 8,
  borderWidth: 4,
  borderColor: "#20232a",
  backgroundColor: "#61dafb",
  color: "#20232a",
 },
});
