"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
export function CheckinQr({ url }: { url: string }) { const [src, setSrc] = useState<string>(); useEffect(() => { void QRCode.toDataURL(url, { errorCorrectionLevel: "M", margin: 2, width: 320 }).then(setSrc); }, [url]); if (!src) return <p className="text-sm text-slate-600">Gerando QR Code…</p>; return (
  // Data URL is generated locally; Next image optimization cannot optimize it.
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} width={320} height={320} className="max-w-full rounded bg-white p-2" alt="QR Code para check-in do dia" />
); }
