import Link from "next/link";
import { StarFilledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { HOME_ROUTE } from "@/constants/routes";

interface LogoProps {
  variant: "header" | "footer" | "dialog";
  className?: string; // для кастомных классов
}

export default function Logo({ variant, className }: LogoProps) {
  const baseClasses = "flex items-center gap-x-2";
  const textClass = "text-3xl";

  // Определяем стили для каждого варианта
  const variantClasses = {
    header: cn(baseClasses, "text-black", className),
    footer: cn(baseClasses, "text-white", className),
    dialog: cn(baseClasses, "text-gray-800", className),
  };

  return (
    <Link className={variantClasses[variant]} href={HOME_ROUTE}>
      <StarFilledIcon className="w-12 h-12" />
      <h3 className={textClass}>Logo</h3>
    </Link>
  );
}
