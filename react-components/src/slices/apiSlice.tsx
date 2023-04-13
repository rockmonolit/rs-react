import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterInfo, RickApiResponse } from '../types/types';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export const rickApi = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query<RickApiResponse, string>({
      query: (name) => `?name=${name}`,
    }),
    getCharacterById: builder.query<CharacterInfo, number>({
        query: (id) => `${id}`,
      }),
  }),
});

export const { useGetCharacterByNameQuery, useGetCharacterByIdQuery } = rickApi;
