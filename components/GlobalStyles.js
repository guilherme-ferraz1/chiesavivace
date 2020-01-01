import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#FFEFEF',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },  
    buttonLogin: {
        alignItems: 'center',
        backgroundColor: '#69BA83',
        position: 'absolute',
        width: 326,
        height: 41,
        left: 25,
        top: 390,
        borderRadius: 11,
        padding: 10
    },
    textHolderLogin: {
        position: 'absolute',
        width: 340,
        height: 37,
        left: 18,
        top: 330,
        backgroundColor: '#FFFFFF',
        borderRadius: 11,
        paddingLeft: 15
    },
});
