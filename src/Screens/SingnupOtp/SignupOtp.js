import { Text, View } from "react-native";
import CustomButton from "../../Components/CustomButton";
import GoBack from "../../Components/GoBack";
import InputTextComponent from "../../Components/InputTextComponent";
import eng from "../../constants/lang/eng";
import { useState ,useEffect} from "react";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
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
            <InputTextComponent placeInput="8" />
          </View>
          <View style={{ ...styles.otpStyle }}>
            <InputTextComponent placeInput="8" />
          </View>
          <View style={styles.otpStyle}>
            <InputTextComponent placeInput="8" />
          </View>
          <View style={styles.otpStyle}>
            <InputTextComponent placeInput="8" />
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
          textColor={"rgba(255,255,255,1)"}
          customBackgruondColor={'rgba(244,55,56,1)'}
          onPressButton={() =>
            navigation.navigate(navigationStrings.SETPASSWORD)
          }
        />
      </View>
    </View>
  );
};
export default SignupOtp;
