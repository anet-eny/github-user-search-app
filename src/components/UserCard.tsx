import type { GithubUser } from "../api/github";
import { UserStats } from "./UserStats";
import { UserLinks } from "./UserLinks";

interface UserCardProps {
  user: GithubUser;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function UserCard({ user }: UserCardProps) {
  return (
    <article className="card mt-4 p-6 sm:p-10">
      <div className="flex gap-5 sm:gap-10">
        {/* Avatar */}
        <img
          src={user.avatar_url}
          alt={`${user.login} avatar`}
          className="h-17.5 w-17.5 rounded-full sm:h-29.25 sm:w-29.25"
        />

        {/* Header */}
        <div className="flex flex-col justify-center sm:justify-between sm:flex-row sm:items-start sm:flex-1">
          <div>
            <h2 className="text-preset-1">{user.name ?? user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-preset-4 text-accent hover:underline"
            >
              @{user.login}
            </a>
          </div>
          <p className="text-preset-7 text-muted mt-1 sm:mt-0">
            Joined {formatDate(user.created_at)}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className={`mt-6 text-preset-4 ${!user.bio ? "text-muted" : ""}`}>
        {user.bio ?? "This profile has no bio"}
      </p>

      {/* Stats */}
      <div className="mt-6">
        <UserStats
          repos={user.public_repos}
          followers={user.followers}
          following={user.following}
        />
      </div>

      {/* Links */}
      <div className="mt-6">
        <UserLinks
          location={user.location}
          blog={user.blog}
          twitter={user.twitter_username}
          company={user.company}
        />
      </div>
    </article>
  );
}
