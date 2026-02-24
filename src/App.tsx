import "./styles/index.css";
import { SearchBar } from "./components/SearchBar";
import { useGithubUser } from "./hooks/useGithubUser";
// import { useTheme } from "./hooks/useTheme";

function App() {
  const { data, status, error, fetch: fetchUser } = useGithubUser();
  // const { theme, toggle } = useTheme();

  return (
    <>
      <SearchBar
        onSearch={fetchUser}
        error={error}
        isLoading={status === "loading"}
      />
    </>
  );
}

export default App;
