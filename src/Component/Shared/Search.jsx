

export default function Search({setSearchQuery}) {
  return (
    <div>
      <input
       onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="w-1/2 p-2 border-1 border-gray-400 rounded-lg mx-5 my-5"
        placeholder="Search by name ...."
      />
    </div>
  );
}
