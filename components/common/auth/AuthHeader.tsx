import LogoMark from "@/components/common/LogoMark";
import LinkButton from "@/components/ui/link-button";

interface Props {
  prompt: string;
  actionLabel: string;
  actionHref: string;
}

export default function AuthHeader({ prompt, actionLabel, actionHref }: Props) {
  return (
    <header className="flex items-center justify-between border-b border-line bg-white px-6 py-4 lg:px-[120px]">
      <LogoMark href="/" />
      <div className="flex items-center gap-6">
        <span className="hidden text-base leading-6 text-ink-secondary md:block">
          {prompt}
        </span>
        <LinkButton
          href={actionHref}
          variant="outlined"
          color="black"
          className="h-[50px] rounded-lg border-line px-6 text-base leading-6 font-semibold text-ink hover:bg-surface-subtle"
        >
          {actionLabel}
        </LinkButton>
      </div>
    </header>
  );
}
