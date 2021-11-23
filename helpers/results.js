exports.Sucesso = (data = null, mensagem = null) => ({ status: true, data, mensagem });

exports.Falha = (erros = [], mensagem = null) => ({ status: false, erros, mensagem });

exports.Finalizar = resposta => {
    if (resposta.status)
        return resposta.data;
    throw resposta.erros;
};