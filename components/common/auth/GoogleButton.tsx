import Button from "@/components/ui/button";

export default function GoogleButton() {
  return (
    <Button
      type="button"
      variant="outlined"
      color="black"
      className="h-[50px] w-full rounded-lg border-line px-6 text-base leading-6 font-semibold text-ink hover:bg-surface-subtle"
    >
      Continue with Google
    </Button>
  );
}
