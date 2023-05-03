import { TabRouter } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import navigationStrings from "../constants/navigationStrings";
import { ChangePassword, EditProfile, Home, ViewMap } from "../Screens";
import TabRoutes from "./TabRoutes";
export default MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={navigationStrings.TABSROUTES} component={TabRoutes} />
      <Stack.Screen
        name={navigationStrings.EDITPROFILE}
        component={EditProfile}
      />
      <Stack.Screen
        name={navigationStrings.CHANGEPASSWORD}
        component={ChangePassword}
      />
      <Stack.Screen name={navigationStrings.VIEWMAP} component={ViewMap} />
    </>
  );
};
const styles = StyleSheet.create({});
