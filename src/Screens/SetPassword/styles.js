import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  textView: {
    marginLeft: 24,
  },
  textStyle: {
    color: colors.white,
    fontSize: moderateScale(24),
    lineHeight: 32,
    marginTop: 16,
  },
  inputShowTextStyling: {
    color: colors.white,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17),
  },
  textCreatePasswordStyle: {
    fontSize: 15,
    color: colors.silverOneEighthFour,
  },
  inputView: {
    width: scale(316),
    borderRadius: moderateScale(8),
    backgroundColor: colors.dark,
    height: verticalScale(48),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(16),
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(32),
  },
  passwordInputStyle:{
    width:scale(240)

  },
  buttonStyle: {
    flex: 0.3,
    marginTop:moderateScale(270),
    marginLeft: moderateScale(8),
  },
});
