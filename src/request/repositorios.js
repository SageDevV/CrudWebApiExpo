import api from '../services/api';

export async function pegarRepositoriosDoUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data;
    }
    catch (erro) {
        console.log(erro);
        return [];
    }
}

export async function salvarRepositoriosDoUsuario(postId, nome, data, id) {
    try {
        await api.put(`/repos/${id}`,
            {
                name: nome,
                data: data,
                postId: postId,
                id: id
            }
        );
        return 'sucess 200OK'
    }
    catch (erro) {
        console.log(erro);
        return 'Erro'
    }
}

export async function criarRepositoriosDoUsuario(postId, nome, data) {
    try {
        await api.post(`/repos`,
            {
                name: nome,
                data: data,
                postId: postId,
            }
        );
        return 'sucess 200OK'
    }
    catch (erro) {
        console.log(erro);
        return 'Erro'
    }
}

export async function deletarRepositoriosDoUsuario(id) {
    try {
        await api.delete(`/repos/${id}`);
        return 'sucess 200OK'
    }
    catch (erro) {
        console.log(erro);
        return 'Erro'
    }
}