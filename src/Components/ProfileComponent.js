import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
export default ProfileComponent = ({
  imageimport,
  textImport = "",
  clickOnButton = "",
}) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyling} onPress={clickOnButton}>
        <Image style={styles.imageStyling} source={imageimport} />
        <Text style={styles.textStyling}>{textImport}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyling: {
    flexDirection: "row",
    marginLeft: moderateScale(24),
    marginTop: moderateScale(32),
  },
  imageStyling: {},
  textStyling: {
    fontSize: 15,
    color: "rgba(255,255,255,1)",
    marginLeft: moderateScale(20),
  },
});
