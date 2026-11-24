import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/hospital";
import { AppointmentForm } from "@/components/appointment-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta(service.title, service.summary, `/services/${slug}`);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1fr_0.9fr]">
      <article>
        <Link href="/services" className="text-sm text-primary underline-offset-4 hover:underline">
          All services
        </Link>
        <h1 className="mt-4 font-heading text-4xl text-ink sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {service.summary}
        </p>
        <p className="mt-4 rounded-2xl bg-accent px-4 py-3 text-sm text-accent-foreground">
          {service.audience}
        </p>
        <ul className="mt-8 space-y-3 text-sm leading-relaxed">
          {service.details.map((d) => (
            <li key={d} className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
              {d}
            </li>
          ))}
        </ul>
        {slug === "emergency" ? (
          <Link
            href="/emergency"
            className={cn(buttonVariants({ variant: "destructive" }), "mt-8 h-11 px-5")}
          >
            Go to emergency instructions
          </Link>
        ) : null}
      </article>
      <AppointmentForm presetService={service.title} />
    </div>
  );
}
