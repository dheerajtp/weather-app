import axios from "axios";
import { APP_ID } from "../configurations";

const getWeatherDetails = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${queryKey[1]}&appid=${APP_ID}`
    );
    console.log(response, "get weather");
    return response.data;
  } catch (error) {
    console.log("inside error");
    return { status: false };
  }
};

const weatherService = {
  getWeatherDetails,
};

export default weatherService;
