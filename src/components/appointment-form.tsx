"use client";

import { useMemo, useState } from "react";
import {
  bookingMessage,
  doctors,
  dummyBooking,
  emailLink,
  hospital,
  services,
  whatsappLink,
} from "@/lib/hospital";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const visitTypes = ["In-person visit", "Online consultation"] as const;

type Props = {
  presetDoctor?: string;
  presetService?: string;
  startAsDummy?: boolean;
};

export function AppointmentForm({
  presetDoctor,
  presetService,
  startAsDummy = false,
}: Props) {
  const seed = startAsDummy ? dummyBooking : null;
  const [name, setName] = useState(seed?.name ?? "");
  const [phone, setPhone] = useState(seed?.phone ?? "");
  const [doctor, setDoctor] = useState(seed?.doctor ?? presetDoctor ?? "");
  const [service, setService] = useState(seed?.service ?? presetService ?? "");
  const [visitType, setVisitType] = useState<(typeof visitTypes)[number]>(
    seed?.visitType ?? "In-person visit"
  );
  const [when, setWhen] = useState(seed?.when ?? "");
  const [notes, setNotes] = useState(seed?.notes ?? "");
  const [error, setError] = useState("");

  const message = useMemo(
    () =>
      bookingMessage({
        name: name || "—",
        phone: phone || "—",
        visitType,
        doctor: doctor || "First available",
        service: service || "Please advise",
        when: when || "Soonest available",
        notes,
      }),
    [name, phone, doctor, service, visitType, when, notes]
  );

  function requireContact() {
    if (!name.trim() || !phone.trim()) {
      setError("Please add your name and a phone number we can return.");
      return false;
    }
    setError("");
    return true;
  }

  function sendWhatsApp() {
    if (!requireContact()) return;
    const url = whatsappLink(message);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
  }

  function sendEmail() {
    if (!requireContact()) return;
    window.location.href = emailLink(
      `Appointment request — ${name} — ${doctor || "first available"}`,
      message
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendWhatsApp();
      }}
      className="space-y-5 rounded-3xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8"
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
          WhatsApp the desk
        </p>
        <h2 className="mt-2 font-heading text-3xl text-ink">Book by message</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Send opens WhatsApp to {hospital.whatsappDisplay}. Email goes to{" "}
          {hospital.email}. Nothing is stored on this website.
        </p>
      </div>

      {error ? (
        <p
          role="alert"
          className="rounded-xl bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {error}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="h-10"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Mobile number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03xx xxx xxxx"
            className="h-10"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="visitType">How would you like to be seen?</Label>
          <select
            id="visitType"
            className="h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
            value={visitType}
            onChange={(e) =>
              setVisitType(e.target.value as (typeof visitTypes)[number])
            }
          >
            {visitTypes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="when">Preferred day or time</Label>
          <Input
            id="when"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            placeholder="Tonight, or a date"
            className="h-10"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="doctor">Doctor</Label>
          <select
            id="doctor"
            className="h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option value="">First available / not sure</option>
            {doctors.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name} — {d.specialty}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="service">Service</Label>
          <select
            id="service"
            className="h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Please advise</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="notes">Anything we should know</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Symptoms, previous reports, or if this is a follow-up."
          className="min-h-24"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button nativeButton type="submit" size="lg" className="h-11 px-5">
          Send on WhatsApp
        </Button>
        <Button
          nativeButton
          type="button"
          variant="outline"
          size="lg"
          className="h-11 px-5"
          onClick={sendEmail}
        >
          Email the desk
        </Button>
        <Button
          nativeButton
          type="button"
          variant="ghost"
          size="lg"
          className="h-11 px-5"
          onClick={() => {
            window.location.href = `tel:${hospital.phoneTel}`;
          }}
        >
          Call {hospital.phoneDisplay}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        For chest pain, severe bleeding, collapse, or breathing difficulty, do
        not wait on a message — call or come to emergency now.
      </p>
    </form>
  );
}
