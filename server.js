import express from "express";
import routes from "./src/routes/postRoutes.js";


const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Gato fofo dormindo",
      imagem: "https://placecats.com/sleepy/400/200"
    },
    {
      id: 3,
      descricao: "Gatinho brincando com um novelo de lã",
      imagem: "https://placecats.com/playful/500/250"
    },
    {
      id: 4,
      descricao: "Olhos de gato brilhando no escuro",
      imagem: "https://placecats.com/night/300/300"
    },
    {
      id: 5,
      descricao: "Gato curioso olhando pela janela",
      imagem: "https://placecats.com/curious/200/200"
    },
    {
      id: 6,
      descricao: "Gato ronronando no colo",
      imagem: "https://placecats.com/cozy/400/300"
    }
];


const app = express();
routes(app)


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});





