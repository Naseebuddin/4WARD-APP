import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/Navigations/Routs";
import StateSet from "./src/redux/actions/action";
import store from "./src/redux/store";
function App() {
  useEffect(() => {
    (async () => {
      try {
        const getingItem = await AsyncStorage.getItem("userLogin");
        const passingItem = JSON.parse(getingItem);
        // console.log(passingItem, "passing appp");
        if (passingItem) {
          StateSet(true);
        }
      } catch (e) { }
    })();  
  }, []);
  return (
    <View style={styles.viewStyle}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "rgba(46,46,46,1)",
  },
  viewStyle: {
    flex: 1,
    backgroundColor: "rgba(46,46,46,1)",
  },
});
