"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

interface ContactFormProps {
  defaultService?: string;
}

export function ContactForm({ defaultService }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const vehicle = String(data.get("vehicle") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Anfrage über Website – ${service || "Fahrzeugaufbereitung"}`;
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone}`,
      `Fahrzeug: ${vehicle}`,
      `Gewünschte Dienstleistung: ${service}`,
      "",
      "Nachricht:",
      message,
    ].join("\n");

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
        <CheckCircle2 size={32} className="text-accent" />
        <h3 className="text-xl font-medium text-white">Fast geschafft.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-white/60">
          Dein E-Mail-Programm sollte sich mit einer vorausgefüllten Nachricht geöffnet haben.
          Bitte sende die E-Mail ab, damit deine Anfrage bei uns eintrifft.
        </p>
        <button
          onClick={() => setSent(false)}
          className="focus-ring text-sm font-medium uppercase tracking-widest2 text-accent hover:text-accent-light"
        >
          Neue Anfrage
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="E-Mail" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefon" name="phone" type="tel" autoComplete="tel" />
        <Field label="Fahrzeug" name="vehicle" placeholder="z. B. VW Golf, Baujahr 2019" />
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-widest2 text-white/50">
          Gewünschte Dienstleistung
        </span>
        <select
          name="service"
          defaultValue={defaultService ?? ""}
          className="focus-ring rounded-xl border border-white/15 bg-base-anthracite px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-accent"
        >
          <option value="">Bitte auswählen</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-widest2 text-white/50">
          Nachricht
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="Erzähl uns kurz von deinem Fahrzeug und deinem Anliegen."
          className="focus-ring resize-none rounded-xl border border-white/15 bg-base-anthracite px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
        />
      </label>

      <button
        type="submit"
        className="focus-ring group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium uppercase tracking-widest2 text-base-black transition-colors hover:bg-accent-light"
      >
        Anfrage senden
        <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

function Field({ label, name, type = "text", required, placeholder, autoComplete }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-widest2 text-white/50">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="focus-ring rounded-xl border border-white/15 bg-base-anthracite px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}
