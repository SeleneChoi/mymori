import { StyleSheet } from 'react-native';

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
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 30,
    },
    circle_active: {
        opacity: 1,
        fontSize: 20,
    },
    circle_inactive: {
        opacity: .5,
        fontSize: 20,
    },
});

export default styles;