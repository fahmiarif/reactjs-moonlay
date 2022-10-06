import axios from "axios";

export const getPlanets = async ({page}) => {
  return await axios.get(`https://swapi.dev/api/planets?page=${page}`)
    .then((res) => {
      return res.data;
    });
};

export const getPlanetById = async ({id}) => {
  return await axios.get(`https://swapi.dev/api/planets/${id}`)
    .then((res) => {
      return res.data;
    });
};