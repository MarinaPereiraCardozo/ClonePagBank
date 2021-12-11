import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        flex: 1,
    },
    containerTopo:{
        backgroundColor: '#4FA73F',
    },
    containerHeader:{
        paddingLeft: 10,
        flexDirection: 'row',
        margin: 10,
    },
    containerLogo:{
        width: 200,
        justifyContent: 'center'
    },
    containerIcones:{
        flexDirection: 'row',
        width: 200,
    },
    logo: {
        width: 100,
        height: 30,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    containerSaldo: {
        backgroundColor: '#1C8914',
        padding:10,
        margin: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
    },
    containerSaldoTopo: {
        flexDirection: 'row',
    },
    containerTextoSaldo: {
        widht: '50%',
    },
    containerOlho: {
        widht: '50%',
        alignItems: 'flex-end',
        marginLeft: 260
    },
    textoSaldo:{
        color: 'white',
        fontSize: 16,
    },
    iconOlho: {
        width: 30,
        height: 25,
        marginLeft: 20,
    },
})