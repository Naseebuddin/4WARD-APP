import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  s,
  scale,
  verticalScale,
} from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.darkBackground,
    flex: 1,
  },
  gobackViewStylingh: {
    flexDirection: "row",
  },
  addInfoTextStyling: {
    color: colors.white,
    fontSize: 16,
    marginLeft: moderateScale(12),
    marginTop: moderateScale(5),
    fontWeight: 600,
  },
  buttonStyling: {
    height: verticalScale(64),
    width: scale(64),
    backgroundColor: colors.dark,
    borderRadius: moderateScale(8),
    alignItems: "center",
    justifyContent: "center",
  },
  imageGalleryViewStyling: {
    flexDirection: "row",
    marginLeft: moderateScale(24),
    marginTop: moderateVerticalScale(16),
  },
  imageStyle: {
    height: verticalScale(64),
    width: scale(64),
    borderRadius: 8,
    marginRight: moderateScale(16),
  },
  mainInputStyling: {
    marginTop: moderateVerticalScale(16),
    height: verticalScale(40),
    width: scale(310),
    marginHorizontal: moderateScale(24),
    backgroundColor: colors.dark,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateVerticalScale(8),
  },
  addLocatIonView: {
    height: verticalScale(40),
    width: scale(310),
    backgroundColor: colors.dark,
    borderRadius: moderateScale(8),
    marginTop: moderateVerticalScale(16),
    marginHorizontal: moderateScale(24),
    paddingHorizontal: moderateScale(16),
    justifyContent: "center",
  },
});
