import api from "../services/api";

export async function buscaUsuario(nomeUsuario){
    try{
        const resultado = await api.get(`/users?login=${nomeUsuario}`);
        return resultado.data[0];
    }
    catch(erro){
        console.log(erro);
        return {}
    }
}