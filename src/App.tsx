import "./styles/index.css";
import { useGithubUser } from "./hooks/useGithubUser";
import { useTheme } from "./hooks/useTheme";
import { SearchBar } from "./components/SearchBar";
import { ThemeToggle } from "./components/ThemeToggle";
import { UserCard } from "./components/UserCard";
import type { GithubUser } from "./api/github";

const INITIAL_USER: GithubUser = {
  login: "octocat",
  name: "The Octocat",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  html_url: "https://github.com/octocat",
  bio: null,
  public_repos: 8,
  followers: 9400,
  following: 9,
  location: "San Francisco, CA",
  blog: "https://github.blog",
  twitter_username: null,
  company: "@github",
  created_at: "2011-01-25T18:44:36Z",
};

function App() {
  const { data, status, error, fetch: fetchUser } = useGithubUser();
  const { theme, toggle } = useTheme();

  const user = data ?? INITIAL_USER;

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
          <UserCard user={user} />
        </main>
      </div>
    </>
  );
}

export default App;
