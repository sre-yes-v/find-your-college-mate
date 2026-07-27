export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <span className="text-[13px] font-black">S</span>
          </div>
          <div>
            <div className="text-sm font-black">SHC Connect</div>
            <div className="text-xs text-muted-foreground">Sacred Heart College</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <a href="mailto:hello@shcconnect.edu" className="hover:text-primary">hello@shcconnect.edu</a>
          <span>© {new Date().getFullYear()} SHC Connect</span>
          <span>Made with care for students</span>
        </div>
      </div>
    </footer>
  );
}
