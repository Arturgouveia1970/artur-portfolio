import { profile } from "@/data/content";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f10]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-sm font-semibold tracking-[0.28em] text-[#f5f3ee]">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#b8b8b8] transition hover:text-[#f5f3ee]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#c7b9a5]/40 px-4 py-2 text-sm text-[#f5f3ee] transition hover:border-[#c7b9a5] hover:bg-[#c7b9a5] hover:text-[#0f0f10]"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}