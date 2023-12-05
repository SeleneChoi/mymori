import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export default function OnboardingScreen({ navigation }) {

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
                    source={require('../assets/onboarding.png')}
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
                    <FontAwesomeIcon
                        name="chevron-circle-left"
                        size={40}
                        color="#4B167F"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
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
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 40,
    },
});