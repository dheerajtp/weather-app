import { useQuery } from "react-query";
import weatherService from "../services/weatherServices";

export const useGetWeatherDetails = (city) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: weatherService.getWeatherDetails,
    enabled: false,
  });
};
