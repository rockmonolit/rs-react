export interface CharacterInfo {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface RickApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: CharacterInfo[];
}

export interface RickApiError {
  message: string;
}

export interface FormCardProps {
  name: string;
  date: string;
  hasWeapon: boolean;
  preferredSide: string;
  homePlanet: string;
  picture: string;
}

export type Errors = {
  name: string;
  date: string;
  weapon: string;
  side: string;
  planet: string;
  photo: string;
};

export interface NewFormCardProps {
  name: string;
  date: string;
  hasWeapon: boolean;
  preferredSide: string;
  homePlanet: string;
  picture: File[];
}

export type FormState = {
  cards: FormCardProps[];
  errorMessages: Errors;
  isSubmitted: boolean;
};
