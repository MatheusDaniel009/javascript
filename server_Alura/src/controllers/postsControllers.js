import fs from "fs";
import {getTodosPosts, criarPost, atualizarPost} from "../models/postsModels.js";
import  gerarDescricaoComGemini from "../services/servicesGemini.js";

export async function atualizarNovoPost(req, res) {
    // Obtém o ID do post a partir dos parâmetros da URL
    const id = req.params.id;

    // Define a URL da imagem associada ao post
    const urlImagem = `http://localhost:8000/${id}.png`;

    try {
        // Lê o arquivo de imagem do diretório local 'uploads'
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);

        // Gera uma descrição para a imagem utilizando uma ferramenta externa
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        // Cria o objeto do post com as informações necessárias
        const post = {
            descricao: descricao, // Descrição gerada para a imagem
            url_img: urlImagem,  // URL pública da imagem
            alt: req.body.alt,   // Texto alternativo fornecido pelo cliente na requisição
        };

        // Atualiza o post no banco de dados com o ID especificado
        const postCriado = await atualizarPost(id, post);

        // Responde ao cliente com o post atualizado/criado
        res.status(200).json(postCriado);
    } catch (erro) {
        // Em caso de erro, exibe a mensagem no console e retorna um erro 500 ao cliente
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}
