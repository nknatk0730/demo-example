import Link from "next/link";
import { IconDemo } from "./components/icon";

export default function Page() {
  return (
      <div className="p-6 flex gap-6">
        <Link href="/">Home</Link>

        <IconDemo />
      </div>
  );
}
