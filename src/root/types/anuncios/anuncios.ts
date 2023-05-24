
export const GET_ANUNCIOS = 'GET_ANUNCIOS';
export const ADD_ANUNCIO = 'ADD_ANUNCIO';
export const UPDATE_ANUNCIO = 'UPDATE_ANUNCIO';
export const DELETE_ANUNCIO = 'DELETE_ANUNCIO';

export type Anuncio = {
    id: any;
    link: string;
    company: string;
    images: string[]; 
  };


interface GetAnunciosAction {
  type: typeof GET_ANUNCIOS;
  payload: Anuncio[];
}

interface AddAnuncioAction {
  type: typeof ADD_ANUNCIO;
  payload: Anuncio;
}

interface UpdateAnuncioAction {
  type: typeof UPDATE_ANUNCIO;
  payload: Anuncio;
}

interface DeleteAnuncioAction {
  type: typeof DELETE_ANUNCIO;
  payload: string; // ID del anuncio eliminado
}

export type AnunciosActionTypes =
  | GetAnunciosAction
  | AddAnuncioAction
  | UpdateAnuncioAction
  | DeleteAnuncioAction;
