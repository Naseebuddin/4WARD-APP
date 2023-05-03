import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import CustomButton from "../../Components/CustomButton";
import GoBack from "../../Components/GoBack";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputTextComponent from "../../Components/InputTextComponent";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
import { useState } from "react";
import colors from "../../styles/colors";
const Signup = ({ navigation }) => {

  const [textInputName, settextInputName] = useState("");
  const [textInputLastName,setTextInputLastName] = useState("");
  const [textInputEmail, setTextInputEmial] = useState("");
  const [number, setNumber] = useState("");
  const inputNameValidation =(val) =>{
    if(val.match("^[A-Za-z_-]*$")){
      settextInputName(val)
    }
  }
  const inputLastNameValidation = (val) =>{
    if(val.match("^[A-Za-z_-]*$")){
      setTextInputLastName(val)
    }
  }
  const inputNumberValidation = (val) =>{
    if(val.match("^[0-9]*$")){
      setNumber(val)
    }
  }
  const inputEmailValidation = (val) =>{
    setTextInputEmial(val)
  }
  function validation() {
    var emailFormatCheckr =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      textInputName == "" ||
      textInputLastName == "" ||
      number == "" ||
      !textInputEmail.match(emailFormatCheckr)
    ) {
      alert("Fill your details properly !");
    } 
    else
    navigation.navigate(navigationStrings.SIGNUPOTP);

  }
  return (
    <SafeAreaView style={styles.mainView}>
      <KeyboardAwareScrollView>
      <View style={{ ...styles.mainView }}>
        <View style={styles.secondMainView}>
          <View>
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
              <InputTextComponent
                lengthOfInputs={20}
                placeInput={eng.FIRSTNAME}
                onChangeTextValue={inputNameValidation}
                myValueToAdd={textInputName}

              />
            </View>
            <View
              style={{ ...styles.viewOfFirstName, width: 176, marginLeft: 14 }}
            >
              <InputTextComponent
                lengthOfInputs={20}
                placeInput={eng.LASTNAME}
                onChangeTextValue={inputLastNameValidation}
                myValueToAdd={textInputLastName}
              />
            </View>
          </View>
          <View style={styles.emailView}>
            <InputTextComponent
              lengthOfInputs={20}
              placeInput={eng.EMAIL}
              keyboardTypeOfInput={"email-address"}
              onChangeTextValue={inputEmailValidation}
              myValueToAdd={textInputEmail}
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
                lengthOfInputs={10}
                keyboardTypeOfInput={"number-pad"}
                onChangeTextValue={inputNumberValidation}
                myValueToAdd={number}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            topMargine={305}
            ButtonText={eng.NEXT}
            textColor={colors.white}
            customBackgruondColor={colors.red}
            onPressButton={() =>validation()
            }
          />
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Signup;
