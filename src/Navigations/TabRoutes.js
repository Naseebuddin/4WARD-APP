import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "../constants/navigationStrings";
import {
  AppProfile,
  ChangePassword,
  EditProfile,
  Gallary,
  Home,
  Notification,
  SearchLoaction,
  SelectLocation,
} from "../Screens";
import imagePath from "../constants/imagePath";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../styles/colors";
TabRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      options={{}}
    >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.red : colors.white,
                }}
                source={imagePath.ic_home}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: colors.dark,
            height: verticalScale(80),
            borderRadius: moderateScale(8),
            position: "absolute",
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.SEARCHLOCATION}
        component={SearchLoaction}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.red : colors.white,
                }}
                source={imagePath.ic_srch}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: colors.dark,
            height: verticalScale(80),
            borderRadius: moderateScale(8),
            position: "absolute",
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.GALLARY}
        component={Gallary}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.red : colors.white,
                }}
                source={imagePath.ic_add}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: colors.dark,
            height: verticalScale(80),
            borderRadius: moderateScale(8),
            position: "absolute",
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.red : colors.white,
                }}
                source={imagePath.ic_notify}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: colors.dark,
            height: verticalScale(80),
            borderRadius: moderateScale(8),
            position: "absolute",
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.APPPROFILE}
        component={AppProfile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.red : colors.white,
                }}
                source={imagePath.ic_user}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: colors.dark,
            height: verticalScale(80),
            borderRadius: moderateScale(8),
            position: "absolute",
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabRoutes;
