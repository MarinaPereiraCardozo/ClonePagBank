import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

EStyleSheet.build();

export const Home = () => {

    const [saldo, setSaldo] = useState('R$ 19.789,29');
    const [receber, setReceber] = useState('R$ 2.744,20');

    function MostrarSaldo() {
        saldo == 'R$ 19.789,29' ? setSaldo('R$ *******') : setSaldo('R$ 19.789,29');
        receber == 'R$ 2.744,20' ? setReceber('R$ ******') : setReceber('R$ 2.744,20');
    }

    return (
        <>
        <Header/>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.containerTopo}>
                        <View style={styles.containerSaldo}>
                            <View style={styles.containerSaldoTopo}>
                                <View style={styles.containerTextoSaldo}>
                                    <Text style={styles.textoSaldo}>Saldo</Text>
                                </View>
                                <View style={styles.containerOlho}>
                                    <TouchableOpacity
                                        onPress={() => MostrarSaldo()}>
                                        <Image
                                            style={styles.iconOlho}
                                            source={require('../../assets/olho.jpg')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.containerSaldoValor}>
                                <Text style={styles.saldo}>{saldo}</Text>
                            </View>
                        </View>
                        <View style={styles.containerSaldo}>
                            <View style={styles.containerTextoValor}>
                                <Text style={styles.textoValor}>Vendas a receber</Text>
                            </View>
                            <View style={styles.containerValor}>
                                <Text style={styles.valor}>{receber}</Text>
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
                                    source={require('../../assets/user.jpg')}
                                />
                            </View>
                            <View style={styles.containerTextos}>
                                <Text style={styles.texto1}>FALTA POUCO!</Text>
                                <Text style={styles.texto2}>Complete as etapas e libere todos os serviços gratuitos</Text>
                            </View>
                            <TouchableOpacity style={styles.containerSetinha}>
                                    <Image
                                        style={styles.setinha}
                                        source={require('../../assets/seta.jpg')}
                                    />
                            </TouchableOpacity>
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
                    </View>
                    <View style={styles.containerOpcoes2}>
                        <TouchableOpacity style={styles.containerPix}>
                            <Text style={styles.textoAmarelo}>GRÁTIS</Text>
                            <Image
                                style={styles.pixIcon}
                                source={require('../../assets/pixIcon.jpg')}
                            />
                            <Text style={styles.pix}>Pix/QR Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerTransferencias}>
                            <Image
                                style={styles.transferenciaIcon}
                                source={require('../../assets/transferenciaIcon.jpg')}
                            />
                            <Text style={styles.transferencias}>Transferências</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerCartoes}>
                            <Image
                                style={styles.cartaoIcon}
                                source={require('../../assets/cartaoIcon.jpg')}
                            />
                            <Text style={styles.cartoes}>Cartões</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerOpcoes3}>
                        <TouchableOpacity style={styles.containerPagar}>
                            <Text style={styles.textoAmarelo}>GANHE R$5</Text>
                            <Image
                                style={styles.contaIcon}
                                source={require('../../assets/contaIcon.jpg')}
                            />
                            <Text style={styles.pagar}>Pagar Contas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerRecargas}>
                            <Text style={styles.textoAmarelo}>ATÉ 10% DE VOLTA</Text>
                            <Image
                                style={styles.recargaIcon}
                                source={require('../../assets/recargaIcon.jpg')}
                            />
                            <Text style={styles.recargas}>Recargas e Gift Cards</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerDinheiro}>
                            <Image
                                style={styles.dinheiroIcon}
                                source={require('../../assets/dinheiroIcon.jpg')}
                            />
                            <Text style={styles.dinheiro}>Adicionar Dinheiro</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerVantagensTudo}>
                        <Text style={styles.textoVantagens}>Vantagens do PagBank para você</Text>
                        <View style={styles.containerVantagens}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.vantagem}
                                        source={require('../../assets/vantagem1.jpg')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.vantagem}
                                        source={require('../../assets/vantagem2.jpg')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.vantagem}
                                        source={require('../../assets/vantagem3.jpg')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.vantagem}
                                        source={require('../../assets/vantagem4.jpg')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={styles.vantagem}
                                        source={require('../../assets/vantagem5.jpg')}
                                    />
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View style={styles.containerBolinhas}>
                            <Image
                                style={styles.bolinhas}
                                source={require('../../assets/bolinhas.jpg')}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.containerAjuda}>
                        <Image
                            style={styles.ajudaIcon}
                            source={require('../../assets/ajudaIcon.jpg')}
                        />
                        <View style={styles.containerAjudaTextos}>
                            <Text style={styles.ajudaTexto1}>Precida de ajuda?</Text>
                            <Text style={styles.ajudaTexto2}>Encontre as respostas que precisa ou entre em contato com a gente.</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <Footer/>
            </View>
        </>
    )
}