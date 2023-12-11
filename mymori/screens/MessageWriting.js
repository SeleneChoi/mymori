import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "../components/style_onboarding";
import styles_message from "../components/styles_message";

export default function MessageWriting({ navigation }) {

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
                    <Text style={styles_message.negative}>
                        Anxious
                    </Text>
                </TouchableOpacity>
                <View style={styles_message.innerContainer}>
                    <Text style={styles_message.message}>
                        I don’t understand why it’s so hard for me to say what I want sometimes. I wish I can just speak out my mind.
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Confirm')}
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

