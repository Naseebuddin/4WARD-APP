import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default style = StyleSheet.create({
  mainViewStyle: {
    backgroundColor:colors.darkBackground,
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
    color: colors.white,
    lineHeight: moderateScale(32),
  },
  WeAreTextStyle: {
    fontSize: 15,
    color: colors.darkSilver,
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
    backgroundColor: colors.dark,
  },
  countryTextColor: {
    color: colors.white,
  },
  mobileNoView: {
    marginTop: 32,
    backgroundColor: colors.dark,
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
    backgroundColor: colors.dark,
    height: verticalScale(48),
    alignItems: "center",
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  passwordInputStyle:{
    width:scale(240)

  },
  showTextColor: {
    color: colors.white,
    fontWeight: 200,
    fontSize: 14,
    width:scale(40)
  },
  useOtpStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:24,
    marginTop:16
  },
  useOTPText:{
    color:colors.white,
    lineHeight:moderateScale(20),
    fontSize:13
  },
  FORGETPASSWORD:{
    color:colors.blue,
  },
  buttonView:{
    flex:0.1,
    marginTop:moderateVerticalScale(220),
    justifyContent:'flex-end'
  }
  
});
