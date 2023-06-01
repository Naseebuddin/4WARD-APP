import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, Text, View } from "react-native";
import ProfileComponent from "../../Components/ProfileComponent";
import eng from "../../constants/lang/eng";
import navigationStrings from "../../constants/navigationStrings";
import StateSet from "../../redux/actions/action";
import imagePath from "./../../constants/imagePath";
import styles from "./styles";
export default AppProfiler = ({ navigation }) => {
  const removeItem = (async) => {
    AsyncStorage.removeItem("userLogin").then((res) => {
      StateSet(false) 
    });
  };
  return (
    <SafeAreaView style={styles.saveAreaViewStyleing}>
      <View style={styles.mainView}>
        <View>
          <Text style={styles.textStyling}>{eng.PROFILE}</Text>
          <View style={styles.componentStyling}>
            <ProfileComponent
              clickOnButton={() =>
                navigation.navigate(navigationStrings.EDITPROFILE)
              }
              imageimport={imagePath.ic_usrr_1}
              textImport={eng.EDITPROFILE}
            />
            <ProfileComponent
              clickOnButton={() =>
                navigation.navigate(navigationStrings.CHANGEPASSWORD)
              }
              imageimport={imagePath.ic_key}
              textImport={eng.CHANGEPASSWORD}
            />
            <ProfileComponent
              imageimport={imagePath.ic_logout}
              textImport={eng.SIGNOUT}
              clickOnButton={() => removeItem()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
