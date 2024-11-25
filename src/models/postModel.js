import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Conecta ao banco de dados 'imersao-instabytes'
    const db = conexao.db("imersao-instabytes");

    // Seleciona a coleção 'posts'
    const colecao = db.collection("posts");

    // Encontra todos os posts e retorna como um array
    return colecao.find().toArray();
};

export async function criarPost(novoPost) {
    
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);

};

export async function atualizarPost(id, novoPost) {
    
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost});

};
