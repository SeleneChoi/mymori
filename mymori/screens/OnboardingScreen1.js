import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import styles from '../components/style_onboarding';

export default function OnboardingScreen1({ navigation }) {

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    return (
        <AnimatedLinearGradient
            style={styles.container}
            colors={["rgba(75, 22, 127, 1)", "rgba(255, 166, 195, 1)"]}
        >
            <TouchableOpacity>
                <Image
                    style={styles.account}
                    source={require('../assets/account.png')}
                />
            </TouchableOpacity>
            <View style={styles.centerContainer}>
                <Image
                    source={require('../assets/onboarding1.png')}
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Landing')}
                >
                    <FontAwesomeIcon
                        name="chevron-circle-left"
                        size={40}
                        color="#4B167F"
                    />
                </TouchableOpacity>
                <MaterialIcons
                    name="circle"
                    style={styles.circle_active}
                    color="#98DE8D"
                />
                <MaterialIcons
                    name="circle"
                    style={styles.circle_inactive}
                    color="#98DE8D"
                />
                <MaterialIcons
                    name="circle"
                    style={styles.circle_inactive}
                    color="#98DE8D"
                />
                <MaterialIcons
                    name="circle"
                    style={styles.circle_inactive}
                    color="#98DE8D"
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Onboarding2')}
                >
                    <FontAwesomeIcon
                        name="chevron-circle-right"
                        size={40}
                        color="#4B167F"
                    />
                </TouchableOpacity>

            </View>
        </AnimatedLinearGradient>
    );
}

