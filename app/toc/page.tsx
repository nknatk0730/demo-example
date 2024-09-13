import Link from "next/link";
import { Toc } from "../components/toc";

export default function Page() {
  return (
    <div className="p-5 space-y-5">
      <Link href='/' className="font-bold text-3xl">Home</Link>
      <div className="flex gap-5">
        <div className="flex-1 content">
          <h1>Title</h1>
          <h2>Subtitle</h2>
          <h2>Subtitle2</h2>
          <h3>article</h3>
          <h3>letter</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit culpa enim ipsa beatae, perferendis aut voluptas
            ratione iure fugit ab. Qui, fugiat esse? Doloribus placeat, labore
            maiores eaque suscipit debitis?
          </p>
        </div>
        <div className="w-80">
          <Toc id="toc1" />
          <Toc id="toc2" />
          <Toc id="toc3" />
        </div>
      </div>
    </div>
  );
}