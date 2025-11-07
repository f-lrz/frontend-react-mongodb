import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Esta configuração exporta um 'worker' configurado com os handlers definidos
export const worker = setupWorker(...handlers);