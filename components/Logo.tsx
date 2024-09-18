import Link from "next/link";
import { cn } from "@/lib/utils";
import { HOME_ROUTE } from "@/constants/routes";
import { COMPANY_NAME } from "@/constants/setting";
import LogoSvg from '@/public/svg/Logo';

interface LogoProps {
  variant: "header" | "footer" | "dialog";
  className?: string;
}

export default function Logo({ variant, className }: LogoProps) {
  const baseClasses = "flex items-center gap-x-2";

  const variantClasses = {
    header: cn(baseClasses, className),
    footer: cn(baseClasses, className),
    dialog: cn(baseClasses, className),
  };

  // Рендер для варианта header
  if (variant === "header") {
    return (
      <Link className={variantClasses[variant]} href={HOME_ROUTE}>
        <LogoSvg className="w-10 h-10 fill-primary" />
        <div className="flex gap-x-1 text-2xl">
          <h3>{COMPANY_NAME.first}</h3>
          <h3 className="font-bold text-foreground-secondary">
            {COMPANY_NAME.second}
          </h3>
        </div>
      </Link>
    );
  }

  // Рендер для варианта footer
  if (variant === "footer") {
    return (
      <Link className={variantClasses[variant]} href={HOME_ROUTE}>
        <LogoSvg className="w-32 h-32 fill-primary" />
      </Link>
    );
  }

  // Рендер для варианта dialog
  if (variant === "dialog") {
    return (
      <div className={variantClasses[variant]}>
        <LogoSvg className="w-16 h-16 fill-primary" />
      </div>
    );
  }

  return null;
}
