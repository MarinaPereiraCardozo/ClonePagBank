import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    containerHeader:{
        paddingLeft: 10,
        flexDirection: 'row',
        backgroundColor: '#4FA73F',
    },
    containerLogo:{
        width: 180,
        justifyContent: 'center',
        margin:10
    },
    logo: {
        width: 100,
        height: 30,
    },
    containerIcones:{
        flexDirection: 'row',
        width: 200,
        margin:10,
        paddingRight: 10
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 20,
    },

})