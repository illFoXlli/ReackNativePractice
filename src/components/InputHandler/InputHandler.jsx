import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const InputHandler = () => {
 const [value, setValue] = useState("");
 const inputHandler = (text) => setValue(text);
 return (
  <View style={styles.container}>
   <TextInput
    placeholder="Type text"
    value={value}
    onChangeText={inputHandler}
   />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  //   flex: 1,
  width: 100,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
 },
});
