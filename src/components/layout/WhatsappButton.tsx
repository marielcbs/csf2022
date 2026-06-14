import { quickLinks } from "@/data/site";

export default function WhatsappButton() {
  return (
    <a
      href={quickLinks.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
      aria-label="WhatsApp"
    >
      <img src="/csf/icons/icon_chat.svg" alt="" className="h-8 w-8" />
    </a>
  );
}
