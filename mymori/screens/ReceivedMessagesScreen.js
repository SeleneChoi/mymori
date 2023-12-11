import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import ReceivedMessagesData from '../screens/ReceivedMessagesData';

import { useFonts, Comfortaa_400Regular, Kalam_400Regular } from "@expo-google-fonts/comfortaa";

const messagesData = [
    {
        date: 'June 23, 2023',
        title: 'It’s okay to feel Misunderstood',
        paragraph: 'I am truly sorry to hear that you are feeling misunderstood. It can be incredibly tough when others do not fully grasp your perspective. You deserve to be understood and supported.',
        name: 'Anonymous Bunny',
    },
    {
        date: 'June 22, 2023',
        title: 'You are not alone',
        paragraph: 'I know how you feel. I’ve been there before. It’s okay to feel this way. You are not alone. You are loved. You are cared for. You are important.',
        name: 'Anonymous Cat',
    },
    {
        date: 'June 20, 2023',
        title: 'You can do it!',
        paragraph: 'You can do it! I believe in you! You are strong and capable. You are worthy of love and belonging. You are enough.',
        name: 'Anonymous Whale',
    },
    {
        date: 'June 18, 2023',
        title: 'I’m here for you',
        paragraph: 'I’m here for you. I’m so sorry to hear that you’re feeling this way. I’m here to listen. You are not alone.',
        name: 'Anonymous Dog',
    }
];
export default function ReceivedMessagesScreen({ navigation }) {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    const [fontsLoaded] = useFonts({
        Comfortaa_400Regular
    });

    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

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
        <ScrollView style={styles.scrollContainer}>
        <AnimatedLinearGradient
            style={styles.container}
            colors={["rgba(75, 22, 127, 1)", "rgba(255, 166, 195, 1)"]}
        >
            <View style={styles.header}>
            <TouchableOpacity
                onPress={() => {
                navigation.navigate('Home');
                }}
            >
                <Image
                style={styles.backIcon}
                source={require('../assets/backicon.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                style={styles.account}
                source={require('../assets/account.png')}
                />
            </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
                <View style={styles.receivedIconContainer}>
                    <Image
                    style={styles.receivedIcon}
                    source={require('../assets/receivedicon.png')}
                    />
                </View>
                <View style={styles.diaryIconContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('My Diary');
                        }}
                    >
                        <Image
                            style={styles.diaryIcon}
                            source={require('../assets/diaryicon.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <LinearGradient
                colors={['#FFB7EB', '#FFDBF5']}
                style={styles.centeredCard}
                >
                <Text style={styles.cardText}>Received Messages</Text>

                <View style={styles.dropdownContainer}>
                    {messagesData.map((entry, index) => (
                    <ReceivedMessagesData
                        key={index}
                        entry={entry}
                        isOpen={openDropdownIndex === index}
                        onToggle={() => toggleDropdown(index)}
                        index={index}
                    />
                    ))}
                </View>
                
                <Image
                    style={styles.pageNumber}
                    source={require('../assets/pagenumber.png')}
                />
            </LinearGradient>
        </AnimatedLinearGradient>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backIcon: {
        alignSelf: 'flex-start',
        resizeMode: 'contain',
        width: 50,
        marginTop: 65,
        marginLeft: 20,
    },
    account: {
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        width: 50,
        marginTop: 40,
        marginRight: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        margin: 0,
        marginTop: 20,
        padding: 0,
        height: 50,
        width: '100%',
        justifyContent: 'space-evenly',
    },
    receivedIconContainer: {
        width: '50%',
        justifyContent: 'center',
        backgroundColor: '#FFB7EB',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    diaryIconContainer: {
        width: '50%',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    receivedIcon: {
        alignSelf: 'center',
        width: '50%',
        height: 35,
        resizeMode: 'contain',
    },
    diaryIcon: {
        alignSelf: 'center',
        width: '50%',
        height: 35,
        resizeMode: 'contain',
    },
    centeredCard: {
        backgroundColor: 'white',
        alignItems: 'center',
        position: 'relative',
    },
    dropdownContainer: {
        position: 'relative',
        flexDirection: 'column',
        width: '100%',
        height: 550,
        marginTop: 0,
    },
    cardText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 25,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    columnHeader: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pageNumber: {
        position: 'absolute',
        top: 550,
    }
});
