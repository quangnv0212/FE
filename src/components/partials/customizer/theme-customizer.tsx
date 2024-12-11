"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useThemeStore } from "@/store/store";
import Link from "next/link";
import FooterStyle from "./footer-style";
import HeaderStyle from "./header-style";
import RadiusInit from "./radius";
import RtlSwitcher from "./rtl-switch";
import SelectLayout from "./select-layout";
import SelectTheme from "./select-theme";
import SidebarChange from "./sidebar-change";
import SidebarImage from "./sidebar-image";
import ThemeChange from "./theme-change";
import { Settings } from "lucide-react";

const ThemeCustomize = ({
  trigger = (
    <div className="fixed ltr:right-4 rtl:left-4 bottom-14 z-50">
      <Button size="icon" className=" relative h-12 w-12  rounded-full ">
        <Settings className="h-7 w-7 animate-spin" />
      </Button>
    </div>
  ),
}) => {
  const { isRtl } = useThemeStore();

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side={isRtl ? "left" : "right"}
        overlayClass=" bg-transparent backdrop-blur-none"
        className="lg:w-3/4 w-full max-w-full md:max-w-sm px-6 pt-0 pb-6"
      >
        <SheetHeader className=" text-start border-b -mx-6 px-6 py-4 shadow-sm md:shadow-none">
          <SheetTitle className=" text-base  font-medium ">
            Theme Customizer
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-120px)] -mx-6 px-6">
          <div className=" space-y-8 mt-3">
            <SelectLayout />
            <SelectTheme />
            <RtlSwitcher />
            <ThemeChange />
            <SidebarChange />
            <SidebarImage />
            <RadiusInit />
            <HeaderStyle />
            <FooterStyle />
          </div>
        </ScrollArea>
        <SheetFooter className="py-4 gap-3 lg:flex justify-between hidden  ">
          <Button asChild className="w-full">
            <Link href="https://1.envato.market/vNaJR3">Buy Now</Link>
          </Button>
          <Button asChild className="w-full">
            <Link
              href="https://themeforest.net/user/codeshaperbd/portfolio"
              target="__blank"
            >
              Our Portfolio
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ThemeCustomize;
