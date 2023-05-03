import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {Linking} from 'react-native';
import imagePath from "./../../constants/imagePath";
import eng from "../../constants/lang/eng";
import CustomButton from "./../../Components/CustomButton";
import colors from "../../styles/colors";
const ViewMap = ({ navigation, route }) => {

  const item = route?.params?.item
  console.log('item', item)
  console.log(item.postImage)
  return (
    <ImageBackground style={{ flex: 1 }}
      source={{ uri: item?.postImage }}
    >
      <View style={styles.mainView}>
        <View style={styles.TopProfileview}>
          <Image style={styles.profileImageStyling} source={{ uri: item.postImage }} />
          <View>
            <Text style={styles.prfileTextStyleing}>{item.name}</Text>
            <TouchableOpacity>
              <Text style={styles.locationText}>{item.locationOfPost}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.iconeCrossStyling}
              source={imagePath.ic_cross}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.postDiscripViewStyling}>
          <Text style={styles.postDiscripTextStyling}>
            {item.description}
          </Text>
          <Text style={styles.postDiscripTextStyling}>{item.postTiming}</Text>
        </View>
        <View>
          <CustomButton
            customBackgruondColor={colors.red}
            ButtonText={"View Map"}
            textColor={colors.white}
            topMargine={16}
            onPressButton={()=>Linking.openURL('maps://app?saddr=100+101&daddr=100+102')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default ViewMap;
