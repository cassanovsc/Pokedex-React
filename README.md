# Pokédex em React

Neste projeto foi desenvolvido a interface de uma Pokédex Pokémon, onde o usuário abre a Pokedéx e consegue ver todos os 
pokémons da primeira geração catalogados em uma lista e uma versão mais amplificada ao selecionar algum em específico.
A principal tecnologia utilizada no projeto é o React, com a utilização de components e hooks.

O objetivo aqui é mostrar parte do conteúdo aprendido no Sprint 2 do Curso de Pós Graduação em Desenvolvimento Full Stack da PUC Rio.

---
## Prototipação de alta fidelidade no Figma

Projeto no Figma:
[https://www.figma.com/file/hsbdrJFlx6RdbGwTrBVWfk/Pokedex?type=design&node-id=23%3A481&mode=design&t=T2X03RFe7ezfXWHd-1](https://www.figma.com/file/hsbdrJFlx6RdbGwTrBVWfk/Pokedex?type=design&node-id=23%3A481&mode=design&t=T2X03RFe7ezfXWHd-1)

Execução da interatividade entre as telas:
[https://www.figma.com/proto/hsbdrJFlx6RdbGwTrBVWfk/Pokedex?type=design&node-id=23-481&t=T2X03RFe7ezfXWHd-0&scaling=scale-down&page-id=3%3A217&starting-point-node-id=23%3A481](https://www.figma.com/proto/hsbdrJFlx6RdbGwTrBVWfk/Pokedex?type=design&node-id=23-481&t=T2X03RFe7ezfXWHd-0&scaling=scale-down&page-id=3%3A217&starting-point-node-id=23%3A481)

---
## Direitos de Imagem Pokémon

No Projeto são utilizadas imagens de pokémons obtidas por um pacote do unpkg e transformadas em base64 para serem lidas diretamente
de um arquivo .json, seu acesso e linceça estão no link: 
https://unpkg.com/browse/pokeapi-sprites@2.0.2/

---
## Como executar

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
$ npm start
```

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.