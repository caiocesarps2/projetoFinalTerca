# BookStore 📚

## Índice  
- [Sobre o Projeto](#sobre-o-projeto)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)  
- [Execução do Projeto](#execução-do-projeto)  
- [Testando as Requisições](#Testando-as-Requisições)


---

## Sobre o Projeto  

O Cadastro de Livros é um projeto backend voltado para o gerenciamento de uma livraria. Ele fornece uma API bem estruturada, capaz de atender às necessidades de sistemas modernos no setor de livrarias.

Desenvolvido com tecnologias como **Node.js**, **TypeScript** e **PostgreSQL**, o projeto combina escabilidade e desempenho, garantindo uma solução para operações que exigem disponibilidade e precisão.

---

## Funcionalidades  

- **Autenticação de Usuários**: Criação de usuários e login com validação.  
- **Gestão de Livros**: Adicionar livros ao catálogo da livraria.  

---

## Tecnologias Utilizadas  

- **Node.js**  
- **Express.js**  
- **TypeScript**  
- **PostgreSQL**  
- **Jest** (para testes unitários e de integração).  

---

## Pré-requisitos  

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:  

- **Node.js** (versão 18 ou superior)  
- **PostgreSQL** (para o banco de dados)  
- Editor de código como **VS Code** ou correlatos.  

---

## Instalação  

**1.** Clone o repositório:  

git clone https://github.com/caiocesarps2/projetoFinalTerca


**2.** Acessando a pasta do projeto:

cd LojaLivros


**3. Instalando as dependencias:**

**3.1** -> npm install express pg dotenv
**3.2** -> npm install --save-dev typescript jest @types/jest ts-jest supertest @types/express
**3.3** -> npm install cors

---

## configuração-do-banco-de-dados

**1.** Certifique-se de que o PostgreSQL está em execução. 

**2.** Configure a conexão no arquivo no qual está localizado em src/config/dataBase.ts.

**OBS:** é necessario trocar a chave de conexão para que não tenha erro na execução do banco de dados.

**3.** Carregando as tabelas do banco de dados.


**Criando  a tabela de livros:**

npx ts-node LojaLivros/src/migrations/bookMigrations.ts

**Criando a tabela de Usuários:**
npx ts-node LojaLivros/src/migrations/migrations.ts

---

# execução-do-projeto

Após realizar todos os passos acima vamos para a execução do Projeto.

**Iniciando o servidor**
npx ts-node LojaLivros/src/server.ts

---

# Testando-as-Requisições

As requisições podem ser realizadas utilizando o arquivo requests.http. Para isso, é necessário instalar a extensão REST Client no seu editor de código.

Alternativamente, você pode utilizar os comandos curl abaixo diretamente no terminal para interagir com a API. 

OBS: Necessário estar com o servidor rodando.


**1.** Consulta dos Usuários:

curl -X GET http://localhost:3000/users

**2.** Registro de Usuários:

curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"name": "Jeremias", "email": "jeremias@example.com", "password": "senhaSeguraa"}'


**3.** Login de Usuário:

curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email": "Jeremias@example.com", "password": "senhaSeguraa"}'


**4.** Consulta de Livros: 

curl -X GET http://localhost:3000/books

**5..** Registro de Livros:

curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "Isaías 54:17", "author": "Isaías", "price": "59.90"}'


**TESTANDO COM SOLICITAÇÕES NO HTML UTILIZANDO A API NO JAVASCRIPT  (OBS: Necessário estar com o servidor do back-end rodando)**

**COM O SERVIDOR JÁ INICIADO**

**Realize os seguintes passos:**

- Abra o arquivo register.html com o OpenLiveServer.
<br>
- Após isso faça os testes, como registro, login e cadastro dos livros!

