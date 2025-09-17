export default function SelectRegion({ setSelectedRegion }) {
    
  return (
    <div>
      <select
        onChange={(e) => setSelectedRegion(e.target.value)} 
        className="w-1/2 p-2 border-1 border-gray-400 rounded-lg mx-5 mb-5"
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