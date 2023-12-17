import { StyleSheet } from "react-native";

const styles_message = StyleSheet.create({
    box: {
        backgroundColor: 'rgba(255, 255, 255, .7)',
        flex: 1,
        marginHorizontal: 25,
        marginVertical: 50,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    smallbox: {
    },
    line: {
        flex: 0,
        width: "80%",
        borderBottomColor: '#4B167F',
        borderBottomWidth: 2
    },
    heading: {
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 25,
    },
    close: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    negative: {
        backgroundColor: '#FFA6C3',
        borderRadius: 10,
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 16,
        margin: 6,
        paddingHorizontal: 15,
        paddingVertical: 5,
        textAlign: 'center',
    },
    positive: {
        backgroundColor: '#98DE8D',
        borderRadius: 10,
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 16,
        margin: 6,
        paddingHorizontal: 15,
        paddingVertical: 5,
        textAlign: 'center',
    },
    selectedButton: {
        backgroundColor: 'rgba(120, 30, 180, 0.75)',
        borderRadius: 10,
        fontFamily: 'Comfortaa_400Regular',
        fontSize: 16,
        margin: 6,
        paddingHorizontal: 15,
        paddingVertical: 5,
        textAlign: 'center',
    },
    buttonContainer: {
        backgroundColor: "#BBAAFB",
        alignSelf: 'center',
        borderRadius: 6,
        paddingHorizontal: 40,
        paddingVertical: 10,
    },
    button: {
        fontFamily: 'Comfortaa_400Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },

    innerContainer: {
        maxHeight: 200,
        minHeight: 100,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "#BBAAFB",
        paddingTop: 10,
        paddingHorizontal: 25,
    },
    message: {
        width: 240,
        fontFamily: "Kalam_400Regular",
    },
});

export default styles_message;