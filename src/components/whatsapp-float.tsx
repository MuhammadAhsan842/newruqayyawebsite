import { hospital, whatsappLink, defaultWhatsappMessage } from "@/lib/hospital";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#0e6e63] sm:bottom-6"
    >
      <span className="flex size-7 items-center justify-center rounded-full bg-white/15 text-base">
        ✦
      </span>
      WhatsApp
      <span className="hidden sm:inline">· {hospital.phoneDisplay}</span>
    </a>
  );
}
