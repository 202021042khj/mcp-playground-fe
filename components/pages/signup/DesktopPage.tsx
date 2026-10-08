import AuthHeader from "@/components/common/auth/AuthHeader";
import SignUpFormSection from "@/components/pages/signup/sections/SignUpFormSection";
import ValuePanelSection from "@/components/pages/signup/sections/ValuePanelSection";
import type { UseSignUpLogicResult } from "@/hooks/useSignUpLogic";

export default function DesktopPage(props: UseSignUpLogicResult) {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white font-[family-name:var(--font-inter)]">
      <AuthHeader
        prompt="Already have an account?"
        actionLabel="Log in"
        actionHref="/login"
      />
      <div className="flex flex-1 flex-col md:flex-row">
        <SignUpFormSection {...props} />
        <ValuePanelSection />
      </div>
    </div>
  );
}
