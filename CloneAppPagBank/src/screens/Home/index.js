import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles } from './style';

EStyleSheet.build();

export const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerTopo}>
                <View style={styles.containerHeader}>
                    <View style={styles.containerLogo}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/icon2.png')}
                        />
                    </View>
                    <View style={styles.containerIcones}>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/cadeado.png')}
                        />
                        <Image
                            style={styles.icon}
                            source={require('../../assets/sino.png')}
                        />
                        <Image
                            style={styles.icon}
                            source={require('../../assets/usuario.png')}
                        />
                    </View>
                </View>
                <View style={styles.containerSaldo}>
                    <View style={styles.containerSaldoTopo}>
                        <View style={styles.containerTextoSaldo}>
                            <Text style={styles.textoSaldo}>Saldo</Text>
                        </View>
                        <View style={styles.containerOlho}>
                            <Image
                                style={styles.iconOlho}
                                source={require('../../assets/olho.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
