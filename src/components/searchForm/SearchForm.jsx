import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  let isSubmitting = navigate.state;
  console.log(isSubmitting, "state");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  //   const handleClick = () => {
  //     setSearchParams({ q: "vite", lang: "ru" },false);
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
