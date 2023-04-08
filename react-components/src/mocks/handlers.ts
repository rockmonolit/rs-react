import { rest } from 'msw';

const mockCharacter = {
  id: 1,
  name: 'test name',
  status: 'test status',
  species: 'test species',
  type: 'test type',
  gender: 'test gender',
  origin: {
    name: 'test origin name',
    url: 'test origin url',
  },
  location: {
    name: 'test location name',
    url: 'test location url',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/232.jpeg',
  episode: ['test episode one', 'test episode two'],
  url: 'test url',
  created: 'test created',
};

const mockCharactersArray = [mockCharacter, mockCharacter];

export const handlers = [
  rest.get(`https://rickandmortyapi.com/api/character/?name=rick`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCharactersArray));
  }),

  rest.get(`https://rickandmortyapi.com/api/character/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCharacter));
  }),
];
