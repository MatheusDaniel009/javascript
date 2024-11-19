import express from "express";

const posts = [
    {
        id: 1,
        descricao: "gato",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "triste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        descricao: "cat",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 4,
        descricao: "bad",
        imagem: "https://placecats.com/millie/300/150",
    }
];

const app = express();
app.use(express.json());

app.listen(8000,()=>{
    console.log("serve on");
});

app.get("/posts", (req, res) =>{
    res.status(200).json(posts);
});

function buscaPostId(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
}

app.get("/post/:id", (req, res) =>{
    const index = buscaPostId(req.params.id);
    res.status(200).json(posts[index]);
});
