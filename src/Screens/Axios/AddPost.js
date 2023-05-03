// import React, { useEffect, useState } from "react";
// import { FlatList, Pressable, SafeAreaView, Text, View, Image } from "react-native";
// import { firebase } from "../firebase/config";
// const AddPost = () => {
//     const [user, setUser] = useState([]);
//     const taskRef = firebase.firestore().collection("tasks");
//     useEffect(() => {
//         taskRef.onSnapshot((querySnapshot) => {
//             const user = [];
//             querySnapshot.forEach((doc) => {
//                 const { name, InternShip, postImage } = doc.data();
//                 user.push({
//                     id: doc.id,
//                     name,
//                     InternShip,
//                     postImage
//                 });
//             });
//             setUser(user);
//         });
//     }, []);
//     console.log(user, 'this is user')
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <View style={{ flex: 1, backgroundColor: 'white' }}>
//                 <FlatList
//                     data={user}
//                     renderItem={({ item }) => {
//                         return (
                          
//                                 <View>
//                                     <Text style={{ color: 'black' }}>{item.InternShip}</Text>
//                                     <Text>{item.InternShip}</Text>
//                                     <Image source={{ uri: item.postImage }} style={{ width: 50, height: 50 }} />
//                                 </View>
                          
//                         );
//                     }}
//                 />
//             </View>
//         </SafeAreaView>
//     );
// };
// export default AddPost;

// // const [myApiData, setMyApiData] = useState([]);
// // const [load, setLoad] = useState(false);
// // const [error, setError] = useState('')
// // // useEffect(() => {
// //     axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-03-18&sortBy=publishedAt&apiKey=a8c1d14e1eac4a93b404b8e2e49db92d').then((res)=>{
// //         setMyApiData(res.data.articles);
// //         console.log(res,'this is resopnse')
// //         setLoad(true);

// //     }).catch((err)=>{
// //         setError(err)
// //         setLoad(true)
// //     })
// // },AddPost