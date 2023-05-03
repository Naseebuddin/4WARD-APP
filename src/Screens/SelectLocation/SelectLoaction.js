import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import CustomButton from "../../Components/CustomButton";
import InputTextComponent from "../../Components/InputTextComponent";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import navigationStrings from "../../constants/navigationStrings";
import StateSet from "../../redux/actions/action";
import colors from "../../styles/colors";
import styles from "./styles";
const SelectLocation = ({ navigation }) => {
  const DATA = [
    {
      id:1,
      address: "Sector 46c Chandigarh",
      imageLocation: imagePath.ic_grey_tick,
    },
    {
      id:2,
      address: "Sector 55, Chandigarh",
      imageLocation: imagePath.ic_grey_tick,
    },
    {
      id:3,
      address: "Sector 44, Chandigarh",
      imageLocation: imagePath.ic_grey_tick,
    },
    {
      id:4,
      address: "Sector 32c Chandigarh",
      imageLocation: imagePath.ic_grey_tick,
    },
    {
      id:5,
      address: "Sector 55, Chandigarh",
      imageLocation: imagePath.ic_grey_tick,
    },
    {
      id:6,
      address: "Sector 22, Mohali",
      imageLocation: imagePath.ic_grey_tick,
    },
  ];
  const [selectLocation, setSelectLocation] = useState({ DATA });

  const selectItem = (id) => {
    let copyArray = DATA.map((value) => {
      if (value.id == id) {
        return { ...value, imageLocation: imagePath.ic_blue_tick };
      } else {
        return value;
      }
    });
    setSelectLocation({ DATA: copyArray });
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.mainView}>
        <View>
          <View style={styles.textView}>
            <Text style={styles.textDeviceStyling}>{eng.DEVICELOCATION}</Text>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.butttonTextstyle}>{eng.TURNON}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.turningTextView}>
            <Text style={styles.turningTextStyle}>{eng.TURNONDEVICE}</Text>
            <Text style={styles.orTextStyle}>{eng.OR}</Text>
            <View style={styles.inputLocationView}>
              <View style={styles.inputComStyle}>
                <InputTextComponent
                  lengthOfInputs={40}
                  placeInput={eng.SECTOR}
                />
              </View>
              <View>
                <Text style={styles.enterLocationTextStyle}>
                  {eng.ENTERLOCATION}
                </Text>
              </View>
            </View>
            <Text style={{ ...styles.suggesstionStyle }}>
              {eng.SUGGESTIONS}
            </Text>
          </View>
          <View>
            <FlatList
              data={selectLocation.DATA}
              renderItem={({ item }) => {
                return (
                  <View style={styles.flatListView}>
                    <TouchableOpacity
                      style={{...styles.flatListStyle,justifyContent:'space-between'}}
                      onPress={() => selectItem(item.id)}
                    >
                      <Text style={styles.locationTextStyling}>
                        {item.address}
                      </Text>
                      <Image  source={item.imageLocation} />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            ButtonText={eng.SELECT}
            customBackgruondColor={colors.red}
            textColor={colors.white}
            onPressButton={() => StateSet(true)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SelectLocation;
