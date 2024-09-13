'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

type Props = React.ComponentProps<typeof Link> & {
  activeClassName: string;
};

export const ActiveLink = ({
  href,
  children,
  activeClassName,
  className,
  ...props
}: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;


  return (
    <Link
      {...props}
      aria-current={isActive}
      href={href}
      className={cn('group', className, isActive && activeClassName)}
    >
      {children}
    </Link>
  );
}