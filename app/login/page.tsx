"use client";

import { useLogInLogic } from "@/hooks/useLogInLogic";
import DesktopPage from "@/components/pages/login/DesktopPage";
import MobilePage from "@/components/pages/login/MobilePage";

export default function LogInPage() {
  const logic = useLogInLogic();

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
