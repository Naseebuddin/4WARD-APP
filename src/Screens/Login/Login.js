import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";
import GoBack from "./../../Components/GoBack";
import eng from "../../constants/lang/eng";
import CountryPicker from "react-native-country-picker-modal";
import InputTextComponent from "./../../Components/InputTextComponent";
import { useState } from "react";
import imagePath from "../../constants/imagePath";
import CustomButton from "../../Components/CustomButton";
import { scale, verticalScale } from "react-native-size-matters";
import navigationStrings from "../../constants/navigationStrings";
const Login = ({ navigation }) => {
  const [passwordShow, setPasswordShow] = useState(true);
  const passwordCheck = () => {
    setPasswordShow(false);
  };

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.secondMainView}>
      <GoBack onButtonClick={() => navigation.goBack()} />
      <View style={styles.viewNoTwo}>
        <Text style={styles.welcomeStyle}>{eng.WELCOME}</Text>
        <Text style={styles.WeAreTextStyle}>{eng.WEAREHAPPY}</Text>
      </View>
      {/* <CountryPicker/> */}
      <View style={styles.CountryNoView}>
        <View style={{ ...styles.countryCodeStyle }}>
          <Image source={imagePath.ic_flag} />
          <Text style={styles.countryTextColor}>{eng.ONEPLUS}</Text>
          <TouchableOpacity>
            <Image source={imagePath.ic_down} />
          </TouchableOpacity>
        </View>
        <View style={styles.mobileNoView}>
          <InputTextComponent
            placeInput={eng.MOBILENO}
            inputWidth={207}
            topMargin={32}
            keyboardTypeOfInput={"numeric"}
          />
        </View>
      </View>
      <View style={styles.PasswordViewStyle}>
        <InputTextComponent
          placeInput={eng.PASSWORD}
          keyboardTypeOfInput={"default"}
          textType={passwordShow}
        />
        <TouchableOpacity onPress={passwordCheck}>
        <Text style={styles.showTextColor} >
          {eng.SHOW}
        </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.useOtpStyle}>
        <Text style={styles.useOTPText}>{eng.USEOTP}</Text>
        <Text style={styles.FORGETPASSWORD}>{eng.FORGETPASSWORD}</Text>
      </View>

      </View>
      <View style={style.buttonView}>
        <CustomButton
          ButtonText={eng.LOGIN}
          textColor={"rgba(255,255,255,1)"}
          customBackgruondColor={'rgba(244,55,56,1)'}
        topMargine={verticalScale(88)}
        onPressButton={()=> navigation.navigate(navigationStrings.SIGNUP)}
        />
      </View>
    </View>
  );
};
export default Login;
