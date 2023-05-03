import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  saveAreaViewStyle: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  inputViewStyling: {
    height: verticalScale(48),
    width: scale(315),
    backgroundColor: colors.dark,
    borderRadius: moderateScale(8),
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(20),
    paddingHorizontal: moderateScale(16),
    alignItems: "center",
    marginTop: moderateScale(8),
  },
  inputViewStylingWidth: {
    width: 150,
  },
  inputTextStyleing: {
    color: colors.silverFiveOne,
    fontSize: 14,
  },
  flatListView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(24),
    paddingTop: moderateScale(24),
  },
  locationTextStyling: {
    color: colors.silverOneNineNine,
    fontSize: 15,
  },
  suggesstionStyle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 600,
    marginTop: moderateScale(16),
    marginHorizontal: moderateScale(24),
  },
});
