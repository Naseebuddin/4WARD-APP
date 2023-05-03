import { StyleSheet } from "react-native";
import {
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import colors from "../../styles/colors";
export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.darkBackground,
    flex: 1,
  },
  mainIconView: {
    paddingBottom: moderateScale(24),
    flexDirection: "row",
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(8),
    justifyContent: "space-between",
  },
  flatlistMainView: {
    height: verticalScale(480),
    width: scale(328),
    backgroundColor: colors.dark,
    borderRadius: moderateScale(8),
    alignSelf: "center",
    marginTop: moderateScale(24),
    
    
  },
  profileView: {
    flexDirection: "row",
    padding: moderateScale(16),
  },
  profileNameView: {
    marginLeft: moderateScale(16),
  },
  profileNameTextStyling: {
    fontSize:moderateScale( 16),
    lineHeight: moderateScale(16),
    color: colors.white,
  },
  profileLocationTextStyling: {
    color: colors.darkSilver,
    fontSize:moderateScale (13),
    lineHeight: moderateScale(16),
  },
  dotImageStyle: {
    marginLeft: moderateScale(120),
    marginTop: moderateScale(16),
  },
  profileImageStyling:{
height:38,
width:38,
borderRadius:100,
resizeMode:'stretch'
  },

  postImageStyling: {
    height: verticalScale(312),
    width: scale(312),
    resizeMode:'stretch',
    marginHorizontal: moderateScale(8),
  },
  postDiscriptionStyling: {
    color: colors.white,
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
  },
  textTimingStyling: {
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(8),
    color: colors.mySliverNine,
  },
  postLinkeNdCommintStyling: {
    flexDirection: "row",
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
  },
  commentTextStyling: {
    color: colors.white,
    fontSize: moderateScale(15),
    marginRight: moderateScale(16),
  },
  arrowDirection: {
    marginLeft: moderateScale(70),

  },
  
});
