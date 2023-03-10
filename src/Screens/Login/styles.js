import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default style = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: "rgba(46,46,46,1)",
    flex: 1,
  },
secondMainView:{
  flex:0.9
},
  viewNoTwo: {
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(26),
  },
  welcomeStyle: {
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    lineHeight: moderateScale(32),
  },
  WeAreTextStyle: {
    fontSize: 15,
    color: "rgba(166,166,166,1)",
    lineHeight: moderateScale(32),
  },
  CountryNoView: {
    flexDirection: "row",
  },
  countryCodeStyle: {
    marginTop: moderateScale(32),
    marginLeft: moderateScale(19),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(48),

    width: scale(104),
    paddingHorizontal: moderateScale(19),
    borderRadius: moderateScale(8),
    backgroundColor: "rgba(76,76,76,1)",
  },
  countryTextColor: {
    color: "rgba(255,255,255,1)",
  },
  mobileNoView: {
    marginTop: 32,
    backgroundColor: "rgba(76,76,76,1)",
    height: verticalScale(48),
    borderRadius: moderateScale(8),
    marginLeft: moderateScale(16),
    paddingHorizontal: moderateScale(16),
    paddingLeft: moderateScale(16),
    width: scale(194),
    justifyContent: "center",
  },
  PasswordViewStyle: {
    marginTop: moderateScale(16),
    width: scale(315),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(76,76,76,1)",
    height: verticalScale(48),
    alignItems: "center",
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  showTextColor: {
    color: "rgba(255,255,255,1)",
    fontWeight: 200,
    fontSize: 14,
  },
  useOtpStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:24,
    marginTop:16
  },
  useOTPText:{
    color:'rgba(255,255,255,1)',
    lineHeight:moderateScale(20),
    fontSize:13
  },
  FORGETPASSWORD:{
    color:'rgba(50,197,255,1)'
  },
  buttonView:{
    flex:0.3,
    marginTop:50
  }
  
});
