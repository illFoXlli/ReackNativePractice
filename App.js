import { StyleSheet, Text, View } from "react-native";
import useCachedResources from "./helpers/useCachedResources.js";
import LoginScreen from "./Screens/LoginScreen.jsx";
import RegistrationScreen from "./Screens/RegistrationScreen.jsx";

export default function App() {
 const isLoadingComplete = useCachedResources();

 if (!isLoadingComplete) {
  return null;
 }
 return <RegistrationScreen />;
 //  return <LoginScreen />;
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
