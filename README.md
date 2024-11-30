### Imersão Dev Back-End Alura com Gemini
Uma imersão em que fizemos um back-end de um site de fotos no estilo instagram <br>
##

Get todos os post
```
[GET](https://instalike-back-539501509264.southamerica-east1.run.app/posts)
```
Envia Descrição, alt, imgUrl
```
[POST](https://instalike-back-539501509264.southamerica-east1.run.app/upload)
{
    "descricao": "teste",
    "alt": "alt teste",
    "imgUrl": "https://placecats.com/neo_2/300/200"
}
```
Post de uma imagem
```
[POST](https://instalike-back-539501509264.southamerica-east1.run.app/upload)
```
Atualiza imagem para criar uma descrição da imagem pela api do Gemini
```
{
    "alt": "alt teste"    
}
[PUT](https://instalike-back-539501509264.southamerica-east1.run.app/upload/[ID])
```
