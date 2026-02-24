import { useState, useCallback } from "react";
import { fetchGithubUser, type GithubUser } from "../api/github";

type Status = "idle" | "loading" | "success" | "error";

interface UseGithubUserReturn {
  data: GithubUser | null;
  status: Status;
  error: string | null;
  fetch: (username: string) => Promise<void>;
}

export function useGithubUser(): UseGithubUserReturn {
  const [data, setData] = useState<GithubUser | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async (username: string) => {
    const trimmed = username.trim();
    if (!trimmed) return;

    setStatus("loading");
    setError(null);

    try {
      const user = await fetchGithubUser(trimmed);
      setData(user);
      setStatus("success");
    } catch (err) {
      setData(null);
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }, []);

  return { data, status, error, fetch };
}
