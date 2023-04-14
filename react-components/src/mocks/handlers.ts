import { rest } from 'msw';
import { mockedCard, mockCharactersArray } from './mockData';

export const handlers = [
  rest.get(`https://rickandmortyapi.com/api/character/`, (req, res, ctx) => {
    req.url.searchParams.get('?name=rick');
    return res(ctx.status(200), ctx.json(mockCharactersArray));
  }),

  rest.get(`https://rickandmortyapi.com/api/character/`, (req, res, ctx) => {
    req.url.searchParams.get('?name=');
    return res(ctx.status(200), ctx.json(mockCharactersArray));
  }),

  rest.get(`https://rickandmortyapi.com/api/character/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedCard));
  }),
];
