const Filter = ({ handleFilterChange, handleFilterApply, filter }) => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="w-1/3 mb-4">
          <label htmlFor="location" className="block text-gray-700">
            Select Location:
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={filter.location}
            onChange={handleFilterChange}
          >
            <option value="">Select</option>
            <option value="Delhi">Delhi</option>
            <option value="Moscow">Moscow</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Sydney">Sydney</option>
            <option value="Riyadh">Riyadh</option>
          </select>
        </div>

        <div className="w-1/3 mb-4">
          <label htmlFor="fromDate" className="block text-gray-700">
            From Date:
          </label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={filter.fromDate}
            onChange={handleFilterChange}
          />
        </div>

        <div className="w-1/3 mb-4">
          <label htmlFor="toDate" className="block text-gray-700">
            To Date:
          </label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={filter.toDate}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleFilterApply}
      >
        Apply Filter
      </button>
    </>
  );
};

export default Filter;
