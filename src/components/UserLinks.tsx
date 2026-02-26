import type { GithubUser } from "../api/github";
import IconCompany from "../assets/icon-company.svg?react";
import IconLocation from "../assets/icon-location.svg?react";
import IconWebsite from "../assets/icon-website.svg?react";

interface UserLinksProps {
  location: GithubUser["location"];
  blog: GithubUser["blog"];
  twitter: GithubUser["twitter_username"];
  company: GithubUser["company"];
}

export function UserLinks({
  location,
  blog,
  twitter,
  company,
}: UserLinksProps) {
  const links = [
    {
      id: "location",
      value: location,
      href: null,
      icon: <IconLocation />,
    },
    {
      id: "blog",
      value: blog || null,
      href: blog ? (blog.startsWith("http") ? blog : `https://${blog}`) : null,
      icon: <IconWebsite />,
    },
    {
      id: "twitter",
      value: twitter ? `@${twitter}` : null,
      href: twitter ? `https://x.com/${twitter}` : null,
      icon: <XIcon />,
    },
    {
      id: "company",
      value: company,
      href: null,
      icon: <IconCompany />,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {links.map(({ id, value, href, icon }) => {
        const isEmpty = !value;
        return (
          <div
            key={id}
            className={`flex items-center gap-3 text-preset-7 ${
              isEmpty ? "text-muted" : "text-(--color-text-primary)"
            }`}
          >
            <span
              className={`shrink-0 ${isEmpty ? "opacity-50" : "text-(--color-text-primary)"}`}
            >
              {icon}
            </span>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline truncate"
              >
                {isEmpty ? "Not Available" : value}
              </a>
            ) : (
              <span className="truncate">
                {isEmpty ? "Not Available" : value}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M11.905 8.465L19.369 0h-1.764l-6.476 7.35L6.018 0H0l7.831 11.18L0 20h1.764l6.845-7.765L13.982 20H20L11.905 8.465zm-2.422 2.747l-.793-1.13L2.38 1.3h2.716l5.093 7.28.793 1.13 6.622 9.462h-2.716l-5.405-7.73z" />
    </svg>
  );
}
