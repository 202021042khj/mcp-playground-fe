import MobileScrollShowcaseSection from "@/components/pages/main/sections/MobileScrollShowcaseSection";

export default function MobilePage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
        <h1 className="text-2xl font-semibold text-foreground">Home</h1>
        <p className="px-6 text-sm text-muted-foreground">
          Scroll down to see each step reveal in turn.
        </p>
      </div>
      <MobileScrollShowcaseSection />
    </div>
  );
}
