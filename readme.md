# Projeto Employee CRUD

Este projeto é um CRUD básico para gerenciar informações de funcionários, utilizando Angular para o frontend e Node.js (com TypeScript) para o backend. Ele integra Firebase para autenticação e Firestore para armazenamento de dados, além de utilizar MongoDB como banco de dados principal.

## Funcionalidades

- **CRUD de Funcionários:** Permite adicionar, listar, editar e remover funcionários.
- **Integração com MongoDB:** Armazena informações de funcionários no MongoDB.
- **Interface de Usuário:** Interface frontend desenvolvida em Angular, seguindo princípios de Material Design.

## Requisitos

- Node.js (v20+)
- Docker e Docker Compose

## Como Rodar o Projeto

1. **Clonar o Repositório:**

    ```bash
      git clone git@github.com:RodrigoBR-dev/employeeCRUD.git
      cd employeeCRUD
      ```

2. **Configuração do Backend:**

    Renomeie o arquivo .env.example para .env e configure suas variáveis de ambiente necessárias para MongoDB


    ```bash
      cd backend
      cp .env.example .env
      ```

3. **Compilação e Execução com Docker:**

    Utilize Docker Compose para compilar e iniciar os serviços do projeto:

    ```bash
      docker-compose up --build -d
      ```
4. Acessar a Aplicação:

    Após iniciar os containers, acesse a aplicação em seu navegador:

   http://localhost:8080
