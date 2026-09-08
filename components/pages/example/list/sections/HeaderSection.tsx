interface HeaderSectionProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
}

export default function HeaderSection({
  searchTerm,
  onSearchTermChange,
}: HeaderSectionProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-border px-4 py-6 md:px-8 md:py-10">
      <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
        Posts
      </h1>
      <p className="max-w-xl text-sm text-muted-foreground md:text-base">
        Placeholder posts demonstrating the desktop/mobile split and section
        composition convention.
      </p>
      <input
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder="Search posts..."
        className="w-full max-w-sm rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}
