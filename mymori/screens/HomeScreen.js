import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import styles from "../components/style_onboarding";
import styles_btn from "../components/styles_button";

export default function HomeScreen({ navigation }) {

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
            <Text style={styles_home.heading}>
                Your Diary Tree is{'\n'} 1 day old!
            </Text>
            <View style={styles_home.tree}>
                <Image
                    source={require('../assets/onboarding.png')}
                />
            </View>
            <View style={styles_btn.buttonContainer_light}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MessagePop')}
                >
                    <Text style={styles_btn.button}>
                        Write Diary
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles_btn.buttonContainer_dark}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('My Diary')}
                >
                    <Text style={styles_btn.button}>
                        Read Diary
                    </Text>
                </TouchableOpacity>
            </View>
        </AnimatedLinearGradient>
    );
}

const styles_home = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'Comfortaa_400Regular',
    },
    tree: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});
