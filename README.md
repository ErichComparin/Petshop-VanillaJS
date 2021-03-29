<p align="center">
  <img alt="Tamanho do Repositório" src="https://img.shields.io/github/repo-size/ErichComparin/Petshop-VanillaJS?style=flat-square" />
  
  <img alt="Último commit" src="https://img.shields.io/github/last-commit/ErichComparin/Petshop-VanillaJS?style=flat-square" />
</p>

<h1 align="center">
    🐶 Petshop 😺
</h1>

<!-- 🚧🚧 Em construção 🚧🚧 -->

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#️-status">Status</a> •
 <a href="#️-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

## 💻 Sobre o projeto

CRUD de clientes de um Petshop, utilizando FetchAPI.

---

## 🏃‍♂️ Status

- [x] Concluído

---

## ⚙️ Funcionalidades

- [x] Deve possibilitar o cadastro de clientes pela API
- [x] Deve possibilitar a edição de clientes pela API
- [x] Deve possibilitar exclusão de clientes pela API

---

## 🎨 Layout

- Tela principal
<img alt="Tela principal" src="./readme_imgs/web1.jpg?raw=true">

---

## 🚀 Como executar o projeto

```bash

# Clone este repositório
$ git clone https://github.com/ErichComparin/Petshop-VanillaJS

# Instale as dependências
$ yarn install

# Acesse a pasta admin do projeto
$ cd Petshop-VanillaJS/admin

# Inicie o Json Server
$ json-server --watch db.json

# Em outro terminal, acesse a pasta principal
$ cd..

# Iniciie o Browser Sync
$ browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html

# A aplicação web será aberta na porta 5000 - acesse http://localhost:5000/admin/telas/lista_cliente.html

```

---

## 🛠 Tecnologias

As seguintes tecnologias/ferramentas foram usadas na construção do projeto:

-   **[JavaScript](https://www.javascript.com/)**
-   **[Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)**
-   **[ES6 Modules](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/M%C3%B3dulos)**

---

##  Versões do README

[Português 🇧🇷](./README.md)
