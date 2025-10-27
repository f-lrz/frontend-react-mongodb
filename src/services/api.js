import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor de Requisição: Adiciona o token ao cabeçalho
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de Resposta: Lida com erros globais (como token expirado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Se o erro for 401 (Não Autorizado), o token pode estar expirado ou inválido
    if (error.response && error.response.status === 401) {
      toast.error('Sua sessão expirou. Por favor, faça login novamente.');
      // Remove o token e força o logout
      localStorage.removeItem('token');
      
      // Recarrega a página para redirecionar ao login
      // O ideal é usar o contexto de autenticação, mas isso funciona de forma global
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default api;