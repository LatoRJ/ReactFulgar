import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
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
        fontSize: 32,
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
        marginBottom: 12,
        textAlign: 'center',
    },

//Getting Started Screen Stylings
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 24,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    header: {
        alignItems: 'center',
        marginTop: 180,
    },
    imageContainer: {
        width: 250,
        height: 330,
        backgroundColor: '#000000',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 40,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 16,
        color: '#2E2E2E',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        marginBottom: 30,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    dot: {
        marginHorizontal: 4,
    },
    activeDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000000',
    },
    inactiveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#696969',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    nextButton: {
        backgroundColor: '#000000',
        paddingVertical: 14,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 45,
    },
    nextButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    skipText: {
        fontSize: 14,
        color: '#000',
    },
    center:{
        alignSelf: 'center',
        alignItems: 'center',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 24,
        paddingTop: 280,
    },

    // Login Screen Stylings
    loginContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    loginHeader: {
        alignItems: 'center',
        marginTop: 40,
    },
    loginTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    loginSubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
    },
    formContainer: {
        marginTop: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#F5F7FA',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        backgroundColor: '#F5F7FA',
    },
    eyeIcon: {
        padding: 12,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    checkboxChecked: {
        backgroundColor: '#FF6200',
        borderColor: '#FF6200',
    },
    checkboxText: {
        fontSize: 14,
        color: '#666',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#FF6200',
    },
    loginButton: {
        backgroundColor: '#FF6200',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    signupText: {
        fontSize: 14,
        color: '#666',
    },
    signupLink: {
        fontSize: 14,
        color: '#FF6200',
        fontWeight: 'bold',
    },
    orText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 20,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    signupScreenContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    backButton: {
        marginTop: 20,
    },
    signupHeader: {
        alignItems: 'center',
        marginTop: 20,
    },
    signupTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    signupSubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
    },
    signupButton: {
        backgroundColor: '#FF6200',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    signupButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default styles;