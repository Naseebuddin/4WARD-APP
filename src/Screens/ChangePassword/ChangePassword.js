import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import GOBack from "./../../Components/GoBack";
import eng from "../../constants/lang/eng";
import CustomButton from "./../../Components/CustomButton";
import InputTextComponent from "./../../Components/InputTextComponent";
import { useState } from "react";
import colors from "../../styles/colors";
export default ChangePassword = ({ navigation }) => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [showText, setShowText] = useState(eng.SHOW);
  const [passwordShowTwo, setPasswordShowTwo] = useState(true);
  const [showTextTwo, setShowTextTwo] = useState(eng.SHOW);
  const onClick = () => {
    if (passwordShow == true) {
      setPasswordShow(false);
      setShowText(eng.HIDE);
      return;
    } else if (passwordShow == false) {
      setPasswordShow(true);
      setShowText(eng.SHOW);
      return;
    }
  };
  const onClickTwo = () => {
    if (passwordShowTwo == true) {
      setPasswordShowTwo(false);
      setShowTextTwo(eng.HIDE);
      return;
    } else if (passwordShowTwo == false) {
      setPasswordShowTwo(true);
      setShowTextTwo(eng.SHOW);
      return;
    }
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.mainView}>
        <View style={styles.gobackViewStyling}>
          <GOBack onButtonClick={() => navigation.goBack()} />
          <Text style={styles.changePasswordTextstyle}>
            {eng.CHANGEPASSWORD}
          </Text>
        </View>
        <View>
          <View style={styles.inputStyleing}>
            <View style={styles.inputWidth}>
              <InputTextComponent
                placeInput={eng.PASSWORD}
                lengthOfInputs={12}
                textType={passwordShow}
              />
            </View>
            <TouchableOpacity onPress={onClick}>
              <Text style={styles.textStyling}>{showText}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputStyleing}>
            <View style={styles.inputWidth}>
              <InputTextComponent
                textType={passwordShowTwo}
                lengthOfInputs={12}
                placeInput={eng.CONFIRMPASSWORD}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.textStyling} onPress={onClickTwo}>
                {showTextTwo}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <CustomButton
              ButtonText={eng.SAVE}
              customBackgruondColor={colors.red}
              textColor={colors.white}
              topMargine={445}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
