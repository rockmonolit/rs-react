import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CharacterInfo, RickApiResponse, RickApiError } from '../types/types';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export const rickApi = createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query<CharacterInfo, string>({
      query: (name) => `?name=${name}`,
    }),
  }),
})

export const { useGetCharacterByNameQuery } = rickApi