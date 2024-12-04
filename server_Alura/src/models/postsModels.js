// Importa o módulo ObjectId do MongoDB para manipulação de IDs no formato BSON
import { ObjectId } from "mongodb";

// Importa a função de conexão com o banco de dados
import conectarBanco from "../config/mongoDB_config.js";

// Estabelece uma conexão com o MongoDB usando a string de conexão fornecida no ambiente
const conexao = await conectarBanco(process.env.STR_CONEXAO);

// Função para obter todos os posts da coleção "posts"
export async function getTodosPosts() {
    // Acessa o banco de dados "db_alula"
    const db = conexao.db("db_alula");

    // Acessa a coleção "posts" dentro do banco
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

// Função para criar um novo post na coleção "posts"
export async function criarPost(newPost) {
    // Acessa o banco de dados "db_alula"
    const db = conexao.db("db_alula");

    // Acessa a coleção "posts" dentro do banco
    const colecao = db.collection("posts");

    // Insere o novo post na coleção e retorna o resultado da operação
    return colecao.insertOne(newPost);
}

// Função para atualizar um post existente na coleção "posts"
export async function atualizarPost(id, newPost) {
    // Acessa o banco de dados "db_alula"
    const db = conexao.db("db_alula");

    // Acessa a coleção "posts" dentro do banco
    const colecao = db.collection("posts");

    // Converte o ID hexadecimal para um objeto ObjectId, que é usado pelo MongoDB
    const objID = ObjectId.createFromHexString(id);

    // Atualiza o documento correspondente ao ID fornecido, 
    // aplicando as alterações no objeto "newPost" usando o operador `$set`
    return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: newPost });
}
