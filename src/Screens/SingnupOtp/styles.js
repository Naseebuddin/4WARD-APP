import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
export default StyleSheet.create({
  mainView: {
    backgroundColor: "rgba(46,46,46,1)",
    flex: 1,
  },
  secondMainView:{
    flex:0.9
  },
  enterDigitTextStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: moderateScale(24),
    lineHeight: 32,
    marginTop: moderateScale(16),
    marginHorizontal: moderateScale(24),
  },
  editNumberTextStyle: {
    color: "rgba(50,197,255,1)",
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
    backgroundColor: "rgba(76,76,76,1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginLeft: moderateScale(24),
  },
  resendText: {
    fontSize: 15,
    color: "rgba(255,255,255,1)",
    lineHeight: 32,
    marginTop: moderateScale(120),
    marginLeft: moderateScale(24),

  },
  buttonViewStyle: {
    marginTop: moderateScale(380),
    flex: 0.2,
  },
});
