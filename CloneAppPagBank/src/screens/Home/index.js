import React from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
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
                            <TouchableOpacity>
                                <Image
                                    style={styles.iconOlho}
                                    source={require('../../assets/olho.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerSaldoValor}>
                        <Text style={styles.saldo}>R$ 19.789,29</Text>
                    </View>
                </View>
                <View style={styles.containerSaldo}>
                    <View style={styles.containerTextoValor}>
                        <Text style={styles.textoValor}>Vendas a receber</Text>
                    </View>                   
                    <View style={styles.containerValor}>
                        <Text style={styles.valor}>R$ 2.744,20</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.buttonDetalhes}>
                    <Text style={styles.buttonDetalhesTexto}>Ver detalhes do saldo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerAzul}>
                <View style={styles.containerAzulTopo}>
                    <View style={styles.containerUserIcon}>
                        <Image
                            style={styles.userIcon}
                            source={require('../../assets/user.png')}
                        />
                    </View>
                    <View style={styles.containerTextos}>
                        <Text style={styles.texto1}>FALTA POUCO!</Text>
                        <Text style={styles.texto2}>Complete as etapas e libere todos os serviços gratuitos</Text>
                    </View>
                    <View style={styles.containerSetinha}>
                        <TouchableOpacity>
                            <Image
                                style={styles.setinha}
                                source={require('../../assets/seta.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerOpcoes1}>
                    <View style={styles.containerPrincipais}>
                        <Text style={styles.principais}>Principais</Text>
                    </View>
                    <View style={styles.containerProdInvest}>
                        <Text style={styles.prodInvest}>Produtos e Investimentos</Text>
                    </View>
                    <View style={styles.containerServicos}>
                        <Text style={styles.servicos}>Serviços</Text>
                    </View>
                </View>
                <View style={styles.containerOpcoes2}>
                    <View style={styles.containerPix}>
                        <Text style={styles.pix}>Pix/QR Code</Text>
                    </View>
                    <View style={styles.containerTransferencias}>
                        <Text style={styles.transferencias}>Transferências</Text>
                    </View>
                    <View style={styles.containerCartoes}>
                        <Text style={styles.cartoes}>Cartões</Text>
                    </View>
                </View>
                <View style={styles.containerOpcoes3}>
                    <View style={styles.containerPagar}>
                        <Text style={styles.pagar}>Pagar Contas</Text>
                    </View>
                    <View style={styles.containerRecargas}>
                        <Text style={styles.recargas}>Recargas e Gift Cards</Text>
                    </View>
                    <View style={styles.containerDinheiro}>
                        <Text style={styles.dinheiro}>Adicionar Dinheiro</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
