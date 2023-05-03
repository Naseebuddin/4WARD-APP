import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  mainView: {
    flex: 1,
  },
  TopProfileview: {
    marginTop: 48,
    marginHorizontal: moderateScale(24),
    flexDirection: "row",
  },
  profileImageStyling: {
    height: verticalScale(40),
    width: scale(40),
    borderRadius: 40,
  },
  prfileTextStyleing: {
    color: colors.white,
    marginTop: moderateScale(10),
    marginLeft: moderateScale(16),
    fontSize: 16,
  },
  locationText: {
    fontSize: 13,
    color: colors.white,
    marginLeft: moderateScale(16),
  },
  iconeCrossStyling: {
    marginTop: moderateScale(16),
    marginLeft: moderateScale(95),
  },
  postDiscripViewStyling: {
    marginTop: moderateScale(552),
    color: colors.white,
    marginHorizontal: moderateScale(24),
  },
  postDiscripTextStyling: {
    color: colors.white,
    marginTop: moderateScale(8),
  },
});
