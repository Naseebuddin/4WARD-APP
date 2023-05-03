import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  saveAreaViewStyleing: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  textStyling: {
    fontSize: 16,
    marginLeft: moderateScale(24),
    color: colors.white,
    fontWeight: 600,
    marginTop: moderateScale(16),
    marginBottom: moderateScale(10),
  },
  flatListViewStyling: {
    flexDirection: "row",
  },
  userNameStyling: {
    color: colors.red,
    fontSize: 16,
    marginTop: moderateScale(24),
    marginLeft: moderateScale(16),
  },
  lineView: {
    marginTop: moderateScale(16),
    borderWidth: 0.5,
    borderColor: colors.silverFiveOne,
    width: moderateScale(300),
    marginLeft: moderateScale(80),
  },
  profileImageStyling: {
    height: verticalScale(40),
    width: scale(40),
    borderRadius: 40,
    marginLeft: moderateScale(24),
    marginTop: moderateScale(24),
  },
  timeTextStyling: {
    marginLeft: moderateScale(16),
    marginTop: moderateScale(2),
    color: colors.dark,
  },
});
