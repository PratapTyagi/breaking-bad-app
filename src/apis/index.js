import axios from "axios";

const url = "https://breakingbadapi.com/api";

export const ApiData = async () => {
  try {
    const { data } = await axios.get(`${url}/characters`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
