# Sistema simples de login com autenticação de token

Descrição curta do que a aplicação faz.

## Pré-requisitos

- Node.js instalado
- MongoDB instalado ou acesso a um banco de dados MongoDB remoto, foi ultilizado o Atlas no mesmo.
- Um editor de texto ou IDE (recomendado: Visual Studio Code)

## Configuração

1. Clone o repositório: `https://github.com/RennanHolanda/challenge-two-escribo.git`
2. Navegue até o diretório do projeto: `challenge-two-escribo`
3. Instale as dependências: `npm install`

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

PORT=3000
DB_USER=seu-usuario-dobanco
DB_PASS=sua-senha-de-acesso-do-banco
SECRET=sua-chave-secreta-para-o-JWT

## Uso

1. Inicie o servidor: `npm start`
2. Acesse a aplicação no seu navegador ou via API.

## Endpoints/API

### Exemplo de endpoints 
- `POST /auth/login`: Faz o login do usuário e retorna um token JWT.
- `POST /auth/register`: Cadastra um novo usuário na aplicação.
- `GET /user/:id`: Retorna informações de um usuário específico.

## Estrutura do Projeto

Explicação da estrutura de pastas e arquivos do projeto.

challenge-two-escribo/
│
├── controllers/
│ └── ... # Arquivos de controle da lógica da aplicação
├── middlewares/
│ └── ... # Arquivos de verificação de autenticação da aplicação
│
├── models/
│ └── ... # Esquemas e modelos do Mongoose
│
├── routes/
│ └── ... # Definição das rotas da API
│
├── .env.sample
├── .gitignore
├── package.json
├── app.js
└── README.md

