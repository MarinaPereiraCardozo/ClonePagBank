import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerHeader: {
        backgroundColor: '#5CBD4C',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 40,
    },
    logo: {
        width: 80,
        height: 25,
    },
    containerForm: {
        justifyContent: 'center',
        width: '95%',
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
    },
    formLabel: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    formInput: {
        width: '100%',
        height: 40,
        fontSize: 18,
    },
    formInputSenha: {
        width: '80%',
        height: 40,
        fontSize: 18,
    },
    containerFormSenha: {
        flexDirection: 'row',
    },
    buttonMostrar:{
        color: '#0078AD',
        height: 25,
        fontSize: 14,
        paddingTop: 5
    },
    containerLembrete: {
        justifyContent: 'center',
        width: '95%',
        marginTop: 10,
        flexDirection: 'row'
    },
    containerLembrar: {
        width: '50%',
        marginTop: 10,
    },
    containerToogle: {
        width: '50%',
        marginTop: 10,
        alignItems: 'flex-end'
    },
    lembrete: {
        fontSize: 16,
        marginLeft: 20,
    },
    toogle: {
        width: 35,
        height: 25,
    },
    containerButtons: {
        alignItems: 'center',
        marginTop: 40,
    },
    buttonEntrar: {
        backgroundColor: '#0078AD',
        padding: 10,
        width: '80%',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#0078AD',
    },
    entrar: {
        fontSize: 16,
        color: 'white',
    },
    buttonCriarConta: {
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        width: '80%',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#0078AD',
    },
    criarConta: {
        fontSize: 16,
        color: '#0078AD',
    },
    esqueciSenha: {
        fontSize: 16,
        color: '#0078AD',
        padding: 20,
    },
    containerVersao: {
        alignItems: 'center'
    },
    versao: {
        fontSize: 14,
        color: 'gray',
    },
});