import LogoMark from "@/components/common/LogoMark";
import Button from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/landing";

export default function HeaderSection() {
  return (
    <header className="flex items-center justify-between border-b border-line bg-white px-6 py-4 lg:px-[120px]">
      <LogoMark />
      <nav className="hidden items-center gap-8 text-base leading-6 font-medium text-ink-secondary md:flex">
        {NAV_LINKS.map((link) => (
          <a key={link} href="#" className="hover:text-ink">
            {link}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="hidden text-base leading-6 font-medium text-ink md:block"
        >
          Log in
        </a>
        <Button className="h-12 rounded-lg bg-brand px-6 text-base leading-6 font-semibold hover:bg-brand/90">
          Start free
        </Button>
      </div>
    </header>
  );
}
