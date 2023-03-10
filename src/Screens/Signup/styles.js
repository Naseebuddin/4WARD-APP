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
  createTextStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(16),
  },
  createContinueTextStyle: {
    color: "rgba(175,175,175,1)",
    fontSize: 15,
    lineHeight: 32,
    marginHorizontal: moderateScale(24),
  },
  viewOfName: {
    marginTop: verticalScale(32),
    marginHorizontal: moderateScale(24),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOfFirstName: {
    width: scale(146),
    height: verticalScale(48),
    backgroundColor: "rgba(76,76,76,1)",
    borderRadius: 8,
    justifyContent: "center",
    paddingLeft: moderateScale(16),
  },
  emailView: {
    width: scale(316),
    backgroundColor: "rgba(76,76,76,1)",
    height: verticalScale(48),
    borderRadius: 8,
    marginTop: moderateScale(16),
    marginHorizontal: moderateScale(24),
    justifyContent: "center",
    paddingLeft: moderateScale(16),
  },
  mobileNoView: {
    flexDirection: "row",
  },
  countryCodeStyle: {
    marginTop: moderateScale(16),
    marginLeft: moderateScale(24),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(48),
    width: scale(102),
    paddingHorizontal: moderateScale(19),
    borderRadius: moderateScale(8),
    backgroundColor: "rgba(76,76,76,1)",
  },
  countryTextColor: {
    color: "rgba(255,255,255,1)",
  },
  inputMobileNoStyle: {
    marginTop: moderateScale(16),
    backgroundColor: "rgba(76,76,76,1)",
    width: scale(200),
    height: verticalScale(48),
    borderRadius: 8,
    justifyContent: "center",
    paddingLeft: moderateScale(16),
    marginRight: moderateScale(16),
    marginLeft: moderateScale(16),
  },
  buttonView:{
    alignItems:'center',
    marginLeft:moderateScale(10),
    flex:0.2
  }
});
