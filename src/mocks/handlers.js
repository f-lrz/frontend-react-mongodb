import { http, HttpResponse } from 'msw';

// Obtém a URL da API do mesmo local que o aplicativo usa
const VITE_API_URL = import.meta.env.VITE_API_URL;

export const handlers = [
  // 1. Mock para o endpoint de Login (POST /auth/login)
  // Simula uma resposta de sucesso ao fazer login
  http.post(`${VITE_API_URL}/auth/login`, async ({ request }) => {
    const { email } = await request.json();

    // Simula um delay de rede
    await new Promise((res) => setTimeout(res, 500));

    // Retorna um token JWT falso
    return HttpResponse.json({
      message: 'Login (mock) bem-sucedido!',
      token: `mock-jwt-token-for-${email}`,
    });
  }),

  // 2. Mock para o endpoint de Listar Filmes (GET /movies)
  // Simula uma lista de filmes que seria retornada do backend
  http.get(`${VITE_API_URL}/movies`, () => {
    // Simula um delay de rede
    // await new Promise(res => setTimeout(res, 1000));

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

  // Adicione outros handlers aqui (ex: register, create movie, delete movie)
  // Ex: Mock de Registro
  http.post(`${VITE_API_URL}/auth/register`, async () => {
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