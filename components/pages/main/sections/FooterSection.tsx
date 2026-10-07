import LogoMark from "@/components/common/LogoMark";
import { FOOTER_COLUMNS, FOOTER_LEGAL_LINKS } from "@/constants/landing";

export default function FooterSection() {
  return (
    <footer className="flex flex-col gap-12 bg-night px-6 pt-16 pb-12 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-12 md:flex-row">
        <div className="flex flex-col gap-4">
          <LogoMark inverse />
          <p className="w-[280px] text-base leading-6 text-night-muted">
            Automate the work that slows your team down.
          </p>
        </div>
        <div className="flex gap-12 text-sm leading-5 md:gap-24">
          {FOOTER_COLUMNS.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-3">
              <p className="font-semibold text-white">{title}</p>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-night-muted hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto h-px w-full max-w-[1200px] bg-night-line" />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-2 text-sm leading-5 text-night-muted md:flex-row">
        <p>© 2026 Flowly, Inc. All rights reserved.</p>
        <p className="whitespace-pre">{FOOTER_LEGAL_LINKS.join("  ·  ")}</p>
      </div>
    </footer>
  );
}
