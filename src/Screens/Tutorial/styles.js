import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  saveAreaStyle: {
    backgroundColor: colors.darkBackground,
    flex: 1,
  },
  MainView: {
    width: scale(100),
    height: verticalScale(100),
    backgroundColor: colors.darkBackground,
    flexDirection: "row",
  },
  ViewStyle: {
    borderRadius: 16,
    backgroundColor: colors.dark,
    borderWidth: 1,
    borderColor: colors.dark,
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
    backgroundColor: colors.dark,
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
    color: colors.white,
  },
  SecondtextStyle: {
    fontSize: 13,
    paddingTop: moderateScale(8),
    color: colors.silverOneFiveThree,
    lineHeight: 22,

    paddingHorizontal: moderateScale(24),
    alignSelf: "center",
    fontWeight: 500,
    marginTop: 1,
  },
  dotImage: {
    height: verticalScale(5),
    width: scale(80),
    backgroundColor: "red",
    marginTop: moderateScale(14),
    marginLeft: moderateScale(9),
    marginTop: 1,
  },
  getStartView: {
    flexDirection: "row",
    // marginTop: moderateScale(590),
    marginLeft: moderateScale(22),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.darkBackground,
    padding: 10
  },
  getStartedTextStyle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "500",
    marginRight: moderateScale(22),
    marginTop: 1,
  },
});
