"use client";

import { DesktopHeader } from "../VersionHeader/DesktopHeader";
import { MobileHeader } from "../VersionHeader/MobileHeader";

export function Header() {
  return (
    <div>
      <MobileHeader />

      <DesktopHeader />
    </div>
  );
}
