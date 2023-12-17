import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts, Comfortaa_400Regular } from "@expo-google-fonts/comfortaa";
import { Kalam_400Regular } from "@expo-google-fonts/kalam";

export default function CompleteScreen({ navigation }) {

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    const [fontsLoaded] = useFonts({
        Comfortaa_400Regular
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
            <TouchableOpacity>
                <Image
                    style={styles.account}
                    source={require('../assets/account.png')}
                />
            </TouchableOpacity>
            
            <View style={styles.centeredCard}>
                <View style={styles.iconContainer}>
                    <Image
                    style={styles.cardIcon}
                    source={require('../assets/tickicon.png')}
                    />
                </View>
                <Text style={styles.cardText}>Thanks for talking to your Diary Tree!</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.closeButton]}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AnimatedLinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    account: {
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        width: 50,
        marginTop: 40,
        marginRight: 20,
    },
    centeredCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 25,
        marginTop: 130,
        height: '30%',
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: '#BBAAFB',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        marginBottom: 10,
        height: 80,
        width: '100%',
        padding: 0,
        justifyContent: 'center',
        margin: 0,
        marginBottom: 10,
    },
    cardIcon: {
        alignSelf: 'center',
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    cardText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Comfortaa_400Regular',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
    },
    closeButton: {
        backgroundColor: '#BBAAFB',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        width: 80,
        fontFamily: 'Comfortaa_400Regular',
    },
});