import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizaNovopost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    // Middleware para analisar corpos de requisições JSON
    app.use(express.json());
    app.use(cors(corsOptions))
    // Rota para lidar com requisições GET para o endpoint '/posts'
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)
    app.put("/upload/:id", atualizaNovopost)

};

export default routes;

