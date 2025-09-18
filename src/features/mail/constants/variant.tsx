import StarOrangeIcon from "@assets/icons/icon_star_orange.svg?react";
import StarBlueIcon from "@assets/icons/icon_star_blue.svg?react";
import LogoOrangeIcon from "@assets/icons/icon_logo_orange.svg?react";
import LogoBlueIcon from "@assets/icons/icon_logo_blue.svg?react";

export type Variant = "orange" | "blue";

export const MAILLIST_VARIANTS: Record<
  Variant,
  {
    bg: string;
    text: string;
    contentBg: string;
    startIcon: React.ReactNode;
    logoIcon: React.ReactNode;
  }
> = {
  orange: {
    bg: "bg-primary",
    text: "text-primary",
    contentBg: "bg-secondary",
    startIcon: <StarOrangeIcon />,
    logoIcon: <LogoOrangeIcon />,
  },
  blue: {
    bg: "bg-blue-primary",
    text: "text-blue-primary",
    contentBg: "bg-blue-secondary",
    startIcon: <StarBlueIcon />,
    logoIcon: <LogoBlueIcon />,
  },
};
