import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MyDiaryData from '../screens/MyDiaryData';

// Sample diary data
const diaryData = [
    {
        date: 'June 24, 2023',
        emotions: ['Nervous'],
        paragraph: 'When I feel like I’ll say something wrong or stupid, I try to write down what I want to say first beforehand. It helped me a lot, hope this can help you too.',
    },
    {
        date: 'June 21, 2023',
        emotions: ['Unconfident'],
        paragraph: 'Feeling a bit unconfident, anxious, and nervous today. I think I will try to write down what I want to say first beforehand.',
    },
    {
        date: 'June 19, 2023',
        emotions: ['Validated'],
        paragraph: 'Feeling a bit anxious and unconfident today. Trying to focus on the positive emotions like feeling validated, connected, and inspired. Hoping for a better day!',
    },
    {
        date: 'June 18, 2023',
        emotions: ['Connected'],
        paragraph: 'Had some moments of nervousness today, but overall feeling connected and inspired. Writing down my thoughts to stay focused and positive.',
    }
];

export default function MyDiaryScreen({ navigation }) {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const toggleDropdown = (index) => {
      setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

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
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Received Messages');
                            }}
                        >
                            <Image
                                style={styles.receivedIcon}
                                source={require('../assets/receivedicon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.diaryIconContainer}>
                        <Image
                            style={styles.diaryIcon}
                            source={require('../assets/diaryicon.png')}
                        />
                    </View>
                </View>

                <LinearGradient
                    colors={["#FFF", "#FFDCF5"]}
                    style={styles.centeredCard}
                >
                    <Text style={styles.cardText}>My Diary</Text>

                    <View style={styles.dropdownContainer}>
                        {diaryData.map((entry, index) => (
                            <MyDiaryData
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
