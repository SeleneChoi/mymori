import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "../components/style_onboarding";
import styles_message from "../components/styles_message";

export default function MessageWriting({ navigation }) {

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    const [message, setMessage] = useState('');
    const route = useRoute();
    const { selectedMood, selectedCategory } = route.params || {};

    // POST METHOD IS NOT WORKING, WHEN TESTING ON POSTMAN, IT GIVES 404 MESSAGE.
    const sendPostRequest = async () => {
        try {
            const apiUrl = 'http://mymori.julie-chan.ca/api/v1/journals/create.php?api_key=2a32d7ed-ee8c-4561-a8bb-161463b8ada8';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                }),
            });

            const responseData = await response.json();
            console.log('Response from server:', responseData);
            console.log('Message:', message)
            if (response.ok) {
                navigation.navigate('Confirm');
            } else {
                console.error('Error:', responseData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
            <View style={styles_message.box}>
                <Text style={styles_message.heading}>Today I feel...</Text>
                <TouchableOpacity style={styles_message.close}
                >
                    <MaterialCommunityIcons
                        name="close-circle-outline"
                        color='rgba(0, 0, 0, .5)'
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={selectedCategory === 'negative' ? styles_message.negative : styles_message.positive}>
                        {selectedMood}
                    </Text>
                </TouchableOpacity>
                <View style={styles_message.innerContainer}>
                    <TextInput
                        style={styles_message.message}
                        multiline
                        placeholder='Type your message here...'
                        onChangeText={text => setMessage(text)}
                        value={message}
                    >

                    </TextInput>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            // console.log('User input:', message);
                            navigation.navigate('Confirm')
                        }}
                        style={styles_message.buttonContainer}
                    >
                        <Text style={styles_message.button}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AnimatedLinearGradient>
    );
}

