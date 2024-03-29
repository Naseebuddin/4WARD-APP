import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
export default CustomButtonWithImage = ({
  ButtonText = "",
  textColor,
  topMargine,
  onPressButton = "",
  customBackgruondColor,
  custumImage,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.buttonStyle,
          marginTop: topMargine,
          backgroundColor: customBackgruondColor,
        }}
        onPress={onPressButton}
      >
        <Image style={styles.imagestyle} source={custumImage} />
        <Text style={{ ...styles.textStyle, color: textColor }}>
          {ButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    height: verticalScale(48),
    width: scale(315),
    marginHorizontal: 20,
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    marginRight: moderateScale(1),
    marginVertical: moderateScale(5),
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: moderateScale(70),
  },
  imagestyle: {
    marginHorizontal: moderateScale(16),
  },
});
