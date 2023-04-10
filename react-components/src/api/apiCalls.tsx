import { Dispatch, SetStateAction } from 'react';
import { CharacterInfo, RickApiResponse, RickApiError } from '../types/types';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export async function fetchApiCharacters(
  value: string,
  {
    setCharacterCards,
    setError,
    setLoading,
    setCharacters,
  }: {
    setCharacterCards: Dispatch<SetStateAction<CharacterInfo[]>>;
    setError: Dispatch<SetStateAction<string>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setCharacters: Dispatch<SetStateAction<CharacterInfo[]>>;
  }
) {
  setLoading(true);
  fetch(`${BASE_URL}?name=${value}`)
    .then((res) => {
      if (res.status === 404) {
        setError('Nothing was found =(\n Please, try again!');
        localStorage.setItem('inputValue', '');
        localStorage.setItem('savedInputValue', '');
      } else if (res.status !== 404) {
        setError('');
      }
      return res.json();
    })
    .then(
      (result: RickApiResponse) => {
        setLoading(false);
        setCharacters(result.results);
        return result;
      },
      (error: RickApiError) => {
        setError(error.message);
      }
    )
    .then((characters: void | RickApiResponse) => {
      if (characters) setCharacterCards(characters.results);
    })
    .catch((error: RickApiError) => {
      console.log(error.message);
    });
}

export async function fetchApiCharacter(
  id: number,
  {
    setLoading,
    setModalContent,
    setError,
  }: {
    setLoading: Dispatch<SetStateAction<boolean>>;
    setModalContent: Dispatch<SetStateAction<CharacterInfo | undefined>>;
    setError: Dispatch<SetStateAction<string>>;
  }
) {
  fetch(`${BASE_URL}${id}`)
    .then((res) => res.json())
    .then(
      (result: CharacterInfo) => {
        setLoading(false);
        setModalContent(result);
      },
      (error: RickApiError) => {
        setError(error.message);
      }
    )
    .catch((error: RickApiError) => {
      console.log(error.message);
    });
}
