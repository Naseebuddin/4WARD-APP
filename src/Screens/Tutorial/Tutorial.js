import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import { scale, verticalScale } from "react-native-size-matters";
import navigationStrings from "../../constants/navigationStrings";

const Tutorial = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "rgba(46,46,46,1)" }}>
      <View style={styles.MainView}>
        <View style={{ ...styles.ViewStyle }}>
          <Image style={styles.imageStyle} source={imagePath.ic_1} />
          <Text style={styles.textStyle}> {eng.HENDRERIT}</Text>
          <Text style={styles.SecondtextStyle}>{eng.AENEAN} </Text>
        </View>
        <View style={styles.rightView}></View>
      </View>
      <View style={styles.getStartView}>
        <Image source={imagePath.ic_dots} style={styles.dotImage} />
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.LOGIN)} >
          <Text style={styles.getStartedTextStyle}>{eng.GETSTARTED} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Tutorial;
