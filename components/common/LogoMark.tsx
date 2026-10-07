import { cn } from "@/lib/utils";

interface Props {
  inverse?: boolean;
}

export default function LogoMark({ inverse }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-8 items-center justify-center rounded-lg bg-brand text-base font-bold text-white">
        F
      </div>
      <span
        className={cn(
          "text-[22px] leading-[30px] font-bold",
          inverse ? "text-white" : "text-ink",
        )}
      >
        Flowly
      </span>
    </div>
  );
}
