import axios from "axios";

export const maxId = {
  episode: 51,
  character: 826,
}


export const apiRoutes = {
  character: (id:number[])=> `/character/[${id}]`,
  episode: (id:number[])=> `/episode/[${id}]`,
}

export const RiMoApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
})