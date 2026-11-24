import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors, getDoctor } from "@/lib/hospital";
import { AppointmentForm } from "@/components/appointment-form";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) return {};
  return pageMeta(
    doctor.name,
    `${doctor.specialty} at Ruqayya Medical Center, Nespak, Lahore. ${doctor.credentials}.`,
    `/doctors/${slug}`
  );
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1fr_0.9fr]">
      <article>
        <Link href="/doctors" className="text-sm text-primary underline-offset-4 hover:underline">
          All doctors
        </Link>
        <p className="mt-4 text-xs tracking-[0.18em] text-muted-foreground uppercase">
          {doctor.specialty}
        </p>
        <h1 className="mt-2 font-heading text-4xl text-ink sm:text-5xl">
          {doctor.name}
        </h1>
        <p className="mt-2 text-lg">{doctor.honorific}</p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-2xl bg-muted p-4">
            <dt className="text-muted-foreground">Qualifications</dt>
            <dd className="mt-1 font-medium">{doctor.credentials}</dd>
          </div>
          <div className="rounded-2xl bg-muted p-4">
            <dt className="text-muted-foreground">Experience</dt>
            <dd className="mt-1 font-medium">{doctor.experience}</dd>
          </div>
        </dl>
        <p className="mt-6 leading-relaxed text-muted-foreground">{doctor.bio}</p>
        <p className="mt-4 text-sm">{doctor.clinic}</p>
        <ul className="mt-6 space-y-2 text-sm">
          {doctor.focus.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
              {f}
            </li>
          ))}
        </ul>
      </article>
      <AppointmentForm presetDoctor={doctor.name} />
    </div>
  );
}
