import AuthHeader from "@/components/common/auth/AuthHeader";
import LogInFormSection from "@/components/pages/login/sections/LogInFormSection";
import ReleasePanelSection from "@/components/pages/login/sections/ReleasePanelSection";
import type { UseLogInLogicResult } from "@/hooks/useLogInLogic";

export default function DesktopPage(props: UseLogInLogicResult) {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white font-[family-name:var(--font-inter)]">
      <AuthHeader
        prompt="Don't have an account?"
        actionLabel="Sign up"
        actionHref="/signup"
      />
      <div className="flex flex-1 flex-col md:flex-row">
        <LogInFormSection {...props} />
        <ReleasePanelSection />
      </div>
    </div>
  );
}
