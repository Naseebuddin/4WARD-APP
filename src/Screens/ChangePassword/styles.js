import {
  moderateScale,
  moderateVerticalScale,
  s,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.darkBackground,
    flex: 1,
  },
  gobackViewStyling: {
    flexDirection: "row",
  },
  changePasswordTextstyle: {
    marginTop: moderateScale(8),
    fontSize: 16,
    color: colors.white,
    fontWeight: "600",
    marginLeft: 16,
  },
  inputStyleing: {
    width: scale(310),
    height: verticalScale(48),
    flexDirection: "row",
    backgroundColor: colors.dark,
    borderRadius: moderateScale(8),
    marginTop: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(24),
    paddingHorizontal: moderateScale(16),
  },
  inputWidth: {
    width: scale(200),
  },
  textStyling: {
    color: colors.white,
    fontSize: 14,
    opacity: 0.5,
  },
});
