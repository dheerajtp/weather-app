const CurrentTemperature = ({ main, icon, name, temp }) => {
  return (
    <article className="rounded-lg border bg-orange-300 p-4 shadow-sm transition hover:shadow-lg sm:p-6 h-full">
      Today
      <div className="flex flex-row gap-6">
        <h1>{icon}</h1>
        <h1>{temp}</h1>
      </div>
      <div className="flex flex-col gap-3">
        <p>{main}</p>
        <p>{name}</p>
      </div>
    </article>
  );
};

export default CurrentTemperature;
