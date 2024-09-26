import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 font-bold p-5">
      <Link href='/toc'>Toc</Link>
      <Link href='/flexible-sidebar'>Flexible sidebar</Link>
      <Link href='/active-link'>active link</Link>
      <Link href='/css-demo'>CSS Demo</Link>
      <Link href='/lucide'>Lucide icon</Link>
      <Link href='/simple-icons'>simple icons</Link>
    </div>
  );
}
