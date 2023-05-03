import React, { useState, useEffect } from "react";
import CustomButton from "./../../Components/CustomButton";
import InputTextComponent from "./../../Components/InputTextComponent";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import GOBack from "./../../Components/GoBack";
import eng from "../../constants/lang/eng";
import imagePath from "../../constants/imagePath";
import colors from "../../styles/colors";
import firebase from "firebase/compat";
import { fireBase } from './../firebase/config'
import navigationStrings from "../../constants/navigationStrings";
export default function Gallary({ navigation }) {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const todoRef = firebase.firestore().collection('tasks');
  const [addData, setAddData] = useState('');
  const [addName, setAddName] = useState('');
  const [addLocation, setAddLocation] = useState('');
  const [addDescription, setAddDescription] = useState('');
  const [addTiming, setAddTiming] = useState('');
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.assets[0], 'result<<>')
    const source = result.assets[0].uri
    console.log(source);
    setImage(source);
  };
  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image)
    const blob = await response.blob();
    const filename = image.substring(image.lastIndexOf('/') + 1);
    var ref = firebase.storage().ref().child(filename).put(blob);
    try {
      await ref
      const url = await firebase.storage().ref().child(filename).getDownloadURL()
      return url
    } catch (e) {
      console.log(e);
    }
    setUploading(false);
    alert('photo upload ');
    setImage(null);
  };

  const addField = async() => {
    const imageUrl = await uploadImage()
    console.log(imageUrl,'imageurl>>>>>>>>')
    if (addData && addData.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        postImage: imageUrl,
        name: addData,
        createdAt: timestamp,
        locationOfPost: addLocation,
        postTiming: addTiming,
        description: addDescription,
      };
      console.log(data,'this is data>>>>>')
      todoRef.add(data).then(() => {
        setAddData('');
        setImage(''),
          // setAddName(''),
          setAddDescription(''),
          setAddLocation(''),
          setAddTiming(''),
          KeyboardEvent.dismiss();
      })
        .catch((error) => {
          alert(error)
        })
    }
  }
  const uploadAllData = () => {
    addField();
    // uploadImage();

  }
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.mainView}>
        <View style={styles.gobackViewStylingh}>
          <GOBack onButtonClick={() => navigation.navigate(navigationStrings.HOME)} />
          <Text style={styles.addInfoTextStyling}>{eng.ADDINFO}</Text>
        </View>
        <View style={styles.imageGalleryViewStyling}>
          {image && <Image source={{ uri: image }} style={styles.imageStyle} />}

          <TouchableOpacity style={styles.buttonStyling}
            onPress={pickImage}>
            <Image source={imagePath.ic_plus} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.mainInputStyling}>
            <InputTextComponent
              onChangeTextValue={(name) => setAddData(name)}
              myValueToAdd={addData}
              multilineText={true}
              placeInput={eng.POSTNAME}
            />
          </View>
          <View style={styles.addLocatIonView}>
            <InputTextComponent
              onChangeTextValue={(locationOfPost) => setAddLocation(locationOfPost)}
              myValueToAdd={addLocation}
              placeInput={eng.POSTLOCATION} />
          </View>
          <View style={styles.addLocatIonView}>
            <InputTextComponent
              onChangeTextValue={(description) => setAddDescription(description)}
              myValueToAdd={addDescription}
              placeInput={eng.WRITEDESCRIPTION} />
          </View>
          <View style={styles.addLocatIonView}>
            <InputTextComponent
              onChangeTextValue={(postTiming) => setAddTiming(postTiming)}
              myValueToAdd={addTiming}
              placeInput={eng.POSTTIMING} />
          </View>
          <CustomButton
            onPressButton={() => uploadAllData()}
            ButtonText={eng.POSTLOCATION}
            textColor={colors.white}
            customBackgruondColor={colors.red}
            topMargine={220}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
