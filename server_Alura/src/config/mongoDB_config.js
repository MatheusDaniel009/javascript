// Importa o MongoClient da biblioteca mongodb
import { MongoClient } from "mongodb";

// Exporta a função assíncrona para conectar ao banco de dados
export default async function conectarBanco(strConexao) {
    let mongoClient; // Variável que armazenará a instância do cliente MongoDB

    try {
        // Cria uma nova instância do MongoClient com a string de conexão fornecida
        mongoClient = new MongoClient(strConexao);

        console.log("Conectando ao cluster do banco de dados...");

        // Tenta estabelecer a conexão com o cluster MongoDB
        await mongoClient.connect();

        console.log("Conectado ao MongoDB Atlas com sucesso!!!");

        // Retorna o cliente conectado para uso externo
        return mongoClient;
    } catch (erro) {
        // Caso ocorra um erro na conexão, ele será tratado aqui
        console.error("Falha na conexão com o banco!!!", erro);

        // Finaliza o processo com código de erro para indicar a falha
        process.exit();
    }
}