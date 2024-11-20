import express from "express";
import { listarPosts } from "../controllers/postsController.js";


const routes = (app) => {
    // Middleware para analisar corpos de requisições JSON
    app.use(express.json());

    // Rota para lidar com requisições GET para o endpoint '/posts'
    app.get("/posts", listarPosts);

}

export default routes;

