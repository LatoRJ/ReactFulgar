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
        marginTop: 60,
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
});

export default styles;
