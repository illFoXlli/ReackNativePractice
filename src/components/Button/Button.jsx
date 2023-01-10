
import {  Button, StyleSheet, TouchableOpacity, View } from "react-native";

export const ButtonOne = (props) => {
    console.log(props.children);
 return (
  <View style={styles.container}>
   <TouchableOpacity style={styles.button}>{props.children}</TouchableOpacity>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  width: 100,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
 },
 button: {
  color: "red",
 },
});
