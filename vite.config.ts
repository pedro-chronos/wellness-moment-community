import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O GitHub Pages serve o projeto em /<nome-do-repositorio>/, e nao na raiz
// do dominio. O `base` so vale no build: em desenvolvimento a pagina
// continua em http://localhost:5173/ sem sufixo nenhum.
//
// Se o repositorio for renomeado, este valor precisa acompanhar.
const REPO = 'wellness-moment-community';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${REPO}/` : '/',
  server: {
    port: 5173,
  },
}));
