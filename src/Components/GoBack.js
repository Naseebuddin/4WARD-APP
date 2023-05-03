import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
const GoBack = ({ onButtonClick }) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={onButtonClick}>
        <Image source={imagePath.ic_back_arrow} />
      </TouchableOpacity>
    </View>
  );
};
export default GoBack;
const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    marginLeft: 24,
  },
});
