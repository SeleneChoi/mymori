import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './screens/LandingScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import CompleteScreen from './screens/CompleteScreen';
import MyDiaryScreen from './screens/MyDiaryScreen';
import ReceivedMessagesScreen from './screens/ReceivedMessagesScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ title: 'Onboarding...', headerShown: false }}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmScreen}
          options={{ title: 'Confirm', headerShown: false }}
        />
        <Stack.Screen
          name="Complete"
          component={CompleteScreen}
          options={{ title: 'Complete', headerShown: false }}
        />
        <Stack.Screen
          name="My Diary"
          component={MyDiaryScreen}
          options={{ title: 'My Diary', headerShown: false }}
        />
        <Stack.Screen
          name="Received Messages"
          component={ReceivedMessagesScreen}
          options={{ title: 'Received Messages', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
