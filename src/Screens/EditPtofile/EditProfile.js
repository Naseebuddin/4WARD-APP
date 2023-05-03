import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import GOBack from "./../../Components/GoBack";
import eng from "./../../constants/lang/eng";
import * as ImagePicker from "expo-image-picker";
import imagePath from "../../constants/imagePath";
import { useState } from "react";
import InputTextComponent from "./../../Components/InputTextComponent";
import CustomButton from "./../../Components/CustomButton";
import colors from "../../styles/colors";
export default EditProfile = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.mainView}>
        <View style={styles.gobackViewStyling}>
          <GOBack onButtonClick={() => navigation.goBack()} />
          <Text style={styles.editProfile}>{eng.EDITPROFILE}</Text>
        </View>
        <View style={styles.profileView}>
          {image && <Image source={{ uri: image }} style={styles.imageStyle} />}
          <TouchableOpacity style={styles.buttonStyling} onPress={pickImage}>
            <Image source={imagePath.ic_edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputViewsStyling}>
          <View style={styles.inputViewStyling}>
            <View style={styles.inputNamestyling}>
              <InputTextComponent placeInput={eng.FIRSTNAME} />
            </View>
            <View style={styles.inputNamestyling}>
              <InputTextComponent placeInput={eng.LASTNAME} />
            </View>
          </View>
          <View style={styles.inputEmialStyling}>
            <InputTextComponent placeInput={eng.EMAIL} />
          </View>
          <View>
            <View style={styles.CountryNoView}>
              <View style={{ ...styles.countryCodeStyle }}>
                <Image source={imagePath.ic_flag} />
                <Text style={styles.countryTextColor}>{eng.ONEPLUS}</Text>
                <TouchableOpacity>
                  <Image source={imagePath.ic_down} />
                </TouchableOpacity>
              </View>
              <View style={styles.mobileNoView}>
                <InputTextComponent placeInput={eng.MOBILENO} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonStylingClick}>
          <CustomButton
            ButtonText={eng.SAVEANDCHANGE}
            customBackgruondColor={colors.red}
            textColor={colors.white}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
