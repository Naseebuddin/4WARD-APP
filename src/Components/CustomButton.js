import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../styles/colors";
export default CustomButton = ({
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
    backgroundColor: colors.red,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  imagestyle: {},
});
