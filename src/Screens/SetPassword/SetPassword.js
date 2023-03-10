import { Text, TouchableOpacity, View } from "react-native";
import GoBack from "./../../Components/GoBack";
import styles from "./styles";
import eng from "../../constants/lang/eng";
import InputTextComponent from "./../../Components/InputTextComponent";
import { useState } from "react";
import CustomButton from "../../Components/CustomButton";
import navigationStrings from "../../constants/navigationStrings";
const SetPassword = ({ navigation }) => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [confirmPass, setConfirmPass] = useState(true);
  const clickShow = () => {
    setPasswordShow(false);
  };
  const clickConfirmPass = () => {
    setConfirmPass(false);
  };
  return (
    <View style={styles.mainView}>
        <View style={{flex:0.8}}>
      <View>
        <GoBack onButtonClick={() => navigation.goBack()} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{eng.SETPASSWORD}</Text>
        <Text style={styles.textCreatePasswordStyle}>{eng.CREATESECURE}</Text>
      </View>
      <View style={styles.inputView}>
        <InputTextComponent placeInput={eng.PASSWORD} textType={passwordShow} />
        <TouchableOpacity onPress={clickShow}>
          <Text>{eng.SHOW}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.inputView, marginTop: 16 }}>
        <InputTextComponent
          placeInput={eng.CONFIRMPASSWORD}
          textType={confirmPass}
        />
        <TouchableOpacity onPress={clickConfirmPass}>
          <Text>{eng.SHOW}</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.buttonStyle}>
        <CustomButton
          ButtonText={eng.GETSTARTED}
          topMargine={136}
          textColor={"rgba(255,255,255,1)"}
          customBackgruondColor={'rgba(244,55,56,1)'}
          onPressButton={() => navigation.navigate(navigationStrings.APPLOGIN)}
        />
      </View>
    </View>
  );
};
export default SetPassword;
