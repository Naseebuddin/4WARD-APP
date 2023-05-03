import { getResposne } from "../reducers/stateChanging";
import store from "../store";
const dispatch = store.dispatch;
import axios from "axios";
const apiActions = async (data) => {
  await axios
    .get("https://dev.bonkersapp.com/api/get-static-data")
    .then((response) => {
      dispatch(getResposne(response.data));
    })
    .catch((error) => {
      console.log("error", error);
    });
};
export default apiActions;
