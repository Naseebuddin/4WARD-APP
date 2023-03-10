import { Text, View, Image, TouchableOpacity } from "react-native";
import CustomButton from "../../Components/CustomButton";
import GoBack from "../../Components/GoBack";
import InputTextComponent from "../../Components/InputTextComponent";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
const Signup = ({ navigation }) => {
  return (
    <View style={{ ...styles.mainView }}>
      <View style={styles.secondMainView}>

      
      <View >
        <GoBack onButtonClick={() => navigation.goBack()} />
      </View>
      <View>
        <Text style={styles.createTextStyle}>{eng.CREATECCOUNT}</Text>
        <Text style={styles.createContinueTextStyle}>
          {eng.CREATEACCOUNTCONTINUE}
        </Text>
      </View>
      <View style={styles.viewOfName}>
        <View style={styles.viewOfFirstName}>
          <InputTextComponent placeInput={eng.FIRSTNAME} />
        </View>
        <View style={{ ...styles.viewOfFirstName, width: 176, marginLeft: 14 }}>
          <InputTextComponent placeInput={eng.LASTNAME} />
        </View>
      </View>
      <View style={styles.emailView}>
        <InputTextComponent
          placeInput={eng.EMAIL}
          keyboardTypeOfInput={"email-address"}
        />
      </View>
      <View style={styles.mobileNoView}>
        <View style={{ ...styles.countryCodeStyle }}>
          <Image source={imagePath.ic_flag} />
          <Text style={styles.countryTextColor}>{eng.ONEPLUS}</Text>
          <TouchableOpacity>
            <Image source={imagePath.ic_down} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputMobileNoStyle}>
          <InputTextComponent
            placeInput={eng.MOBILENO}
            keyboardTypeOfInput={"number-pad"}
          />
        </View>
      </View>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          topMargine={72}
          ButtonText={eng.NEXT}
          textColor={"rgba(255,255,255,1)"}
          customBackgruondColor={'rgba(244,55,56,1)'}
          onPressButton={() => navigation.navigate(navigationStrings.SIGNUPOTP)}
        />
      </View>
    </View>
  );
};
export default Signup;
