import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './screens/LandingScreen';
import OnboardingScreen1 from './screens/OnboardingScreen1';
import OnboardingScreen2 from './screens/OnboardingScreen2';
import OnboardingScreen3 from './screens/OnboardingScreen3';
import OnboardingScreen4 from './screens/OnboardingScreen4';
import HomeScreen from './screens/HomeScreen';
import MessagePop from './screens/MessagePop';
import MessageWriting from './screens/MessageWriting';
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
          name="Onboarding1"
          component={OnboardingScreen1}
          options={{ title: 'Onboarding1111', headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={OnboardingScreen2}
          options={{ title: 'Onboarding2222', headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding3"
          component={OnboardingScreen3}
          options={{ title: 'Onboarding3333', headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding4"
          component={OnboardingScreen4}
          options={{ title: 'Onboarding4444', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="MessagePop"
          component={MessagePop}
          options={{ title: 'Message Pop-up', headerShown: false }}
        />
        <Stack.Screen
          name="MessageWriting"
          component={MessageWriting}
          options={{ title: 'Message Writing', headerShown: false }}
        />        <Stack.Screen
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
