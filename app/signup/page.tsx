"use client";

import { useSignUpLogic } from "@/hooks/useSignUpLogic";
import DesktopPage from "@/components/pages/signup/DesktopPage";
import MobilePage from "@/components/pages/signup/MobilePage";

export default function SignUpPage() {
  const logic = useSignUpLogic();

  return (
    <div className="flex flex-1 flex-col">
      <div className="hidden md:flex md:flex-1">
        <DesktopPage {...logic} />
      </div>
      <div className="flex flex-1 md:hidden">
        <MobilePage {...logic} />
      </div>
    </div>
  );
}
