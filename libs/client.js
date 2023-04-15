import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '6246xfy8cw',
  apiKey: process.env.API_KEY,
});