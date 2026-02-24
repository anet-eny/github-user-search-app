export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
  created_at: string;
}

const BASE_URL = "https://api.github.com";

export async function fetchGithubUser(username: string): Promise<GithubUser> {
  const res = await fetch(`${BASE_URL}/users/${username}`);
  if (res.status === 404) throw new Error("No results");
  if (!res.ok) throw new Error("Something went wrong");
  return res.json();
}
