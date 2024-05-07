const data = [
  { time: "8:00 AM", icon: "sun", weather: "Sunny" },
  { time: "10:00 AM", icon: "cloud", weather: "Cloudy" },
  { time: "8:00 AM", icon: "sun", weather: "Sunny" },
  { time: "10:00 AM", icon: "cloud", weather: "Cloudy" },
  { time: "8:00 AM", icon: "sun", weather: "Sunny" },
  { time: "10:00 AM", icon: "cloud", weather: "Cloudy" },
  { time: "8:00 AM", icon: "sun", weather: "Sunny" },
  { time: "10:00 AM", icon: "cloud", weather: "Cloudy" },
  { time: "8:00 AM", icon: "sun", weather: "Sunny" },
  { time: "10:00 AM", icon: "cloud", weather: "Cloudy" },
];

const WeatherCondition = () => {
  return (
    <article className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      <div className="grid grid-cols-5 gap-4">
        {/* Render the first 5 items */}
        {data.slice(0, 5).map((item, index) => (
          <div key={index} className="p-4">
            <div className="text-sm">{item.time}</div>
            <div className="text-sm">{item.icon}</div>
            <div className="text-sm">{item.weather}</div>
          </div>
        ))}

        <div className="col-span-5 my-4 border-t border-gray-400 lg:hidden"></div>

        {data.slice(5).map((item, index) => (
          <div key={index} className="p-4">
            <div className="text-sm">{item.time}</div>
            <div className="text-sm">{item.icon}</div>
            <div className="text-sm">{item.weather}</div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default WeatherCondition;
