import { StyleSheet } from 'react-native';

export const colors = {
    primaryColor: '#00b58e',
    white: '#FFFFFF'
}
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor:colors.white
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor:colors.primaryColor,
        height: 53,
        borderRadius: 6,
        justifyContent: 'center',
        marginTop: 46
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold',
    },
    label: {
        marginBottom: 5, color:colors.primaryColor,
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    buttonTitle: {
        color:colors.white,
        textAlign: 'center',
        fontWeight: "bold"
    },
    link: {
        color: colors.primaryColor,
        marginTop: 40,
        textAlign: 'center',
        fontWeight: "700"
    },
    toggle: {
        color: '#666',
        marginBottom: 10,
        textAlign: 'right',
    }, splashScreen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 88,
    fontWeight: 'bold',
    color: colors.primaryColor,
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
    color: colors.primaryColor,
  },
});
