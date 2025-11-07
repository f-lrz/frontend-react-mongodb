# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Mock Service Worker (MSW) Setup

Este projeto usa MSW para simular a API em ambiente de desenvolvimento.

**Como funciona?**
* Em ambiente de desenvolvimento (`npm run dev`), o MSW intercepta as chamadas de rede (definidas em `src/services/api.js`) e retorna respostas mocadas.
* Os mocks estão definidos em `src/mocks/handlers.js`.
* Em produção (`npm run build`), o MSW é desativado e as chamadas reais são feitas para a API.

**Ativar/Desativar MSW**
* O MSW é ativado por padrão em desenvolvimento (`import.meta.env.DEV`).
* Para desativar temporariamente o MSW e usar a API real em desenvolvimento, comente a chamada `enableMocking()` em `src/main.jsx`.