import { Text, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import GoBack from "../../Components/GoBack";
import InputTextComponent from "../../Components/InputTextComponent";
import eng from "../../constants/lang/eng";
import { useState, useEffect } from "react";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from "react-native";
import colors from "../../styles/colors";
const SignupOtp = ({ navigation }) => {
  const [count, setCount] = useState(30);
  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [count]);
  return (
    <SafeAreaView style={styles.mainView}>
      <KeyboardAwareScrollView>
      <View style={styles.mainView}>
        <View style={styles.secondMainView}>
          <View>
            <GoBack onButtonClick={() => navigation.goBack()} />
          </View>
          <View>
            <Text style={styles.enterDigitTextStyle}>{eng.ENTERTHEDIGIT}</Text>
            <Text style={styles.editNumberTextStyle}>{eng.EDITNUMBER}</Text>
          </View>
          <View style={styles.OtpView}>
            <View style={styles.otpStyle}>
              <InputTextComponent placeInput="8"
               lengthOfInputs={1}
              autoFocusOnKeyboard={true} />
            </View>
            <View style={{ ...styles.otpStyle }}>
              <InputTextComponent placeInput="8"
              lengthOfInputs={1}
              />
            </View>
            <View style={styles.otpStyle}>
              <InputTextComponent placeInput="8" 
               lengthOfInputs={1}/>
            </View>
            <View style={styles.otpStyle}>
              <InputTextComponent placeInput="8" 
               lengthOfInputs={1}/>
            </View>
          </View>
          <View>
            <Text style={styles.resendText}>
              {eng.RESENDOTP}
              {count}
            </Text>
          </View>
        </View> 
        <View style={styles.buttonViewStyle}>
          <CustomButton
            ButtonText={eng.VERIFY}
            textColor={colors.white}
            customBackgruondColor={colors.red}
            onPressButton={() =>
              navigation.navigate(navigationStrings.SETPASSWORD)
            }
          />
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default SignupOtp;
