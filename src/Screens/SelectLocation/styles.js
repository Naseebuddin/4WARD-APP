import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  allTextView: {
    flex: 0.9,
  },
  textView: {
    marginHorizontal: moderateScale(24),
    flexDirection: "row",
    marginTop: moderateScale(16),
  },
  textDeviceStyling: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 32,
  },
  buttonStyle: {
    borderRadius: 8,
    height: verticalScale(32),
    width: scale(80),
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: moderateScale(24),
  },
  butttonTextstyle: {
    color: colors.white,
    lineHeight: 14,
    fontSize: 12,
    fontWeight: "bold",
  },
  turningTextView: {
    marginLeft: moderateScale(24),
    marginRight: moderateScale(103),
  },
  turningTextStyle: {
    color: colors.silverOneNineNine,
    lineHeight: 20,
  },
  orTextStyle: {
    color: colors.white,
    alignSelf: "center",
    marginTop: moderateScale(16),
    marginLeft: moderateScale(65),
    fontSize: 16,
    lineHeight: 20,
  },
  inputLocationView: {
    flexDirection: "row",
    borderRadius: moderateScale(8),
    backgroundColor: colors.dark,
    height: verticalScale(48),
    width: scale(310),
    alignItems: "center",
    marginTop: moderateScale(16),
  },
  inputComStyle: {
    marginHorizontal: 10,
    width: 150,
  },
  enterLocationTextStyle: {
    color: colors.silverSixFive,
    marginLeft: moderateScale(14),
  },
  suggesstionStyle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 600,
    marginTop: moderateScale(16),
  },
  flatListView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(24),
    paddingTop: moderateScale(24),
  },
  flatListStyle:{
    flex:1,
    flexDirection:'row',
   marginLeft:moderateScale(2),
   justifyContent:'space-between'


  
  },
  buttonView: {
    flex: 0.1,
    marginTop: moderateScale(170),
  },
  locationTextStyling: {
    color: colors.white,
  },
});
