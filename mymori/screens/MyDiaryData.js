import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function MyDiaryData({ entry, isOpen, onToggle, index }) {
  const containerColors = ['#BBAAFB', '#FFA6C3']; 

  const containerBackgroundColor =
    containerColors[index % containerColors.length];

  const getEmotionColor = (mood) => {
    switch (mood) {

    // POSITIVE EMOTIONS
      case 'connected':
        return '#98DE8D';
      case 'validated':
        return '#98DE8D';
      case 'inspired':
        return '#98DE8D';

    // NEGATIVE EMOTIONS
      case 'anxious':
        return '#FFA6C3';
      case 'unconfident':
        return '#FFA6C3';
      case 'nervous':
        return '#FFA6C3';
    
    // NONE
      default:
        return '#FFFFFF';
    }
  };

  return (
    <View
      style={[
        styles.tableRow,
        isOpen && styles.clickedDate,
        { backgroundColor: containerBackgroundColor },
      ]}
    >
      <TouchableOpacity onPress={onToggle}>
        <Text style={[styles.tableCell, styles.dateCell]}>{entry.date}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          <Text style={styles.encouragement}>Today's Encouragement</Text>
          <Text
            style={[
              styles.emotionPill,
              { backgroundColor: getEmotionColor(entry.mood) },
            ]}
          >
            {entry.mood}
          </Text>

          <Text style={styles.paragraphCell}>{entry.entry}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        borderWidth: 0,
        borderRadius: 10,
    },
    dropdown: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 200,
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        borderWidth: 0,
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 0,
        padding: 5,
        fontFamily: 'Kalam_400Regular',
    },
    dateCell: {
        // fontWeight: 'bold',
        fontFamily: 'Kalam_400Regular',
    },
    clickedDate: {
        marginBottom: 200,
    },
    encouragement: {
        marginBottom: 5,
        fontFamily: 'Comfortaa_400Regular',
    },
    emotionsCell: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    emotionPill: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 5,
        fontFamily: 'Comfortaa_400Regular',
    },
    paragraphCell: {
        borderWidth: 1,
        borderColor: '#BBAAFB',
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        padding: 10,
        flex: 2,
        textAlign: 'left',
        fontFamily: 'Kalam_400Regular',
    },
});


