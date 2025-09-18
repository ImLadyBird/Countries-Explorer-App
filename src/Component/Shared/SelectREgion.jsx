export default function SelectRegion({ setSelectedRegion }) {
  return (
    <div>
      <select
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="w-full border border-gray-400 rounded-lg p-2"
      >
        <option value="">Select Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
