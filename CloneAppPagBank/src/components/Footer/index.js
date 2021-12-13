import React from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles } from './style';

EStyleSheet.build();

export const Home = () => {

    return (
        <View style={styles.containerFooter}>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={require('../../assets/footerInicio.jpg')}
                />
                <Text style={styles.footerTextoInicio}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={require('../../assets/footerExtrato.jpg')}
                />
                <Text style={styles.footerTexto}>Extrato</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={require('../../assets/footerVendas.jpg')}
                />
                <Text style={styles.footerTexto}>Vendas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={require('../../assets/footerCartao.jpg')}
                />
                <Text style={styles.footerTexto}>Cartões</Text>
            </TouchableOpacity>
        </View>
    )
}
