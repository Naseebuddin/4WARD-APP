import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "rgba(46,46,46,1)",
  },
  secondMainView: {
    flex: 0.9,
    alignItems: "center",
  },

  imagestyling: {
    height: verticalScale(178),
    width: scale(133),
    alignSelf: "center",
    marginTop: moderateScale(50),
  },
  textStyling: {
    marginHorizontal: moderateScale(22),
    marginTop: moderateScale(54),
    color: "rgba(156,156,156,1)",
    fontSize: 13,
    lineHeight: 20,
  },
  buttonViewStyling:{
    marginLeft:20,
    marginTop:moderateScale(24)
  },
  newhereText:{
    alignSelf:'center',
    marginTop:moderateScale(500),
    color:"rgba(255,255,255,1)"
  },
  signupStyle:{
    color:'rgba(65,204,255,1)'
  }
});
