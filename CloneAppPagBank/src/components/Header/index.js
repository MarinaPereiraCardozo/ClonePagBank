import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles } from './style';

EStyleSheet.build();

export const Header = () => {

    return (

            <View style={styles.containerHeader}>
                <View style={styles.containerLogo}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/icon.jpg')}
                    />
                </View>
                <View style={styles.containerIcones}>
                        <TouchableOpacity>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/cadeado.jpg')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/sino.jpg')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/usuario.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
    )
}
