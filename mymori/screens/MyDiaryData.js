import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MyDiaryData({ entry, isOpen, onToggle, index }) {
    const isEven = index % 2 === 0;
    const backgroundColor = isEven ? '#BBAAFB' : '#FFA6C3';

    const getEmotionColor = (emotion) => {
        return ['Validated', 'Connected', 'Inspired'].includes(emotion) ? '#98DE8D' : '#FFA6C3';
    };

    return (
        <View style={[styles.tableRow, isOpen && styles.clickedDate, { backgroundColor }]}>
        <TouchableOpacity onPress={onToggle}>
            <Text style={[styles.tableCell, styles.dateCell]}>
            {entry.date}
            </Text>
        </TouchableOpacity>
        {isOpen && (
            <View style={styles.dropdown}>
            <Text style={styles.encouragement}>
                Today's Encouragement
            </Text>
            <View style={styles.emotionsCell}>
                {entry.emotions.map((emotion, index) => (
                    <Text 
                        key={index} 
                        style={[styles.emotionPill, { backgroundColor: getEmotionColor(emotion) }]}
                    >
                    {emotion}
                </Text>
                ))}
            </View>
            <Text style={styles.paragraphCell}>
                {entry.paragraph}
            </Text>
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
    },
    dateCell: {
        fontWeight: 'bold',
    },
    clickedDate: {
        marginBottom: 200,
    },
    encouragement: {
        marginBottom: 5,
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
    },
});
