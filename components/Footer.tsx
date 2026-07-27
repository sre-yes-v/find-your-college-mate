import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Logo" width={30} height={30} />
          <div>
            <div className="text-sm font-black">SHC Connect</div>
            <div className="text-xs text-muted-foreground">Sacred Heart College</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <Link href="https://www.instagram.com/shc.connect/" target="_blank" className="hover:text-primary">shc.connect</Link>
          <span>© {new Date().getFullYear()} SHC Connect</span>
          <span>Made by <Link href="https://www.instagram.com/sreyes_v/" target="_blank" className="hover:text-primary">
            Sreyes V
          </Link></span>
        </div>
      </div>
    </footer>
  );
}
