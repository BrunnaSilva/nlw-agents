# Agents Server

API REST desenvolvida com Fastify, TypeScript e PostgreSQL para gerenciamento de agentes.

## 🛠️ Tecnologias

- **Runtime**: Node.js com TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL com Drizzle ORM
- **Validação**: Zod
- **Linting**: Biome
- **Containerização**: Docker

## 📁 Estrutura do Projeto

```
src/
├── server.ts          # Configuração do servidor
├── env.ts            # Validação de variáveis de ambiente
├── http/
│   └── routes/       # Rotas da API
└── db/
    ├── connection.ts # Conexão com banco
    ├── schema/       # Schemas do Drizzle
    └── migrations/   # Migrações do banco
```

## 🚀 Setup

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose

### Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd server
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Configure as seguintes variáveis:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. **Suba o banco de dados**
```bash
npm run docker:run
```

5. **Execute as migrações**
```bash
npm run db:migrate
```

6. **Popule o banco (opcional)**
```bash
npm run db:seed
```

## 🏃‍♂️ Comandos

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm start` - Inicia o servidor em produção
- `npm run db:generate` - Gera novas migrações
- `npm run db:migrate` - Executa migrações pendentes
- `npm run db:seed` - Popula o banco com dados iniciais
- `npm run db:show` - Abre o Drizzle Studio

## 📋 Padrões de Projeto

- **Arquitetura**: Clean Architecture com separação de responsabilidades
- **Validação**: Zod para validação de schemas e variáveis de ambiente
- **Database**: Drizzle ORM com migrations automáticas
- **Rotas**: Fastify plugins com tipagem Zod
- **CORS**: Configurado para desenvolvimento local

## 🔗 Endpoints

- `GET /health` - Health check
- `GET /rooms` - Lista todas as salas

## 🐳 Docker

O projeto inclui configuração Docker para PostgreSQL com pgvector:

```bash
docker-compose up -d
```

Acesse o banco em: `postgresql://docker:docker@localhost:5432/agents` 