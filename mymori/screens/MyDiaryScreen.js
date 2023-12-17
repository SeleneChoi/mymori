import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MyDiaryData from '../screens/MyDiaryData';


export default function MyDiaryScreen({ navigation }) {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

        // State to store the diary data
    const [diaryData, setDiaryData] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    // State to track the index of the open dropdown
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));

    };

    
  // useEffect hook to fetch diary data when the component mounts
  useEffect(() => {
    // Fetch diary data from the specified API endpoint
    fetch("http://mymori.julie-chan.ca/api/v1/journals/read.php?api_key=2a32d7ed-ee8c-4561-a8bb-161463b8ada8")
      // Parse the response as JSON
      .then((res) => res.json())
      // Handle the parsed JSON data
      .then(
        // Callback function executed on successful resolution
        (result) => {
          // Update the component's state with the fetched diary data
          setDiaryData(result.journals);
          setIsLoaded(true);
        },
        // Callback function executed on error
        (error) => {
          // Log an error message to the console
          console.error('Error fetching data:', error);
        }
      );
  }, []); // Dependency array ensures the effect runs only once when the component mounts

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text style={styles.loading}>Loading...</Text>
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
                        {/* Map through diaryData and render MyDiaryData components */}
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
                    
                    {/* <Image
                        style={styles.pageNumber}
                        source={require('../assets/pagenumber.png')}
                    /> */}
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