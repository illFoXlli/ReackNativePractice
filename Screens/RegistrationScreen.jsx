// Registration.js

import React, { useCallback } from "react";
import {
 ImageBackground,
 SafeAreaView,
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
import { useFonts } from "expo-font";

const RegistrationScreen = () => {
 const [text, onChangeText] = React.useState(null);
 const [textMail, onChangeMail] = React.useState(null);
 const [pass, onChangePass] = React.useState(null);
 const [showPass, onShowPass] = React.useState(true);

 const [fontsLoaded] = useFonts({
  "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
 });
 const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
   await SplashScreen.hideAsync();
  }
 }, [fontsLoaded]);
 if (!fontsLoaded) {
  return null;
 }

 const onShow = () => onShowPass((prevShow) => !prevShow);

 return (
  <View style={styles.container}>
   <ImageBackground
    source={require("../assets/images/photo.png")}
    resizeMode="cover"
    style={styles.image}
   >
    <View
     style={styles.containerRegistrationScreen}
     onLayout={onLayoutRootView}
    >
     <Text style={styles.text}>Регистрация</Text>
     <SafeAreaView>
      <View style={styles.ViewLoginInput}>
       <TextInput
        placeholder="Логин"
        placeholderTextColor="#BDBDBD"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
       />
      </View>
      <View style={styles.ViewMailInput}>
       <TextInput
        style={styles.input}
        onChangeText={onChangeMail}
        value={textMail}
        placeholder="Адрес электронной почты"
        placeholderTextColor="#BDBDBD"
        keyboardType="email-address"
       />
      </View>
      <View style={styles.ViewPassInput}>
       <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder={"Пароль"}
        placeholderTextColor="#BDBDBD"
        // keyboardType="visible-password"
        secureTextEntry={showPass}
       />
       <TouchableOpacity
        style={{ position: "absolute", right: 16, top: 16 }}
        onPress={onShow}
       >
        <Text style={styles.buttonShow}>Показать</Text>
       </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
     </SafeAreaView>
     <TouchableOpacity style={styles.buttonComeIn}>
      <Text style={styles.buttonTextComeIn}>Уже есть аккаунт? Войти</Text>
     </TouchableOpacity>
    </View>
   </ImageBackground>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 image: {
  flex: 1,
  justifyContent: "center",
 },
 text: {
  fontFamily: "Roboto-Medium",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: 35,
  lineHeight: 45,
  textAlign: "center",
  letterSpacing: 0.01,
  color: "#212121",
  marginBottom: 32,
  marginTop: 92,
 },
 buttonShow: {
  fontFamily: "Roboto-Regular",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 16,
  lineHeight: 19,
  color: "#1B4371",
 },

 ViewLoginInput: {
  marginBottom: 16,
  marginLeft: 16,
  marginRight: 16,
 },
 ViewMailInput: {
  marginBottom: 16,
  marginLeft: 16,
  marginRight: 16,
 },
 ViewPassInput: {
  position: "relative",
  marginBottom: 43,
  marginLeft: 16,
  marginRight: 16,
 },
 input: {
  fontSize: 16,
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 16,
  paddingRight: 16,
  lineHeight: 19,
  borderStyle: "solid",
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#E8E8E8",
  backgroundColor: "#F6F6F6",
 },
 containerRegistrationScreen: {
  // flex: 3,
  backgroundColor: "#fff",
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  marginTop: "auto",
 },
 button: {
  //   width: "100%",
  alignItems: "center",
  paddingTop: 16,
  paddingBottom: 16,
  paddingRight: 32,
  paddingLeft: 32,
  marginLeft: 16,
  marginRight: 16,
  marginBottom: 16,
  backgroundColor: "#FF6C00",
  borderRadius: 100,
 },
 buttonText: {
  color: "#fff",
  fontFamily: "Roboto",
  fontWeight: "400",
  fontSize: 16,
  lineHeight: 19,
 },
 buttonComeIn: {
  marginBottom: 45,
  marginLeft: "auto",
  marginRight: "auto",
 },
 buttonTextComeIn: {
  color: "#1B4371",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 16,
  lineHeight: 19,
 },
});

export default RegistrationScreen;

// ============================================================================================================

// import React from "react";
// import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
// const RegistrationScreen = () => {
//     const image = { uri: "https://reactjs.org/logo-og.png" };
//   return (

//     <View style={styles.container}>
//         <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//       <Text style={styles.textTitle}>Регистрация</Text>
//       </ImageBackground>
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//     container: {

//     },
//     textTitle: {
//         marginTop: 100,
//     fontFamily: 'Roboto',
//     fontStyle: "normal",
//     fontWeight: "500",
//     fontSize: 45,
//     // lineHeight: 1.29,
//     textAlign: "center",
//     letterSpacing: 0.01,

//     color: '#212121',
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//   }
// });

// export default RegistrationScreen;

// // import { useState } from "react";
// // import { StyleSheet, TextInput, View } from "react-native";

// export const RegistrationScreen = () => {

//  return (
// //   <View style={styles.container}>
// //    <TextInput
// //     placeholder="Type text"
// //     value={value}
// //     onChangeText={inputHandler}
// //    />
// //   </View>
// <></>
//  );
// };

// const styles = StyleSheet.create({
//  container: {
//   //   flex: 1,
//   width: 100,
//   backgroundColor: "#fff",
//   alignItems: "center",
//   justifyContent: "center",
//  },
// });

// ======================================

// import React, { useState, useEffect, useCallback } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   Platform,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableWithoutFeedback,
//   Dimensions,
// } from "react-native";
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

// const initialState = {
//   email: "",
//   password: "",
// };

// export default function LoginScreen() {
//     const [fontsLoaded] = useFonts({
//         'DMMono-Regular': require('../assets/fonts/DMMono-Regular.ttf'),
//       });

//       const onLayoutRootView = useCallback(async () => {
//         if (fontsLoaded) {
//           await SplashScreen.hideAsync();
//         }
//       }, [fontsLoaded]);

//       if (!fontsLoaded) {
//         return null;
//       }

//   console.log(Platform.OS);
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   const [state, setstate] = useState(initialState);

//   const [dimensions, setdimensions] = useState(
//     Dimensions.get("window").width - 20 * 2
//   );

//   useEffect(() => {
//     const onChange = () => {
//       const width = Dimensions.get("window").width - 20 * 2;
//       setdimensions(width);
//     };
//     Dimensions.addEventListener("change", onChange);
//     return () => {
//       Dimensions.removeEventListener("change", onChange);
//     };
//   }, []);

//   const keyboardHide = () => {
//     setIsShowKeyboard(false);
//     Keyboard.dismiss();
//     console.log(state);
//     setstate(initialState);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={keyboardHide}>
//       <View style={styles.container} onLayout={onLayoutRootView}>
//         <ImageBackground
//           style={styles.image}
//           source={require("../assets/images/photo.png")}
//         >
//           <KeyboardAvoidingView
//             behavior={Platform.OS == "ios" ? "padding" : "height"}
//           >
//             <View
//               style={{
//                 ...styles.form,
//                 marginBottom: isShowKeyboard ? 20 : 150,
//                 width: dimensions,
//               }}
//             >
//               <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Hello again</Text>
//                 <Text style={styles.headerTitle}>Welcome back</Text>
//               </View>
//               <View>
//                 <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
//                 <TextInput
//                   style={styles.input}
//                   name="hola"
//                   textAlign={"center"}
//                   onFocus={() => setIsShowKeyboard(true)}
//                   value={state.email}
//                   onChange={(nativeEvent) => console.log(nativeEvent)}
//                   onChangeText={(value) =>
//                     setstate((prevState) => ({ ...prevState, email: value }))
//                   }
//                 />
//               </View>
//               <View style={{ marginTop: 20 }}>
//                 <Text style={styles.inputTitle}>PASSWORD</Text>
//                 <TextInput
//                   style={styles.input}
//                   textAlign={"center"}
//                   secureTextEntry={true}
//                   onFocus={() => setIsShowKeyboard(true)}
//                   value={state.password}
//                   onChangeText={(value) =>
//                     setstate((prevState) => ({ ...prevState, password: value }))
//                   }
//                 />
//               </View>
//               <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={styles.btn}
//                 onPress={keyboardHide}
//               >
//                 <Text style={styles.btnTitle}>SIGN IN</Text>
//               </TouchableOpacity>
//             </View>
//           </KeyboardAvoidingView>
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#f0f8ff",
//     height: 40,
//     borderRadius: 6,

//     color: "#f0f8ff",
//   },
//   form: {
//     // marginHorizontal: 40,
//   },
//   inputTitle: {
//     color: "#f0f8ff",
//     marginBottom: 10,
//     fontSize: 18,
//     fontFamily: "DMMono-Regular",
//   },
//   btn: {
//     borderRadius: 6,
//     borderWidth: 1,
//     height: 40,
//     marginTop: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 20,
//     ...Platform.select({
//       ios: {
//         backgroundColor: "transparent",
//         borderColor: "#f0f8ff",
//       },
//       android: {
//         backgroundColor: "#4169e1",
//         borderColor: "transparent",
//       },
//     }),
//   },
//   btnTitle: {
//     color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
//     fontSize: 18,
//     fontFamily: "DMMono-Regular",
//   },
//   header: {
//     alignItems: "center",
//     marginBottom: 120,
//   },
//   headerTitle: {
//     fontSize: 40,
//     color: "#f0f8ff",
//     fontFamily: "DMMono-Regular",
//   },
// });
