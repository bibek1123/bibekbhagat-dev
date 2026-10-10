// =============================================================
// WhatsApp URL builder
// Returns null when NEXT_PUBLIC_WHATSAPP_NUMBER is not configured,
// preventing production from generating clickable wa.me/placeholder links.
// =============================================================
import { whatsappConfig } from "@/config/site";

/**
 * Returns a wa.me URL if the WhatsApp number is configured, otherwise null.
 * Callers must handle the null case (e.g. show a fallback or omit the button).
 */
export function buildWhatsAppUrl(message?: string): string | null {
  const number = whatsappConfig.number;
  if (!number) return null;
  const text = encodeURIComponent(message || whatsappConfig.defaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}

export function getDefaultWhatsAppUrl(): string | null {
  return buildWhatsAppUrl(whatsappConfig.defaultMessage);
}

export function getStarterWhatsAppUrl(): string | null {
  return buildWhatsAppUrl(whatsappConfig.starterMessage);
}

export function getBusinessWhatsAppUrl(): string | null {
  return buildWhatsAppUrl(whatsappConfig.businessMessage);
}

export function getCustomWhatsAppUrl(): string | null {
  return buildWhatsAppUrl(whatsappConfig.customMessage);
}
