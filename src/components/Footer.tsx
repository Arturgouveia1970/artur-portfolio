import { profile } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#b8b8b8] md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {profile.name}. Built with Next.js, TypeScript and Tailwind
          CSS.
        </p>

        <div className="flex gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#f5f3ee]"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#f5f3ee]"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${profile.email}?subject=Portfolio enquiry`}
            className="transition hover:text-[#f5f3ee]"
            >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}