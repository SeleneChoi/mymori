import { StyleSheet } from "react-native";

const styles_btn = StyleSheet.create({
    buttonContainer_light: {
        alignSelf: 'center',
        width: 210,
        position: 'absolute',
        bottom: 100,
        backgroundColor: "#BBAAFB",
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonContainer_dark: {
        alignSelf: 'center',
        width: 210,
        position: 'absolute',
        bottom: 40,
        backgroundColor: "#4B167F",
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        fontFamily: 'Comfortaa_400Regular',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    }
});


export default styles_btn;