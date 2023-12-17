import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts, Comfortaa_400Regular } from "@expo-google-fonts/comfortaa";
import { Kalam_400Regular } from "@expo-google-fonts/kalam";

export default function ConfirmScreen({ navigation }) {

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
            
            {/* Centered Card */} 
            <View style={styles.centeredCard}>
                <View style={styles.iconContainer}>
                    <Image
                    style={styles.cardIcon}
                    source={require('../assets/questionicon.png')}
                    />
                </View>
                <Text style={styles.cardText}>Would you like to tell your Diary Tree?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.yesButton]}
                        onPress={() => {
                            navigation.navigate('Complete');
                        }}
                    >
                        <Text style={styles.buttonText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.noButton]}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        <Text style={styles.buttonText}>No</Text>
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
    yesButton: {
        backgroundColor: '#BBAAFB',
    },
    noButton: {
        backgroundColor: '#9D9D9D',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        width: 80,
        fontFamily: 'Comfortaa_400Regular',
    },
});