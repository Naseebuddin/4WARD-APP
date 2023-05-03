// import React, { useEffect, useState } from "react";
// import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
// import axios from "axios";
// import apiActions from "../../redux/actions/apiActions";
// import { useSelector } from "react-redux";
// const AxiosExample = () => {
//     useEffect(()=>{
//         apiActions();
//     },[])
//  const myapidata = useSelector((state)=> state.AppStatus.responseData)
//  console.log(myapidata[0].data.CUISIN[4])
//  return (
//     <SafeAreaView>
//     <Text>{myapidata[0].data.CUISIN[2]}</Text>
//     </SafeAreaView>
//   );
// };
// export default AxiosExample;

import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { loginApi, } from '../../redux/actions/action';
import { useSelector } from "react-redux"
import axios from 'axios';
const ReactNativeSnippets = ({
  params,
}) => {

  useEffect(() => {



  }, [])


  const userData = useSelector(state => state || {})
  const _hitApi = () => {
    let data = {
      // username: "honey",
      // password: "12345678",
      // device_type: "android",
      // device_token: "123456",
    }
    loginApi(data).then((res) => {
      // console.log(res, "sjskjss");
    }).catch((err) => {
      // console.log(err, "ërr");
    })
  }


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => _hitApi()}>
        <Text style={{ fontSize: 32, color: "white" }}>{"Login"}</Text>
      </TouchableOpacity>


    </View>
  )
}

export default ReactNativeSnippets;

