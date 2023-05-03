import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.darkBackground,
    flex: 1,
  },
  secondMainView: {
    flex: 0.9,
  },
  enterDigitTextStyle: {
    color: colors.white,
    fontSize: moderateScale(24),
    lineHeight: 32,
    marginTop: moderateScale(16),
    marginHorizontal: moderateScale(24),
  },
  editNumberTextStyle: {
    color: colors.blue,
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(8),
  },
  OtpView: {
    flexDirection: "row",
    marginTop: moderateScale(32),
  },
  otpStyle: {
    width: scale(40),
    height: verticalScale(40),
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginLeft: moderateScale(24),
  },
  resendText: {
    fontSize: 15,
    color: colors.white,
    lineHeight: 32,
    marginTop: moderateScale(120),
    marginLeft: moderateScale(24),
  },
  buttonViewStyle: {
    marginTop: moderateScale(290),
    flex: 0.2,
  },
});
