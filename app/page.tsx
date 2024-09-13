import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4 font-bold p-5">
      <Link href='/toc'>Toc</Link>
      <Link href='/flexible-sidebar'>Flexible sidebar</Link>
      <Link href='/active-link'>active link</Link>
      <Link href='/css-demo'>CSS Demo</Link>
    </div>
  );
}
