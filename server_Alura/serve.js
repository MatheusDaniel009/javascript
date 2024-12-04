// Importa o framework Express para criar o servidor
import express from "express";
// Importa o arquivo que contém as rotas relacionadas aos "posts"
import routes from "./src/routes/postsRoutes.js";

// Inicializa a aplicação Express
const app = express();

// Define o diretório de arquivos estáticos (como imagens ou outros uploads)
app.use(express.static("uploads"));

// Adiciona as rotas importadas ao servidor
routes(app);

// Configura o servidor para escutar na porta 8000
app.listen(8000, () => {
    console.log("Server running on port 8000");
});

