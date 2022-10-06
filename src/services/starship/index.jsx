import axios from "axios";

export const getStarships = async ({page}) => {
  return await axios.get(`starships?page=${page}`)
    .then((res) => {
      return res.data;
    });
};

export const getStarshipById = async ({id}) => {
  return await axios.get(`starships/${id}`)
    .then((res) => {
      return res.data;
    });
};