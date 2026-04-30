export default function Search({ search, setSearch }) {
  return (
    <div className="search-box">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Yemek ara..."
      />
    </div>
  );
}