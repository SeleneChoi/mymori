import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingScreen({navigation}){
    
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    return(
        <AnimatedLinearGradient
        style={styles.container}
        colors={["rgba(75, 22, 127, 1)", "rgba(255, 166, 195, 1)"]}
        >
         <Text>ONBOARDING</Text>   
        </AnimatedLinearGradient>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        
    },
});