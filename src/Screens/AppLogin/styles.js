import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.darkBackground,
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
    color: colors.sliverOneFiveSix,
    fontSize: 13,
    lineHeight: 20,
  },
  buttonViewStyling: {
    marginLeft: 20,
    marginTop: moderateScale(24),
  },
  newhereText: {
    alignSelf: "center",
    marginTop: moderateScale(500),
    color: colors.white,
  },
  signupStyle: {
    color: colors.blue,
  },
});
