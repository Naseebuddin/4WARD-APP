import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import AuthScreen from "./AuthScreen";
import MainStack from "./MainStack";

const Routes = () => {
  const stateChaningVal = useSelector((state) => state.AppStatus.status);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {stateChaningVal ? MainStack(Stack) : AuthScreen(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
