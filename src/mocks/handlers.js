// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

// A URL base exata que seu frontend está chamando (do seu .env)
const API_URL = 'https://backend-express-mongodb-ii.filipe2025.tech/api';

export const handlers = [
  // 1. Mock para Login (POST)
  // Agora ele vai interceptar a URL absoluta correta
  http.post(`${API_URL}/auth/login`, async ({ request }) => {
    const { email } = await request.json();

    // Simula um delay de rede
    await new Promise((res) => setTimeout(res, 500));

    // Retorna um token JWT falso
    return HttpResponse.json({
      message: 'Login (mock) bem-sucedido!',
      token: `mock-jwt-token-for-${email}`,
    });
  }),

  // 2. Mock para Listar Filmes (GET)
  http.get(`${API_URL}/movies`, () => {
    // Retorna uma lista de filmes mocada
    return HttpResponse.json([
      {
        _id: '60d5f1b3e7a1c72a1c9e3b1a',
        title: 'Inception (Mockado)',
        director: 'Christopher Nolan',
        genre: 'Sci-Fi',
        year: 2010,
        rating: 9,
        watched: true,
      },
      {
        _id: '60d5f1b3e7a1c72a1c9e3b1b',
        title: 'The Matrix (Mockado)',
        director: 'Wachowskis',
        genre: 'Sci-Fi',
        year: 1999,
        rating: 8.7,
        watched: false,
      },
    ]);
  }),

  // 3. Mock de Registro (POST)
  http.post(`${API_URL}/auth/register`, async () => {
    // Simula um delay de rede
    await new Promise((res) => setTimeout(res, 800));

    // Retorna uma resposta de sucesso
    return HttpResponse.json(
      {
        message: 'Usuário (mock) criado com sucesso!',
      },
      { status: 201 }
    );
  }),
];