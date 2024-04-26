import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

export interface LinkProps {
  href: string;
  target?: string;
  className?: string;
  children: ReactNode;
}

const NavLink = ({ href, target, className, children }: LinkProps) => (
  <Link
    href={href}
    rel="noreferrer"
    target={target}
    className={clsx(
      "color-gray-200 hover:text-luminol-color-600 dark:hover:text-luminol-color-500 text-sm transition-colors px-2.5",
      className,
    )}
  >
    {children}
  </Link>
);

export default NavLink;
