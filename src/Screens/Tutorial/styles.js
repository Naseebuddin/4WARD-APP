import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  saveAreaStyle: {
    backgroundColor: "rgba(46,46,46,1)",
  },
  MainView: {
    width: scale(100),
    height: verticalScale(100),
    backgroundColor: "rgba(46,46,46,1)",
    flexDirection: "row",
  },

  ViewStyle: {
    borderRadius: 16,

    backgroundColor: "rgba(76,76,76,1)",
    borderWidth: 1,
    borderColor: "rgba(76,76,76,1)",
    marginTop: 1,
    height: verticalScale(550),
    width: scale(305),
    marginLeft: moderateScale(24),
    marginTop: moderateScale(24),
  },
  rightView: {
    backgroundColor: "red",
    height: verticalScale(550),
    width: scale(50),
    borderRadius: moderateScale(16),
    marginLeft: moderateScale(8),
    marginTop: moderateScale(24),
    backgroundColor: "rgba(76,76,76,1)",
  },
  imageStyle: {
    alignSelf: "center",
    marginTop: moderateScale(100),
    marginHorizontal: moderateScale(30),
    height: verticalScale(245),
    width: scale(267),
  },
  textStyle: {
    marginTop: moderateScale(100),
    lineHeight: 32,
    alignSelf: "center",
    fontSize: 22,
    color: "rgba(255,255,255,1)",
  },
  SecondtextStyle: {
    fontSize: 13,
    paddingTop: moderateScale(8),
    color: "rgba(153,153,153,1)",
    lineHeight: 22,
    
    paddingHorizontal: moderateScale(24),
    alignSelf: "center",
    fontWeight: 500,
    marginTop:1
  },
  dotImage:{
    height:verticalScale(5),
    width:scale(80),
    backgroundColor:'red',
    marginTop:moderateScale(14),
    marginLeft:moderateScale(9),
    marginTop:1
  },
  getStartView:{
    flexDirection:'row',
    marginTop:moderateScale(590),
    marginLeft:moderateScale(22),
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'rgba(46,46,46,1)'
  },
  getStartedTextStyle:{
    color:'rgba(255,255,255,1)',
    fontSize:15,
    
    fontWeight:'500',
    marginRight:moderateScale(22),
    marginTop:1
  }
});
