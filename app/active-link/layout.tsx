import { Metadata } from "next";
import { ActiveLink } from "../components/active-link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Active Link',
  description: 'Link demo',
}

export default function Layout({  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex gap-5 h-16 border-b p-6 mb-6 items-center">
        <ActiveLink
          className="text-muted-foreground"
          activeClassName="text-primary font-bold"
          href="/active-link/1"
        >
          Link1
        </ActiveLink>
        <ActiveLink
          target="_blank"
          className="text-muted-foreground"
          activeClassName="text-primary font-bold"
          href="/active-link/2"
        >
          Link2
          <ArrowUpRight
            size={16}
            className="inline-block ml-1 group-aria-[current=true]:text-red-500"
          />
          <span className="sr-only">different tab</span>
        </ActiveLink>
        <ActiveLink
          className="text-muted-foreground"
          activeClassName="text-primary font-bold"
          href="/active-link/3"
        >
          Link3
        </ActiveLink>
      </header>
      <main>{children}</main>
    </>
  );
}