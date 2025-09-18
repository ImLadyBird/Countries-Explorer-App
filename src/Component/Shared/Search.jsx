export default function Search({ setSearchQuery }) {
  return (
    <div>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="border border-gray-400 rounded-lg p-2 w-full"
        placeholder="Search by name ...."
      />
    </div>
  );
}
