import axios from "axios";

export const getPeoples = async ({page}) => {
  return await axios.get(`https://swapi.dev/api/people?page=${page}`)
    .then((res) => {
      return res.data;
    });
};

export const getPeopleById = async ({id}) => {
  return await axios.get(`https://swapi.dev/api/people/${id}`)
    .then((res) => {
      return res.data;
    });
};