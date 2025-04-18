import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: '#FF7A00',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    skipText: {
        color: '#007AFF',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333333',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#666666',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default styles;
