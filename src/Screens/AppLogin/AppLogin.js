import { Text, View, Image } from "react-native";
import CustomButton from "../../Components/CustomButton";
import CustomButtonWithImage from "../../Components/CustomButtonWithImage";
import GoBack from "../../Components/GoBack";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
const AppLogin = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.secondMainView}>
        <View style={styles.secondMainView}>
          <Image style={styles.imagestyling} source={imagePath.ic_main_logo} />
          <Text style={styles.textStyling}>{eng.BYCLICKING}</Text>
          <View style={styles.buttonViewStyling}>
            <CustomButton
              ButtonText={eng.LOGININWITHPHONENUMBER}
              textColor={"rgba(255,255,255,1)"}
              customBackgruondColor={"rgba(244,55,56,1)"}
              onPressButton={()=> navigation.navigate(navigationStrings.LOGIN)}
            />
          </View>
          <View style={{ ...styles.buttonViewStyling, marginTop: 0 }}>
            <Text
              style={{
                ...styles.textStyling,
                marginTop: 16,
                color: "rgba(255,255,255,1)",
              }}
            >
              {eng.OR}
            </Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <CustomButtonWithImage
              ButtonText={eng.LOGINGOOGLE}
              customBackgruondColor={"rgba(255,255,255,1)"}
              custumImage={imagePath.ic_google}
            />
            <CustomButtonWithImage
              ButtonText={eng.LOGINFACEBOOK}
              customBackgruondColor={"rgba(255,255,255,1)"}
              custumImage={imagePath.ic_facebook}
            />
            <CustomButtonWithImage
              ButtonText={eng.LOGINAPPLE}
              customBackgruondColor={"rgba(255,255,255,1)"}
              custumImage={imagePath.ic_apple}
              onPressButton={()=>navigation.navigate(navigationStrings.SELECTLOCATIOM)}
            />
          </View>
         
        </View>
        
      </View>
      <Text style={styles.newhereText}>
            {eng.NEWHERE}<Text style={styles.signupStyle} onPress={()=> navigation.navigate(navigationStrings.SIGNUP)}>{ eng.SIGNUP}</Text>
          </Text>
    </View>
  );
};
export default AppLogin;
