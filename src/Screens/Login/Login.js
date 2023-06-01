import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import GoBack from "./../../Components/GoBack";
import eng from "../../constants/lang/eng";
import InputTextComponent from "./../../Components/InputTextComponent";
import { useState } from "react";
import imagePath from "../../constants/imagePath";
import CustomButton from "../../Components/CustomButton";
import { verticalScale } from "react-native-size-matters";
import colors from "../../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import navigationStrings from "../../constants/navigationStrings";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Login = ({ navigation }) => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [hideText, setHideText] = useState(eng.SHOW);
  const passwordCheck = () => {
    if (passwordShow == true) {
      setPasswordShow(false);
      setHideText(eng.HIDE);
      return;
    } else if (passwordShow == false) {
      setPasswordShow(true);
      setHideText(eng.SHOW);
      return;
    }
  };
  const [number, setNumber] = useState("");
  const inputNumberValidation = (val) => {
    if (val.match("^[0-9]*$")) {
      setNumber(val);
    }
  };
  return (
    <SafeAreaView style={styles.mainViewStyle}>
      <KeyboardAwareScrollView>
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
                  autoFocusOnKeyboard={true}
                  placeInput={eng.MOBILENO}
                  inputWidth={207}
                  topMargin={32}
                  lengthOfInputs={10}
                  keyboardTypeOfInput={"numeric"}
                  onChangeTextValue={inputNumberValidation}
                  myValueToAdd={number}
                />
              </View>
            </View>
            <View style={styles.PasswordViewStyle}>
              <View style={styles.passwordInputStyle}>
                <InputTextComponent
                  placeInput={eng.PASSWORD}
                  keyboardTypeOfInput={"default"}
                  textType={passwordShow}
                />
              </View>
              <TouchableOpacity onPress={passwordCheck}>
                <Text style={styles.showTextColor}>{hideText}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.useOtpStyle}>
              <Text style={styles.useOTPText}>{eng.USEOTP}</Text>
              <TouchableOpacity>
                <Text style={styles.FORGETPASSWORD}>{eng.FORGETPASSWORD}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonView}>
            <CustomButton
              ButtonText={eng.LOGIN}
              textColor={colors.white}
              customBackgruondColor={colors.red}
              topMargine={verticalScale(88)}
              onPressButton={() => {
                navigation.navigate(navigationStrings.SELECTLOCATIOM)
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>

    </SafeAreaView>
  );
};
export default Login;
const setItemData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("error raised during compile", e);
  }
};
