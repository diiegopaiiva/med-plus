# Sistema de Agendamento de Consultas e Exames

Este projeto é uma API RESTful desenvolvida utilizando o framework Express para gerenciar o agendamento de consultas e exames médicos. O sistema permite que pacientes mantenham seus cadastros atualizados, agendem consultas e associem essas consultas a médicos cadastrados. Além disso, a aplicação mantém um cadastro de médicos e clínicas de Brasília.

## Funcionalidades

- CRUD (Create, Read, Update, Delete) de Pacientes
- CRUD de Médicos
- CRUD de Clínicas
- CRUD de Consultas
- Autenticação e autorização de usuários
- Validação de regras de negócio para garantir a integridade dos dados

## Tecnologias Utilizadas

- Node.js
- Express.js
- SQL
- JWT (JSON Web Token) para autenticação
- Bcrypt.js para hash de senhas
- Nodemailer para envio de e-mails
- Node-cron para agendamento de tarefas
- Jest para testes unitários
- Swagger para documentação da API

## Estrutura do Projeto

- **/controllers**: Contém os controladores que implementam a lógica das operações CRUD.
- **/models**: Contém os modelos Mongoose que representam os dados no banco de dados.
- **/routes**: Contém as definições das rotas da API.
- **/middlewares**: Contém os middlewares para autenticação e validação.
- **/config**: Contém as configurações da aplicação, como a conexão com o banco de dados.
- **/tests**: Contém os testes unitários.

## Instalação e Execução

### Pré-requisitos

- Node.js e npm
- SQL

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/diiegopaiiva/pi-back.git
   cd pi-back

2. Instale as dependências:
   ```bash
   npm install

3. Configure as variáveis de ambiente no arquivo `.env`.

4. Inicie o servidor:
   ```bash
   npm start

## Equipe
- Diego
- Fillipe
- Guilherme
- Kauã

Aqui estão armazenados os códigos correspondentes às atividades práticas. Essas práticas visam fortalecer os conceitos aprendidos em sala, proporcionando oportunidades para aplicação e exercício das habilidades adquiridas.
