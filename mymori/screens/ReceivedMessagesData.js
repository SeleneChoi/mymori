import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ReceivedMessagesData({ entry, isOpen, onToggle, index }) {
    const isEven = index % 2 === 0;
    const backgroundColor = isEven ? '#BBAAFB' : '#FFA6C3';

    return (
        <View style={[styles.tableRow, isOpen && styles.clickedDate, { backgroundColor }]}>
            <TouchableOpacity onPress={onToggle}>
                <Text style={[styles.tableCell, styles.dateCell]}>
                {entry.date}
                </Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownContainer}>
                    <View style={styles.dropdown}>
                        <Text style={styles.messageTitle}>{entry.title}</Text>
                        <Text style={styles.messageParagraph}>{entry.paragraph}</Text>
                        <Text style={styles.messageAuthor}>From: {entry.name}</Text>
                    </View>
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
    dropdownContainer: {
        marginTop: 10,
        padding: 10,
        paddingTop: -10,
        backgroundColor: '#FFF',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#BBAAFB',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 160,
        backgroundColor: 'white',
        marginTop: 10,
        paddingHorizontal: 10,
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
        marginBottom: 180,
    },
    messageTitle: {
        fontFamily: 'Comfortaa_400Regular',
        marginBottom: 10,
    },
    messageParagraph: {
        flex: 1,
        textAlign: 'left',
    },
    messageAuthor: {
        fontStyle: 'italic',
    },
});
