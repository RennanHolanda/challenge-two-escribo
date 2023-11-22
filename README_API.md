
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