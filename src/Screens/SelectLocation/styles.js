import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
export default StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:'rgba(46,46,46,1)'
    },
    allTextView:{

        flex:0.9
    },
    textView:{
        marginHorizontal:moderateScale(24),
        flexDirection:'row',
        marginTop:moderateScale(16)
    },
    textDeviceStyling:{
        color:'rgba(255,255,255,1)',
        fontSize:24,
        fontWeight:600,
        lineHeight: 32,
    },
    buttonStyle:{
        borderRadius:8,
        height:verticalScale(32),
        width:scale(80),
        backgroundColor:'rgba(244,55,56,1)',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:moderateScale(24)
        
    },
    butttonTextstyle:{
        color:'rgba(255,255,255,1)',
        lineHeight:14,
        fontSize:12,
        fontWeight:'bold',
    },
    turningTextView:{
        marginLeft:moderateScale(24),
        marginRight:moderateScale(103)

    },
    turningTextStyle:{
        color:'rgba(199,200,199,1)',
        lineHeight:20
    },
    orTextStyle:{
        color:'rgba(255,255,255,1)',
        alignSelf:'center',
        marginTop:moderateScale(16),
        marginLeft:moderateScale(65),
        fontSize:16,
        lineHeight:20
      },
      inputLocationView:{
        flexDirection:'row',
        borderRadius:moderateScale(8),
        backgroundColor:'rgba(76,76,76,1)',
        height:verticalScale(48),
        width:scale(310),
        alignItems:'center',
        marginTop:moderateScale(16)
      },
      inputComStyle:{
        marginHorizontal:20
      },
      enterLocationTextStyle:{
        color:' rgba(165,165,165,1)',
        marginLeft:moderateScale(95)
      },
      suggesstionStyle:{
        color:'rgba(255,255,255,1)',
        fontSize:15,
        fontWeight:600,
        marginTop:moderateScale(16)
      },
      flatListView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:moderateScale(24),
        paddingTop:moderateScale(24)
      },
      buttonView:{
        flex:0.1,
        marginTop:moderateScale(170)
      }
    
})