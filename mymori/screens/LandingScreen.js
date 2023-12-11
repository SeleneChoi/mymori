import React from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts, Comfortaa_400Regular, Kalam_400Regular } from "@expo-google-fonts/comfortaa";
import styles_btn from '../components/styles_button';

export default function LandingScreen({ navigation }) {

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    const [fontsLoaded] = useFonts({
        Comfortaa_400Regular,
        // Kalam_400Regular
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text style={styles.loading}>
                    Loading...
                </Text>
            </View>
        );
    }

    return (
        <AnimatedLinearGradient
            style={styles.container}
            colors={["rgba(75, 22, 127, 1)", "rgba(255, 166, 195, 1)"]}
        >
            <View style={styles.top}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.heading}>MyMori</Text>
                <Text style={styles.blurb}>bridges the silence</Text>
            </View>

            <View style={styles.centerContainer}>
                <Image
                    style={styles.tree}
                    source={require('../assets/LandingTree.png')}
                />
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Onboarding1')}
                        style={styles_btn.buttonContainer_light}
                    >
                        <Text style={styles_btn.button}>
                            Start Your Journey
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AnimatedLinearGradient >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
    },
    top: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 100,
    },
    logo: {},
    heading: {
        fontSize: 32,
        fontWeight: '400',
        color: '#98DE8D',
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'Comfortaa_400Regular',
    },
    blurb: {
        fontSize: 24,
        fontWeight: '400',
        color: '#98DE8D',
        textAlign: 'center',
        marginTop: 15,
        fontFamily: 'Comfortaa_400Regular',
    },
    centerContainer: {
        marginTop: 0,
    },
    tree: {
        width: 450,
        height: 450,
    },
});