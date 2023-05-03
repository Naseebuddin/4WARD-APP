import { Text, View, Image, SafeAreaView } from "react-native";
import CustomButton from "../../Components/CustomButton";
import CustomButtonWithImage from "../../Components/CustomButtonWithImage";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import navigationStrings from "../../constants/navigationStrings";
import colors from "../../styles/colors";
import styles from "./styles";
import { Linking } from 'react-native';
const AppLogin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.mainView}>
        <View style={styles.secondMainView}>
          <View style={styles.secondMainView}>
            <Image
              style={styles.imagestyling}
              source={imagePath.ic_main_logo}
            />
            <Text style={styles.textStyling}>{eng.BYCLICKING}</Text>
            <View style={styles.buttonViewStyling}>
              <CustomButton
                ButtonText={eng.LOGININWITHPHONENUMBER}
                textColor={colors.white}
                customBackgruondColor={colors.red}
                onPressButton={() =>
                  navigation.navigate(navigationStrings.LOGIN)
                }
              />
            </View>
            <View style={{ ...styles.buttonViewStyling, marginTop: 0 }}>
              <Text
                style={{
                  ...styles.textStyling,
                  marginTop: 16,
                  color: colors.white,
                }}
              >
                {eng.OR}
              </Text>
            </View>
            <View style={{ marginTop: 6 }}>
              <CustomButtonWithImage
                ButtonText={eng.LOGINGOOGLE}
              onPressButton={() => Linking.openURL('https://accounts.google.com/v3/signin/identifier?dsh=S269028176%3A1682071975032952&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession')}
                customBackgruondColor={colors.white}
                custumImage={imagePath.ic_google}
              />
              <CustomButtonWithImage
                ButtonText={eng.LOGINFACEBOOK}
                customBackgruondColor={colors.white}
                custumImage={imagePath.ic_facebook}
                onPressButton={() => Linking.openURL('https://www.facebook.com/')}
              />
              <CustomButtonWithImage
                ButtonText={eng.LOGINAPPLE}
                customBackgruondColor={colors.white}
                custumImage={imagePath.ic_apple}
                onPressButton={() =>Linking.openURL('https://www.icloud.com/?s=Iseo') }
                  
                
              />
            </View>
          </View>
        </View>
        <Text style={styles.newhereText}>
          {eng.NEWHERE}
          <Text
            style={styles.signupStyle}
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
          >
            {eng.SIGNUP}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default AppLogin;
