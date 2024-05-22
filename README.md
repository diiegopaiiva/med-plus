# Projeto: Gerenciador de Tarefas

## Descrição

O Gerenciador de Tarefas é uma aplicação que permite aos usuários criar, visualizar, atualizar e excluir tarefas. Cada tarefa pode ter um título, descrição, status (a fazer, em progresso, concluído) e data de vencimento.

## Tecnologias usadas

- Backend: Node.js com Express
- Banco de Dados: MongoDB
- Autenticação: JWT (JSON Web Tokens) para autenticação de usuários

## Funcionalidades

1.Registro de Usuários:

- Permitir que novos usuários se registrem com nome, email e senha.
  
2.Login de Usuários:

- Permitir que usuários façam login e recebam um token JWT.

3.CRUD de Tarefas:

- Criar Tarefa: Endpoint para criar uma nova tarefa.
- Visualizar Tarefas: Endpoint para listar todas as tarefas de um usuário.
- Atualizar Tarefa: Endpoint para atualizar detalhes de uma tarefa.
- Excluir Tarefa: Endpoint para excluir uma tarefa.

4.Gerenciamento de Status de Tarefas:

- Permitir que o status da tarefa seja atualizado (a fazer, em progresso, concluído).

5.Filtragem e Ordenação:

- Filtrar tarefas por status.
- Ordenar tarefas por data de vencimento.

## Estrutura do Projeto

### Rotas (Endpoints)
- Usuários:

  - POST /register: Registrar um novo usuário.
  - POST /login: Fazer login de um usuário.
    
- Tarefas:

  - POST /tasks: Criar uma nova tarefa.
  - GET /tasks: Listar todas as tarefas do usuário logado.
  - GET /tasks/:id: Obter detalhes de uma tarefa específica.
  - PUT /tasks/:id: Atualizar uma tarefa existente.
  - DELETE /tasks/:id: Excluir uma tarefa.

## Membros da Equipe:

- Diego
- Fillipe
- Guilherme
- Kauã

  
Aqui estão armazenados os códigos correspondentes às atividades práticas. Essas práticas visam fortalecer os conceitos aprendidos em sala, proporcionando oportunidades para aplicação e exercício das habilidades adquiridas.




