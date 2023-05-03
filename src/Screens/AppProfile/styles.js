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
  componentStyling: {
    marginTop: moderateScale(10),
  },
});
