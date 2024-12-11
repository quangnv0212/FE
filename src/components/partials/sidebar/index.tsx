"use client";
import React from "react";
import { useSidebar, useThemeStore } from "@/store/store";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import ModuleSidebar from "./module";
import PopoverSidebar from "./popover";
import ClassicSidebar from "./classic";
import MobileSidebar from "./mobile-sidebar";

const Sidebar = ({ trans }: { trans: string }) => {
  const { sidebarType, collapsed } = useSidebar();

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  let selectedSidebar = null;

  if (!isDesktop ) {
    selectedSidebar = <MobileSidebar trans={trans} />;
  } else {
    const sidebarComponents: { [key: string]: React.ReactNode } = {
      module: <ModuleSidebar trans={trans} />,
      popover: <PopoverSidebar trans={trans} />,
      classic: <ClassicSidebar trans={trans} />,
    };

    selectedSidebar = sidebarComponents[sidebarType] || (
      <ModuleSidebar trans={trans} />
    );
  }

  return (
    <div>
      <MobileSidebar trans={trans} />
    </div>
  );
};

export default Sidebar;
