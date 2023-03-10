import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import CustomButton from "../../Components/CustomButton";
import InputTextComponent from "../../Components/InputTextComponent";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
const SelectLocation = ({ navigation }) => {
  const DATA = [
    {
      address: "Sector 46c Chandigarh",
      imageLocation: imagePath.ic_blue_tick,
    },
    {
      address: "Sector 55, Chandigarh",
      imageLocation: imagePath.ic_blue_tick,
    },
    {
      address: "Sector 44, Chandigarh",
      imageLocation: imagePath.ic_blue_tick,
    },
    {
      address: "Sector 32c Chandigarh",
      imageLocation: imagePath.ic_blue_tick,
    },
    {
      address: "Sector 55, Chandigarh",
      imageLocation: imagePath.ic_blue_tick,
    },
    {
      address: "Sector 22, Mohali",
      imageLocation: imagePath.ic_blue_tick,
    },
  ];
  return (
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
              <InputTextComponent placeInput="Sector" />
            </View>
            <Text style={styles.enterLocationTextStyle}>
              {eng.ENTERLOCATION}
            </Text>
          </View>
          <Text style={{ ...styles.suggesstionStyle }}>{eng.SUGGESTIONS}</Text>
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatListView}>
                  <Text style={{ color: "rgba(255,255,255,1)" }}>
                    {item.address}
                  </Text>
                  <Image source={item.imageLocation} />
                </View>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          ButtonText={eng.SELECT}
          customBackgruondColor={"rgba(244,55,56,1)"}
          onPressButton={() => navigation.navigate(navigationStrings.TUTORIAL)}
        />
      </View>
    </View>
  );
};
export default SelectLocation;
