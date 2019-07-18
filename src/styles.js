import { StyleSheet , Dimensions } from 'react-native'

dim = Dimensions.get('window');

export default styles = StyleSheet.create({
    viewScreen: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    ScrollColetor: {
        flex: 1,
        backgroundColor: 'white',
    },
    logo: {
        width: dim.width - 60,
        height: (dim.width * 91 - 5460) / 464,
        resizeMode: 'stretch',
        marginTop: 75,
        marginBottom: 50,
    },
    textInput:{
        backgroundColor: '#bdbebf',
        width: dim.width - 60,
        height: 60,
        borderRadius: 30,
        textAlignVertical: 'center',
        paddingHorizontal: 30,
        fontSize: 20,
        color: '#404040',
    },
    btn: {
        backgroundColor: '#004d8a',
        width: dim.width - 120,
        height: 60,
        borderRadius: 30,
        marginVertical: 30,
    },
    textBtn: {
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',  
        height: 55,
        fontSize: 20,
    },
    ScrollTitle: {
        color: '#004d8a',
        fontSize : 40,
        textAlign: 'center',
        marginVertical: 20,
    },
    viewBtns: {
        marginHorizontal: 30,
        justifyContent: 'space-between',
    },
    BtnsForm: {
        backgroundColor: '#004d8a',
        width: dim.width - 60,
        height: 60,
        marginVertical: 10,
        borderRadius: 30,
    },
    fieldComponent: {
        marginVertical: 10
    },
    fieldTitle: {
        marginLeft: 60,
        color: 'black',
        fontSize: 20,
        marginBottom: 5
    },
    sincronize: {
        width: 100,
        height: 30,
        backgroundColor: '#35f31c',
        borderRadius: 15,
        position: 'absolute',
        left: 10,
        top: 10
    },
    sincronizeText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        color: 'white',
        height: 25
    }
});