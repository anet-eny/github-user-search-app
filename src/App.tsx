import "./styles/index.css";
import { SearchBar } from "./components/SearchBar";
import { useGithubUser } from "./hooks/useGithubUser";
import { ThemeToggle } from "./components/ThemeToggle";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { data, status, error, fetch: fetchUser } = useGithubUser();
  const { theme, toggle } = useTheme();

  return (
    <>
      <div className="min-h-screen bg-(--color-bg-default) transition-colors duration-300">
        <main className="mx-auto max-w-182.5 px-6 py-8">
          <header className="flex items-center justify-between mb-9">
            <h1 className="text-preset-1">devfinder</h1>
            <ThemeToggle theme={theme} onToggle={toggle} />
          </header>

          <SearchBar
            onSearch={fetchUser}
            error={error}
            isLoading={status === "loading"}
          />
        </main>
      </div>
    </>
  );
}

export default App;
