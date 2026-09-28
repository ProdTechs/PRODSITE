import type { ServiceIcon } from "@/lib/content";
import type { ReactNode } from "react";

const paths: Record<ServiceIcon, ReactNode> = {
  site: (
    <>
      <rect x="4" y="7" width="32" height="26" />
      <path d="M4 13h32M8 10h2M12 10h2M10 19h12M10 23h20M10 27h8" />
    </>
  ),
  bot: (
    <>
      <path d="M6 9h28v18H18l-7 6v-6H6z" />
      <path d="M13 17v2M27 17v2M16 22h8" />
    </>
  ),
  automation: (
    <>
      <rect x="4" y="6" width="10" height="10" />
      <rect x="26" y="24" width="10" height="10" />
      <path d="M14 11h7v18h5M18 26l3 3-3 3" />
    </>
  ),
  app: (
    <>
      <rect x="12" y="4" width="16" height="32" />
      <path d="M12 9h16M12 31h16M19 33.5h2M16 15h8M16 19h8M16 23h5" />
    </>
  ),
  dashboard: (
    <>
      <rect x="4" y="6" width="32" height="28" />
      <path d="M4 13h32M14 13v21M19 28v-4M24 28v-9M29 28v-6M7 18h4M7 22h4" />
    </>
  ),
  funnel: (
    <>
      <path d="M5 7h30l-11 13v10l-8 4V20z" />
      <path d="M10 12h20" />
    </>
  ),
  api: (
    <>
      <path d="M14 10l-9 10 9 10M26 10l9 10-9 10M22 7l-4 26" />
    </>
  ),
  diagnosis: (
    <>
      <circle cx="17" cy="17" r="10" />
      <path d="M24.5 24.5L35 35M12 17h10M17 12v10" />
    </>
  ),
};

export function ServiceGlyph({ name, className = "" }: { name: ServiceIcon; className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.2 19.8l1.1-3.9A8.6 8.6 0 1 1 8.4 19z" />
      <path d="M9.2 8.3c.3-.6.6-.6.9-.6h.6c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .5-.1.6l-.6.7c-.1.2-.2.4 0 .6.4.7 1 1.4 1.6 1.9.6.5 1.2.8 1.8 1.1.2.1.4 0 .6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.3.3.3.5 0 .5-.2 1.1-.6 1.4-.5.5-1.3.8-2.1.7-1.5-.2-3-1-4.3-2.2-1.3-1.2-2.3-2.7-2.6-4.2-.1-.7.1-1.5.5-2.1z" />
    </svg>
  );
}
