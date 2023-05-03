import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import navigationStrings from "../../constants/navigationStrings";
import { moderateScale } from "react-native-size-matters";
const Tutorial = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.saveAreaStyle}>
      <View style={{ backgroundColor: "rgba(46,46,46,1)", flex: 2 }}>
        <View style={styles.MainView}>
          <View style={{ ...styles.ViewStyle }}>
            <Image style={styles.imageStyle} source={imagePath.ic_1} />
            <Text style={styles.textStyle}> {eng.HENDRERIT}</Text>
            <Text style={styles.SecondtextStyle}>{eng.AENEAN} </Text>
          </View>
          <View style={styles.rightView}></View>
        </View>
        <View style={{justifyContent: 'flex-end',flex:1,marginBottom: moderateScale(10)}}>
        <View style={styles.getStartView}>
          <Image source={imagePath.ic_dots} style={styles.dotImage} />

          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.APPLOGIN)}
          >
            <Text style={styles.getStartedTextStyle}>{eng.GETSTARTED} </Text>
          </TouchableOpacity>
        </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};
export default Tutorial;
