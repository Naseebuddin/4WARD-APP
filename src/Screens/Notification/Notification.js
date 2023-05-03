import { SafeAreaView, Text, View, FlatList, Image } from "react-native";
import eng from "../../constants/lang/eng";
import imagePath from "./../../constants/imagePath";
import styles from "./styles";
export default Notification = () => {
  const DATA = [
    {
      image: imagePath.adrew,
      name: eng.USERNAME,
      addPost: eng.ADDPOST,
      postTiming: eng.TIMEOFPOST,
    },
    {
      image: imagePath.adrew,
      name: eng.USERNAME,
      addPost: eng.ADDPOST,
      postTiming: eng.TIMEOFPOST,
    },
    {
      image: imagePath.adrew,
      name: eng.USERNAME,
      addPost: eng.ADDPOST,
      postTiming: eng.TIMEOFPOST,
    },
    {
      image: imagePath.adrew,
      name: eng.USERNAME,
      addPost: eng.ADDPOST,
      postTiming: eng.TIMEOFPOST,
    },
    {
      image: imagePath.adrew,
      name: eng.USERNAME,
      addPost: eng.ADDPOST,
      postTiming: eng.TIMEOFPOST,
    },
  ];
  return (
    <SafeAreaView style={styles.saveAreaViewStyleing}>
      <View style={styles.mainView}>
        <View>
          <Text style={styles.textStyling}>{eng.NOTAFICATION}</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={styles.flatListViewStyling}>
                    <Image
                      style={styles.profileImageStyling}
                      source={item.image}
                    />
                    <View>
                      <Text style={styles.userNameStyling}>
                        {item.name}
                        <Text
                          style={{ ...styles.userNameStyling, color: "white" }}
                        >
                          {item.addPost}
                        </Text>
                      </Text>
                      <Text style={styles.timeTextStyling}>
                        {item.postTiming}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.lineView}></View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
