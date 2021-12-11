import React, {useState} from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './style';

EStyleSheet.build();

export const Login = () => {
    const navigation = useNavigation();
    const [senha, setSenha] = useState(true);
    const [message, setMessage] = useState('Mostrar');

    function mostrarSenha () {
        setSenha(!senha);
        (message == "Mostrar") ? setMessage('Ocultar') : setMessage('Mostrar');
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/icon2.png')}
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.formLabel}>CPF,CNPJ ou E-mail</Text>
                <TextInput style={styles.formInput}></TextInput>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.formLabel}>Senha</Text>
                <View style={styles.containerFormSenha}>
                    <TextInput  
                        style={styles.formInputSenha}
                        secureTextEntry={senha}>
                    </TextInput>
                    <TouchableOpacity
                        style={styles.buttonMostrar}
                        onPress={() => mostrarSenha() }>
                        <Text style={styles.buttonMostrar}>{message}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerLembrete}>
                <View style={styles.containerLembrar}>
                    <Text style={styles.lembrete}>Lembrar minha conta</Text>
                </View>
                <View style={styles.containerToogle}>
                    <Image
                        style={styles.toogle}
                        source={require('../../assets/toogle.png')}
                    /> 
                </View>
                
            </View>
            
            <View style={styles.containerButtons}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.buttonEntrar}>
                    <Text style={styles.entrar}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.buttonCriarConta}>
                    <Text style={styles.criarConta}>Criar Conta</Text>
                </TouchableOpacity>

                <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
            </View>

            <View style={styles.containerVersao}>
                <Text style={styles.versao}>Versão 4.51.6</Text>
            </View>
        </View>
    )
}
