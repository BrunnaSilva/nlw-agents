# Projeto Rocketseat Agents

Este projeto é composto por duas aplicações principais:
- **server/**: Backend Node.js com TypeScript, Drizzle ORM e Docker.
- **web/**: Frontend React com Vite e TypeScript.

## Tecnologias e Bibliotecas Principais

### Backend (`server/`)
- **Node.js** + **TypeScript**
- **Drizzle ORM**: Mapeamento objeto-relacional para banco de dados.
- **Express** (presumido pelo padrão de rotas HTTP)
- **Docker**: Para ambiente de banco de dados e setup local.

### Frontend (`web/`)
- **React** + **TypeScript**
- **Vite**: Bundler e dev server rápido.
- **React Router DOM**: Gerenciamento de rotas.

## Padrões de Projeto
- Organização modular por domínio (ex: `db/`, `http/routes/`, `pages/`, `components/`).
- Separação clara entre frontend e backend.
- Uso de variáveis de ambiente para configuração.

## Setup do Projeto

### Pré-requisitos
- Node.js >= 18
- Yarn (ou npm)
- Docker (para rodar banco de dados localmente)

### Instruções

#### 1. Clone o repositório
```bash
git clone <url-do-repo>
cd agents
```

#### 2. Setup do Backend
```bash
cd server
yarn install
# Suba o banco de dados
docker-compose up -d
# Rode as migrations e seeds se necessário
# yarn db:migrate
# yarn db:seed
# Inicie o servidor
yarn dev
```

#### 3. Setup do Frontend
```bash
cd ../web
yarn install
yarn dev
```

Acesse o frontend em `http://localhost:5173` (ou porta configurada pelo Vite).

---

> Para configurações avançadas, consulte os arquivos `README.md` de cada subdiretório.
