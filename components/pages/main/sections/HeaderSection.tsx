import Link from "next/link";

import LogoMark from "@/components/common/LogoMark";
import ScrollLink from "@/components/common/ScrollLink";
import LinkButton from "@/components/ui/link-button";
import { NAV_LINKS } from "@/constants/landing";

export default function HeaderSection() {
  return (
    <header className="flex items-center justify-between border-b border-line bg-white px-6 py-4 lg:px-[120px]">
      <LogoMark href="/" />
      <nav className="hidden items-center gap-8 text-base leading-6 font-medium text-ink-secondary md:flex">
        {NAV_LINKS.map(({ label, section }) =>
          section ? (
            <ScrollLink key={label} section={section} className="hover:text-ink">
              {label}
            </ScrollLink>
          ) : (
            <a key={label} href="#" className="hover:text-ink">
              {label}
            </a>
          ),
        )}
      </nav>
      <div className="flex items-center gap-6">
        <Link
          href="/login"
          className="hidden text-base leading-6 font-medium text-ink md:block"
        >
          Log in
        </Link>
        <LinkButton
          href="/signup"
          className="h-12 rounded-lg bg-brand px-6 text-base leading-6 font-semibold hover:bg-brand/90"
        >
          Start free
        </LinkButton>
      </div>
    </header>
  );
}
