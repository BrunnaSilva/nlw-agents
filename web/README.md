# Projeto Web

Projeto front-end utilizando React, Vite e TypeScript.

## Principais Bibliotecas
- **React**: Biblioteca principal para construção da interface.
- **Vite**: Bundler e servidor de desenvolvimento rápido.
- **TypeScript**: Tipagem estática para JavaScript.
- **React Router DOM**: Roteamento SPA.
- **@tanstack/react-query**: Gerenciamento de dados assíncronos.
- **TailwindCSS**: Utilitário para estilização CSS.
- **@radix-ui/react-slot** e **lucide-react**: Componentes de UI e ícones.
- **class-variance-authority**, **clsx**, **tailwind-merge**: Utilitários para manipulação de classes CSS.

## Padrões de Projeto
- **Componentização**: Componentes reutilizáveis em `src/components`.
- **Pages**: Páginas em `src/pages`.
- **Hooks e utils**: Funções utilitárias e hooks customizados em `src/lib`.
- **Estilização**: TailwindCSS e utilitários para composição de classes.

## Setup do Projeto
1. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```
2. **Rode o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
3. **Build para produção:**
   ```bash
   npm run build
   # ou
   yarn build
   ```
4. **Preview do build:**
   ```bash
   npm run preview
   # ou
   yarn preview
   ```

## Configurações
- **TailwindCSS**: Configurado via `tailwind.config.js` e integrado ao Vite.
- **TypeScript**: Configurações em `tsconfig.json`.
- **Biome**: Linter e formatter configurado via `biome.jsonc`.

---

Para mais detalhes, consulte os arquivos de configuração no projeto.
