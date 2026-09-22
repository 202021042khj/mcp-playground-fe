import DesktopScrollShowcaseSection from "@/components/pages/main/sections/DesktopScrollShowcaseSection";

export default function DesktopPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col items-center justify-center gap-2 py-24 text-center">
        <h1 className="text-3xl font-semibold text-foreground">Home</h1>
        <p className="text-sm text-muted-foreground">
          Scroll down to see a pinned scroll-scrubbed section.
        </p>
      </div>
      <DesktopScrollShowcaseSection />
    </div>
  );
}
