import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { salvarRepositoriosDoUsuario, deletarRepositoriosDoUsuario } from '../../request/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function salvar() {
        const resultado = await salvarRepositoriosDoUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id)

        if (resultado === 'sucess 200OK') {
            Alert.alert('Repositorio atualizado!');
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao atualizar informações');
        }
    }

    async function deletar(){   
        const resultado = await deletarRepositoriosDoUsuario(route.params.item.id)
        console.log(resultado)
        if (resultado === 'sucess 200OK') {
            Alert.alert('Repositorio deletado!');
            navigation.goBack();
        }
        else {
            Alert.alert('Erro ao deletar informações');
        }
    }


    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}

            />
            <TouchableOpacity
                style={estilos.botao}
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={[estilos.botao, { backgroundColor: '#DD2B2B', marginTop: 10 }]}
            >
                <Text 
                style={estilos.textoBotao}
                onPress={deletar}
                >
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
