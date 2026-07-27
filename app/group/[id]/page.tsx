import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getGroup, groups } from "@/lib/groups";

export function generateStaticParams() {
  return groups.map((g) => ({ id: g.id }));
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GroupPage({ params }: Props) {
  const { id } = await params;

  const group = getGroup(id);

  if (!group) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 pt-30">
        <div className="paper-card relative overflow-hidden !rounded-[36px] p-8 md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-mint blur-3xl" />

          <div className="relative">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground hover:border-primary/40 hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to search
            </Link>

            <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="label-eyebrow mb-3">Your group</div>

                <h1 className="text-6xl font-black uppercase tracking-tight md:text-8xl">
                  {group.name}
                </h1>
              </div>

              <div className="inline-flex items-center gap-3 rounded-2xl bg-primary px-5 py-4 text-primary-foreground">
                <Users className="h-5 w-5" />

                <div>
                  <div className="text-3xl font-black leading-none">
                    {group.members.length}
                  </div>

                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] opacity-80">
                    Members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {group.members.map((s) => {
            const initials = s.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");

            return (
              <article
                key={s.id}
                className="paper-card flex flex-col gap-5 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-base font-bold text-primary-foreground">
                    {initials}
                  </div>

                  <span className="rounded-full border border-border bg-background px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.gender}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold">{s.name}</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {s.department}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Year
                  </span>

                  <span className="text-sm font-semibold text-primary">
                    {s.year}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}