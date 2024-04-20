import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/components/Main";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewCart from "./src/components/ViewCart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator intialRouteName="Main" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="ViewCart" component= {ViewCart}/> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
