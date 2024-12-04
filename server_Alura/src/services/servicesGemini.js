// Importa a biblioteca do Google Generative AI para geração de conteúdo
import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializa o cliente com a chave de API do ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Obtém o modelo generativo "gemini-1.5-flash" para geração de descrições
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Função para gerar uma descrição para uma imagem usando o modelo Gemini
export default async function gerarDescricaoComGemini(imagemBuffer) {
    // Prompt para o modelo gerar uma descrição em português de forma sofisticada
    const prompt = "Gera um descricao esnobe text em portugues do brasil para a seguinte imagem. so escreva descrição E remova as cortesias do Gemini do início.";

    try {
        // Prepara a imagem como um objeto com dados codificados em base64 e tipo MIME
        const imagem = {
            inlineData: {
                data: imagemBuffer.toString("base64"), // Codifica o buffer da imagem para base64
                mimeType: "image/png", // Define o tipo MIME da imagem
            },
        };

        // Envia o prompt e a imagem para o modelo e aguarda a resposta
        const res = await model.generateContent([prompt, imagem]);

        // Retorna o texto gerado ou uma mensagem padrão se o texto estiver ausente
        return res.response.text() || "Alt-text não disponivel.";
    } catch (erro) {
        // Exibe uma mensagem de erro no console caso algo dê errado
        console.error("Erro ao obter alt-text:", erro.message, erro);

        // Lança uma nova exceção para o erro ser tratado externamente
        throw new Error("Erro ao obter alt-text do gemini");
    }
}
