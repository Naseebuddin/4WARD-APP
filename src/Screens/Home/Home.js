import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { Linking } from 'react-native';
import { firebase } from "../firebase/config";
const Home = ({ navigation, name, locationOfPost, postImage, }) => {
  const [user, setUser] = useState([]);
  const taskRef = firebase.firestore().collection('tasks');
 
  useEffect(() => {
    taskRef.onSnapshot((querySnapshot) => {
      const user = [];
      querySnapshot.forEach((doc) => {
        const { name, InternShip, postImage, profileIcone, postTiming, 
          comments, likes, locationOfPost, description } = doc.data();
        user.push({
          id: doc.id,
          name: name,
          InternShip,
          postImage,
          profileIcone,
          postTiming,
          comments,
          likes,
          locationOfPost,
          description,
        })
      });
      setUser(user)
    })
  }, []);
  const [like, setLike] = useState(2342),[isLike, setIsLike] = useState(false);
  const [stateChange, setStateChange] = useState(true);
  const onClickButton = () =>{
    if(stateChange == true){
      setStateChange(false);
      setLike(like + (isLike ? -1 :1));
      setIsLike(!isLike);
      return     
    }

    if(stateChange == false) {
      setStateChange(true);
      setLike(like+(isLike ? -1 : 1));
      setIsLike(!isLike);
      return
    }
  }
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.mainView}>
        <View style={styles.mainIconView}>
          <Image source={imagePath.ic_home_icon} />
          <TouchableOpacity onPress={() => Linking.openURL('maps://app?saddr=100+101&daddr=100+102')}>
            <Image source={imagePath.ic_loc} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 135 }}
            data={user}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              // console.log(item,"item>>>>")
              return (
                <View style={styles.flatlistMainView}>
                  <View style={styles.profileView}>
                    <Image style={styles.profileImageStyling} source={{ uri: item.postImage }} />
                    <View style={styles.profileNameView}>
                      <Text style={styles.profileNameTextStyling}>
                        {item.name}
                      </Text>
                      <TouchableOpacity>
                        <Text style={styles.profileLocationTextStyling}>
                          {item.locationOfPost}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      // console.log(item, 'item pressed>>')
                      navigation.navigate(navigationStrings.VIEWMAP, { item})}}>
                    <Image
                      style={styles.postImageStyling}
                      source={{ uri: item.postImage }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.postDiscriptionStyling}>
                    {item.description}
                  </Text>
                  <Text style={styles.textTimingStyling}>
                    {item.postTiming}
                  </Text>
                  <View style={styles.postLinkeNdCommintStyling}>
                    <Text style={styles.commentTextStyling}>
                      {item.comments}
                      </Text>
                   <TouchableOpacity onPress={ onClickButton}>
                    <Text style={styles.commentTextStyling}>likes {like}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        style={styles.arrowDirection}
                        source={{ uri: item.profileIcone }}/>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;

  // <FlatList
  //           contentContainerStyle={{ paddingBottom: 135 }}
  //           data={DATA}
  //           renderItem={({ item }) => {
  //             return (
  //               <View style={styles.flatlistMainView}>
  //                 <View style={styles.profileView}>
  //                   <Image source={item.profileImage} />
  //                   <View style={styles.profileNameView}>
  //                     <Text style={styles.profileNameTextStyling}>
  //                       {item.name}
  //                     </Text>
  //                     <TouchableOpacity
  //                       onPress={() =>
  //                         navigation.navigate(navigationStrings.VIEWMAP)
  //                       }
  //                     >
  //                       <Text style={styles.profileLocationTextStyling}>
  //                         {item.location}
  //                       </Text>
  //                     </TouchableOpacity>
  //                   </View>
  //                   <TouchableOpacity>
  //                     <Image style={styles.dotImageStyle} source={item.icone} />
  //                   </TouchableOpacity>
  //                 </View>
  //                 <TouchableOpacity
  //                   onPress={() =>
  //                     navigation.navigate(navigationStrings.VIEWMAP)
  //                   }
  //                 >
  //                   <Image
  //                     style={styles.postImageStyling}
  //                     source={item.postImage}
  //                   />
  //                 </TouchableOpacity>

  //                 <Text style={styles.postDiscriptionStyling}>
  //                   {item.postnote}
  //                 </Text>
  //                 <Text style={styles.textTimingStyling}>
  //                   {item.timeofPost}
  //                 </Text>
  //                 <View style={styles.postLinkeNdCommintStyling}>
  //                   <Text style={styles.commentTextStyling}>
  //                     {eng.COMMENTS}
  //                   </Text>
  //                   <Text style={styles.commentTextStyling}>{eng.LIKES}</Text>
  //                   <TouchableOpacity>
  //                     <Image
  //                       style={styles.arrowDirection}
  //                       source={item.arrowIcone}
  //                     />
  //                   </TouchableOpacity>
  //                 </View>
  //               </View>
  //             );
  //           }}
  //         />




  //         <FlatList
  //         contentContainerStyle={{ paddingBottom: 135 }}
  //         data={DATA}
  //         renderItem={({ item }) => {
  //           return (
  //             <View style={styles.flatlistMainView}>
  //               <View style={styles.profileView}>
  //                 <Image source={item.profileImage} />
  //                 <View style={styles.profileNameView}>
  //                   <Text style={styles.profileNameTextStyling}>
  //                     {item.name}
  //                   </Text>
  //                   <TouchableOpacity
  //                     onPress={() =>
  //                       navigation.navigate(navigationStrings.VIEWMAP)
  //                     }
  //                   >
  //                     <Text style={styles.profileLocationTextStyling}>
  //                       {item.location}
  //                     </Text>
  //                   </TouchableOpacity>
  //                 </View>
  //                 <TouchableOpacity>
  //                   <Image style={styles.dotImageStyle} source={item.icone} />
  //                 </TouchableOpacity>
  //               </View>
  //               <TouchableOpacity
  //                 onPress={() =>
  //                   navigation.navigate(navigationStrings.VIEWMAP)
  //                 }
  //               >
  //                 <Image
  //                   style={styles.postImageStyling}
  //                   source={item.postImage}
  //                 />
  //               </TouchableOpacity>

  //               <Text style={styles.postDiscriptionStyling}>
  //                 {item.postnote}
  //               </Text>
  //               <Text style={styles.textTimingStyling}>
  //                 {item.timeofPost}
  //               </Text>
  //               <View style={styles.postLinkeNdCommintStyling}>
  //                 <Text style={styles.commentTextStyling}>
  //                   {eng.COMMENTS}
  //                 </Text>
  //                 <Text style={styles.commentTextStyling}>{eng.LIKES}</Text>
  //                 <TouchableOpacity>
  //                   <Image
  //                     style={styles.arrowDirection}
  //                     source={item.arrowIcone}
  //                   />
  //                 </TouchableOpacity>
  //               </View>
  //             </View>
  //           );
  //         }}
  //       />







  // const DATA = [
  //   {
  //     profileImage: imagePath.ic_apple,
  //     name: eng.USERNAME,
  //     location: eng.LOCATION,
  //     icone: imagePath.ic_dots,
  //     postImage: imagePath.c,
  //     postnote: eng.POSTNOTE,
  //     timeofPost: eng.TIMEOFPOST,
  //     comments: eng.COMMENTS,
  //     likes: eng.LIKES,
  //     arrowIcone: imagePath.ic_direction,
  //   },
  //   {
  //     profileImage: imagePath.ic_apple,
  //     name: eng.USERNAME,
  //     location: eng.LOCATION,
  //     icone: imagePath.ic_dots,
  //     postImage: imagePath.c,
  //     postnote: eng.POSTNOTE,
  //     timeofPost: eng.TIMEOFPOST,
  //     comments: eng.COMMENTS,
  //     likes: eng.LIKES,
  //     arrowIcone: imagePath.ic_direction,
  //   },
  //   {
  //     profileImage: imagePath.ic_apple,
  //     name: eng.USERNAME,
  //     location: eng.LOCATION,
  //     icone: imagePath.ic_dots,
  //     postImage: imagePath.c,
  //     postnote: eng.POSTNOTE,
  //     timeofPost: eng.TIMEOFPOST,
  //     comments: eng.COMMENTS,
  //     likes: eng.LIKES,
  //     arrowIcone: imagePath.ic_direction,
  //   },
  //   {
  //     profileImage: imagePath.ic_apple,
  //     name: eng.USERNAME,
  //     location: eng.LOCATION,
  //     icone: imagePath.ic_dots,
  //     postImage: imagePath.c,
  //     postnote: eng.POSTNOTE,
  //     timeofPost: eng.TIMEOFPOST,
  //     comments: eng.COMMENTS,
  //     likes: eng.LIKES,
  //     arrowIcone: imagePath.ic_direction,
  //   },
  //   {
  //     profileImage: imagePath.ic_apple,
  //     name: eng.USERNAME,
  //     location: eng.LOCATION,
  //     icone: imagePath.ic_dots,
  //     postImage: imagePath.c,
  //     postnote: eng.POSTNOTE,
  //     timeofPost: eng.TIMEOFPOST,
  //     comments: eng.COMMENTS,
  //     likes: eng.LIKES,
  //     arrowIcone: imagePath.ic_direction,
  //   },
  // ];