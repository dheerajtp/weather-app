import { useState } from "react";
import { useGetWeatherDetails } from "./useWeatherDetails";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useFilter = () => {
  const [filter, setFilter] = useState({
    fromDate: "",
    toDate: "",
    location: "",
  });

  const { isLoading, data, isError, refetch } = useGetWeatherDetails(
    filter.location.trim()
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleFilterApply = () => {
    if (filter.location.trim() === "") {
      toast.error("Please Select A Location");
      return;
    }
    refetch();
  };

  return {
    filter,
    handleFilterChange,
    handleFilterApply,
    isLoading,
    data,
    isError,
    refetch,
  };
};

export default useFilter;
