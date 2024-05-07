import React from "react";
import CurrentTemperature from "./components/CurrentTemperature";
import WeatherCondition from "./components/WeatherCondition";
import WeatherDescription from "./components/WeatherDescription";
import Filter from "./components/Filter";
import Loading from "./components/Loading";
import useFilter from "./hooks/useFilter";
import Error from "./components/Error";

const App = () => {
  let {
    filter,
    handleFilterChange,
    handleFilterApply,
    isLoading,
    data,
    isError,
  } = useFilter();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <div className="container mx-auto p-6">
      <Filter
        handleFilterChange={handleFilterChange}
        handleFilterApply={handleFilterApply}
        filter={filter}
      />
      {data && data.status !== false && (
        <div className="flex flex-col lg:flex-row py-4 gap-6">
          <div className="lg:w-1/2 flex-1">
            <CurrentTemperature
              main={data?.weather[0]?.main}
              icon={data?.weather[0]?.icon}
              name={data?.name}
              temp={data?.main?.humidity}
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-2">
            <div className="flex-1">
              <WeatherCondition />
            </div>
            <div className="flex-1">
              <WeatherDescription />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
