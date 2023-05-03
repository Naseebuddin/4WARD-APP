import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import GoBack from "./../../Components/GoBack";
import styles from "./styles";
import eng from "../../constants/lang/eng";
import InputTextComponent from "./../../Components/InputTextComponent";
import { useState } from "react";
import CustomButton from "../../Components/CustomButton";
import navigationStrings from "../../constants/navigationStrings";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import colors from "../../styles/colors";
const SetPassword = ({ navigation }) => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [confirmPass, setConfirmPass] = useState(true);
  const [show, setHide] = useState(eng.HIDE);
  const [showPasswordTwo, setPasswordShowTwo] = useState(eng.HIDE);
  const clickShow = () => {
    if (passwordShow == true) {
      setPasswordShow(false);
      setHide(eng.SHOW);
      return;
    } else if (passwordShow == false) {
      setPasswordShow(true);
      setHide(eng.HIDE);
      return;
    }
  };
  const clickShowTwo = () => {
    if (confirmPass == true) {
      setConfirmPass(false);
      setPasswordShowTwo(eng.SHOW);
      return;
    } else if (confirmPass == false) {
      setConfirmPass(true);
      setPasswordShowTwo(eng.HIDE);
      return;
    }
  };
  const clickConfirmPassTwo = () => {
    if (confirmPass == true) {
      setConfirmPass(false);
      setPasswordShowTwo(eng.SHOW);
      return;
    } else if (confirmPass == false) {
      setConfirmPass(true);
      setPasswordShowTwo(eng.HIDE);
      return;
    }
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <KeyboardAwareScrollView>
             <View style={styles.mainView}>
        <View style={{ flex: 0.8 }}>
          <View>
            <GoBack onButtonClick={() => navigation.goBack()} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.textStyle}>{eng.SETPASSWORD}</Text>
            <Text style={styles.textCreatePasswordStyle}>
              {eng.CREATESECURE}
            </Text>
          </View>
          <View style={styles.inputView}>
            <View style={styles.passwordInputStyle}>
              <InputTextComponent
                placeInput={eng.PASSWORD}
                textType={passwordShow}
              />
            </View>
            <TouchableOpacity onPress={clickShow}>
              <Text style={styles.inputShowTextStyling}>{show}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.inputView, marginTop: 16 }}>
            <View style={styles.passwordInputStyle}>
              <InputTextComponent
                placeInput={eng.CONFIRMPASSWORD}
                textType={confirmPass}
              />
            </View>
            <TouchableOpacity onPress={clickShowTwo}>
              <Text style={styles.inputShowTextStyling}>{showPasswordTwo}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonStyle}>
          <CustomButton
            ButtonText={eng.GETSTARTED}
            topMargine={136}
            textColor={colors.white}
            customBackgruondColor={colors.red}
            onPressButton={() =>
              navigation.navigate(navigationStrings.SELECTLOCATIOM)
            }
          />
        </View>
      </View>
      </KeyboardAwareScrollView>
 
    </SafeAreaView>
  );
};
export default SetPassword;
