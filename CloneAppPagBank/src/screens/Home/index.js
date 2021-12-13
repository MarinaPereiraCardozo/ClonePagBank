import React from 'react';
import { Text, TouchableOpacity, View, Image, TextInput, ScrollView, ImageBackground, ImageBackgroundComponent } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { styles } from './style';

EStyleSheet.build();

export const Home = () => {

    return (
        <View style={styles.container}>
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
            <ScrollView>
                <View style={styles.containerTopo}>
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
                        <TouchableOpacity style={styles.containerPix}>
                            <Text style={styles.textoAmarelo}>GRÁTIS</Text>
                            <Image
                                style={styles.pixIcon}
                                source={require('../../assets/pixIcon.png')}
                            />
                            <Text style={styles.pix}>Pix/QR Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerTransferencias}>
                            <Image
                                style={styles.transferenciaIcon}
                                source={require('../../assets/transferenciaIcon.png')}
                            />
                            <Text style={styles.transferencias}>Transferências</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerCartoes}>
                            <Image
                                style={styles.cartaoIcon}
                                source={require('../../assets/cartaoIcon.png')}
                            />
                            <Text style={styles.cartoes}>Cartões</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerOpcoes3}>
                        <TouchableOpacity style={styles.containerPagar}>
                            <Text style={styles.textoAmarelo}>GANHE R$5</Text>
                            <Image
                                style={styles.contaIcon}
                                source={require('../../assets/contaIcon.png')}
                            />
                            <Text style={styles.pagar}>Pagar Contas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerRecargas}>
                            <Text style={styles.textoAmarelo}>ATÉ 10% DE VOLTA</Text>
                            <Image
                                style={styles.recargaIcon}
                                source={require('../../assets/recargaIcon.png')}
                            />
                            <Text style={styles.recargas}>Recargas e Gift Cards</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerDinheiro}>
                            <Image
                                style={styles.dinheiroIcon}
                                source={require('../../assets/dinheiroIcon.png')}
                            />
                            <Text style={styles.dinheiro}>Adicionar Dinheiro</Text>
                        </TouchableOpacity>
                    </View>
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
                            source={require('../../assets/bolinhas.png')}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.containerAjuda}>
                    <Image
                        style={styles.ajudaIcon}
                        source={require('../../assets/ajudaIcon.png')}
                    />
                    <View style={styles.containerAjudaTextos}>
                        <Text style={styles.ajudaTexto1}>Precida de ajuda?</Text>
                        <Text style={styles.ajudaTexto2}>Encontre as respostas que precisa ou entre em contato com a gente.</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
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
        </View>
    )
}
