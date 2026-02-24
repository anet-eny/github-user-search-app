import { useState } from "react";
import IconSearch from "../assets/icon-search.svg?react";

interface SearchBarProps {
  onSearch: (username: string) => Promise<void>;
  error: string | null;
  isLoading: boolean;
}

export function SearchBar({ onSearch, error, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card flex items-center gap-2 px-3 py-3 sm:px-6"
    >
      <IconSearch className="icon" width={24} height={24} />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub username…"
        aria-label="Search GitHub username"
        className="
          flex-1 min-w-0 bg-transparent outline-none
          text-preset-4 text-(--color-text-primary)
          placeholder:text-(--color-text-primary)
          caret-(--color-accent)
        "
      />

      {error && (
        <span
          role="alert"
          className="text-preset-7 text-error shrink-0 font-bold"
        >
          {error}
        </span>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="
          shrink-0 rounded-[0.625rem] px-4 py-3 sm:px-6
          bg-(--color-accent) text-neutral-0
          text-preset-7 font-bold
          hover:bg-blue-300 transition-colors duration-200
          disabled:opacity-70 disabled:cursor-not-allowed
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-(--color-accent)
        "
      >
        {isLoading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
