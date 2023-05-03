import { DUMMY, LOGIN, MATCHES, myDummyApi, POSTS } from "../../config/urls";
import { apiPost, getStaticApi, PostApi } from "../../utils/utils";
import { getLoginStatus, myDataApi, setMyDummyApi, setUserData } from "../reducers/stateChanging";
import store from "../store";

const dispatch = store.dispatch;

const StateSet = (data) => {
  dispatch(getLoginStatus(data));
}; 
const saveUserDataToRedux = (_data) => {
  dispatch(setUserData(_data))
}
//sir 
export const loginApi = (data) => {
  return new Promise((resolve, reject) => {
    PostApi(POSTS, data, {}).then((res) => {
      console.log('post response', res)
      saveUserDataToRedux(res?.data?.data)
      return resolve(res)
    }).catch((error) => {
      return reject(error)
    })
  })
}
export default StateSet;
