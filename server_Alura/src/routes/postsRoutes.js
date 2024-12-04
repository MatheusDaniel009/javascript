// Importa dependências necessárias
import express from "express"; // Framework para criar a API
import multer from "multer"; // Middleware para upload de arquivos
import cors from "cors"; // Middleware para habilitar CORS
import { listarPosts, postarPost, uploadImagem, atualizarNovoPost } from "../controllers/postsControllers.js"; // Importa os controladores das rotas

// Configurações do CORS para permitir requisições apenas da origem especificada
const corsOptions = {
    origin: "http://localhost:8000", // Origem permitida
    optionsSuccessStatus: 200 // Código de sucesso para respostas pré-flight
};

// Configuração do multer para gerenciamento de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Define a pasta de destino para os arquivos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Define o nome original do arquivo como o nome salvo
    }
});

// Criação de middleware de upload configurado com destino e armazenamento definidos
const upload = multer({ dest: "./uploads", storage });

// Configuração das rotas da aplicação
const routes = (app) => {
    app.use(express.json()); // Middleware para processar requisições com corpo em JSON
    app.use(cors(corsOptions)); // Middleware para habilitar CORS com as opções configuradas

    // Rota GET para listar todos os posts
    app.get("/posts", listarPosts);

    // Rota POST para criar um novo post
    app.post("/posts", postarPost);

    // Rota POST para fazer upload de uma imagem associada a um post
    app.post("/upload", upload.single("imagem"), uploadImagem);

    // Rota PUT para atualizar um post existente com uma nova imagem
    app.put("/upload/:id", atualizarNovoPost);
};

// Exporta as rotas como módulo padrão
export default routes;
