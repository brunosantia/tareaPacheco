import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from "./login"
import registro from "./registro"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" options={{headerShown: false}} component={login} />
        <Stack.Screen name="registro" options={{headerShown: false}} component={registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

