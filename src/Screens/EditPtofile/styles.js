import {
  moderateScale,
  moderateVerticalScale,
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
    marginLeft: moderateScale(20),
    marginTop: moderateVerticalScale(1),
  },
  editProfile: {
    marginTop: moderateScale(4),
    fontSize: 16,
    color: colors.white,
    fontWeight: "600",
    marginLeft: 16,
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
  imageGalleryViewStyling: {
    flexDirection: "row",
    marginLeft: moderateScale(24),
    marginTop: moderateVerticalScale(16),
  },
  imageStyle: {
    height: verticalScale(100),
    width: scale(100),
    borderRadius: moderateScale(80),
  },
  buttonStyling: {
    marginLeft: moderateScale(80),
    marginTop: moderateVerticalScale(-16),
  },
  profileView: {
    marginTop: moderateVerticalScale(42),
    alignSelf: "center",
    width: scale(100),
    height: verticalScale(100),
    backgroundColor: colors.darkBackground,
  },
  inputViewsStyling: {
    marginTop: moderateVerticalScale(52),
    marginLeft: moderateScale(24),
  },
  inputViewStyling: {
    flexDirection: "row",
  },
  inputNamestyling: {
    height: verticalScale(48),
    width: scale(148),
    backgroundColor: colors.dark,
    borderRadius: moderateScale(8),
    justifyContent: "center",
    paddingLeft: moderateScale(16),
    marginRight: moderateScale(16),
  },
  inputEmialStyling: {
    height: verticalScale(48),
    backgroundColor: colors.dark,
    width: scale(312),
    marginTop: moderateVerticalScale(16),
    paddingLeft: moderateScale(16),
    justifyContent: "center",
    borderRadius: moderateScale(8),
  },
  CountryNoView: {
    flexDirection: "row",
  },
  countryCodeStyle: {
    marginTop: moderateScale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(48),
    width: scale(104),
    paddingHorizontal: moderateScale(19),
    borderRadius: moderateScale(8),
    backgroundColor: colors.dark,
  },
  countryTextColor: {
    color: colors.white,
  },
  mobileNoView: {
    marginTop: moderateScale(16),
    backgroundColor: colors.dark,
    height: verticalScale(48),
    borderRadius: moderateScale(8),
    marginLeft: moderateScale(16),
    paddingHorizontal: moderateScale(16),
    paddingLeft: moderateScale(16),
    width: scale(194),
    justifyContent: "center",
  },
  buttonStylingClick: {
    marginTop: moderateVerticalScale(150),
    marginLeft: moderateScale(5),
  },
});
