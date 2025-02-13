import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-32 h-32 bg-green-500 flex items-center justify-center row-start-2">
        <Link href="/page2"> Ir a pagina 2</Link>
      </div>
    </div>
  );
}
