import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// export const saveDataToAsync = async (key, data) => {
//     return await AsyncStorage.setItem(key, data)
// }
// export async function apiReq(
//     url,
//     method,
//     data,
//     headers,
// ) {
//     console.log(url, "urlurlurlurlurl");
//     return new Promise((resolve, reject) => {
//         axios({
//             method: method,
//             url: "https://dev.bonkersapp.com/api/login",
//             data: data,
//             params: data,
//             // headers: headers
//         }).then((response) => {
//             return resolve(response)
//         }).catch((error) => {
//             return reject(error)
//         })
//     })
// }
// export function apiPost(endpoint, data, headers = {}) {
//     return apiReq(endpoint, "POST", data, headers)
// }



export const saveDataToAsync = async (key, data) => {
    return await AsyncStorage.setItem(key, data)
}

const axiosApiRequset = (endpoint, method, header, data) => {
    console.log(endpoint, method, header, data)
    return new Promise((resolve, reject) => {
        axios({
            url: endpoint,
            method: method,
            headers: header,
            data: data,
        }).then((res) => {
            return resolve(res.data)
        }).catch((error) => {
            return reject(error);
        })
    })
};
export const getStaticApi = (endpoint) => {
    return new Promise((resolve, reject) => {
        axiosApiRequset(endpoint, "get").then((res) => {
            return resolve(res)
        }).catch((error) => {
            return reject(error)
        })
    })
};
export const PostApi = (endpoint,  data,header) => {
    return new Promise((resolve, reject) => {
        console.log(endpoint,  data,header)
        axiosApiRequset(endpoint, "post", header, data).then((res) => {
            return resolve(res)
        }).catch((error) => {
            return reject(error)
        })
    })
};








