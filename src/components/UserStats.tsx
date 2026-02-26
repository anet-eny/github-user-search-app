import type { GithubUser } from "../api/github";

interface UserStatsProps {
  repos: GithubUser["public_repos"];
  followers: GithubUser["followers"];
  following: GithubUser["following"];
}

export function UserStats({ repos, followers, following }: UserStatsProps) {
  const stats = [
    { label: "Repos", value: repos },
    { label: "Followers", value: followers },
    { label: "Following", value: following },
  ];

  return (
    <div className="flex justify-around rounded-[0.625rem] bg-(--color-bg-default) px-6 py-4 sm:justify-start sm:gap-16 sm:px-8">
      {stats.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-1 sm:items-start"
        >
          <span className="text-preset-7 text-muted">{label}</span>
          <span className="text-preset-2">{value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}
