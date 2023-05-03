import {} from "react-native";
import navigationStrings from "../constants/navigationStrings";
import {
  Login,
  Tutorial,
  Signup,
  SignupOtp,
  SetPassword,
  AppLogin,
  SelectLocation,
} from "../Screens";
export default function AuthScreen(Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TUTORIAL}
        component={Tutorial}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={navigationStrings.SELECTLOCATIOM}
        component={SelectLocation}
        options={{ headerShown: false }}
      />
         <Stack.Screen
        name={navigationStrings.APPLOGIN}
        component={AppLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
     
         <Stack.Screen
        name={navigationStrings.SIGNUPOTP}
        component={SignupOtp}
        options={{ headerShown: false }}
      />
       
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
   
      <Stack.Screen
        name={navigationStrings.SETPASSWORD}
        component={SetPassword}
        options={{ headerShown: false }}
      />
   
    
    </>
  );
}
