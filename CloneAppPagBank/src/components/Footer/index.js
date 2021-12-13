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
                    source={require('../../assets/footerInicio.png')}
                />
                <Text style={styles.footerTextoInicio}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={require('../../assets/footerExtrato.png')}
                />
                <Text style={styles.footerTexto}>Extrato</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={require('../../assets/footerVendas.png')}
                />
                <Text style={styles.footerTexto}>Vendas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.footerIcon}
                    source={require('../../assets/footerCartao.png')}
                />
                <Text style={styles.footerTexto}>Cartões</Text>
            </TouchableOpacity>
        </View>
    )
}
