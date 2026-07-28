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

        
      </section>

      <Footer />
    </main>
  );
}