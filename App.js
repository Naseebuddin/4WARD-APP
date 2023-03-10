import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Routes from "./src/Navigations/Routs";
function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.viewStyle}>
        <Routes />
      </View>
    </SafeAreaView>
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
