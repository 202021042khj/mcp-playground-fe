interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="flex max-w-[760px] flex-col items-center gap-4 text-center">
      <p className="text-sm leading-5 font-semibold tracking-[0.08em] text-brand">
        {eyebrow}
      </p>
      <h2 className="text-3xl leading-tight font-bold tracking-[-0.01em] text-ink md:text-[40px] md:leading-[48px]">
        {title}
      </h2>
      <p className="max-w-[640px] text-lg leading-[30px] text-ink-secondary md:text-xl">
        {description}
      </p>
    </div>
  );
}
