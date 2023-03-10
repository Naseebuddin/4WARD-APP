import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "rgba(46,46,46,1)",
  },
  textView: {
    marginLeft: 24,
  },
  textStyle: {
    color: "rgba(255,255,255,1)",
    fontSize: moderateScale(24),
    lineHeight: 32,
    marginTop: 16,
  },
  textCreatePasswordStyle:{
    fontSize:15,
    color:'rgba(184,184,184,1)'
  },
  inputView:{
    width:scale(316),
    borderRadius:moderateScale(8),
    backgroundColor:'rgba(76,76,76,1)',
    height:verticalScale(48),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:moderateScale(16),
    marginHorizontal:moderateScale(24),
    marginTop:moderateScale(32)
  },
  buttonStyle:{
    flex:0.3,
    marginLeft:moderateScale(8)
  }

});
