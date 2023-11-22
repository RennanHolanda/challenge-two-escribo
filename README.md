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

```
PORT=3000
DB_USER=seu-usuario-dobanco
DB_PASS=sua-senha-de-acesso-do-banco
SECRET=sua-chave-secreta-para-o-JWT
```
## Uso

1. Inicie o servidor: `npm rum start`
2. Acesse a aplicação no seu navegador ou via API.

## Endpoints/API

### Exemplo de endpoints 
- `POST /auth/login`: Faz o login do usuário e retorna um token JWT.
- `POST /auth/register`: Cadastra um novo usuário na aplicação.
- `GET /user/:id`: Retorna informações de um usuário específico.

## Estrutura do projeto

O projeto segue a seguinte estrutura de diretórios:

```
|-- src/
|   |-- controllers/
|   |-- middlewares/
|   |-- middlewares/
|   |-- models/
|   |-- routes/
|-- .env
|-- .gitignore
|-- app.js
|-- package.json
|-- README.md
|-- ...
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou reportar problemas.

