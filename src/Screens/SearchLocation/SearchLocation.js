import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import imagePath from "./../../constants/imagePath";
import InputTextComponent from "./../../Components/InputTextComponent";
import eng from "../../constants/lang/eng";
export default SearchLoaction = () => {
  const DATA = [
    {
      address: "Sector 46c Chandigarh",
    },
    {
      address: "Sector 55, Chandigarh",
    },
    {
      address: "Sector 44, Chandigarh",
    },
    {
      address: "Sector 32c Chandigarh",
    },
    {
      address: "Sector 55, Chandigarh",
    },
    {
      address: "Sector 22, Mohali",
    },
  ];
  return (
    <SafeAreaView style={styles.saveAreaViewStyle}>
      <View style={styles.mainView}>
        <View style={styles.inputViewStyling}>
          <View style={styles.inputViewStylingWidth}>
            <InputTextComponent placeInput={"Sector"} />
          </View>
          <TouchableOpacity>
            <Text style={styles.inputTextStyleing}>{eng.ENTERLOCATION}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.suggesstionStyle}>{eng.SUGGESTIONS}</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatListView}>
                  <Text style={styles.locationTextStyling}>{item.address}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
