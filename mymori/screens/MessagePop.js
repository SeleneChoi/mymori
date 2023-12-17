import { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "../components/style_onboarding";
import styles_message from "../components/styles_message";

export default function MessagePop({ navigation }) {

    const [selectedMood, setSelectedMood] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleMoodSelection = (mood, category) => {
        setSelectedMood(mood);
        setSelectedCategory(category);
    };

    const isSelected = (mood) => mood === selectedMood;

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
                <View style={styles_message.smallbox}>
                    <TouchableOpacity
                        onPress={() => handleMoodSelection('Unconfident', 'negative')}
                    >
                        <Text
                            style={isSelected('Unconfident') ? styles_message.selectedButton : styles_message.negative}
                        >
                            Unconfident
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleMoodSelection('Anxious', 'negative')}
                    >
                        <Text
                            style={isSelected('Anxious') ? styles_message.selectedButton : styles_message.negative}
                        >
                            Anxious
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleMoodSelection('Nervous', 'negative')}
                    >
                        <Text
                            style={isSelected('Nervous') ? styles_message.selectedButton : styles_message.negative}
                        >
                            Nervous
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles_message.line}></View>
                <View style={styles_message.smallbox}>
                    <TouchableOpacity
                        onPress={() => handleMoodSelection('Validated', 'positive')}
                    >
                        <Text
                            style={isSelected('Validated') ? styles_message.selectedButton : styles_message.positive}
                        >
                            Validated
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleMoodSelection('Connected', 'positive')}
                    >
                        <Text
                            style={isSelected('Connected') ? styles_message.selectedButton : styles_message.positive}
                        >
                            Connected
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleMoodSelection('Inspired', 'positive')}
                    >
                        <Text
                            style={isSelected('Inspired') ? styles_message.selectedButton : styles_message.positive}
                        >
                            Inspired
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles_message.buttonContainer}
                        onPress={() => navigation.navigate('MessageWriting', { selectedMood, selectedCategory })}
                    >
                        <Text style={styles_message.button}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </AnimatedLinearGradient >
    );
}


