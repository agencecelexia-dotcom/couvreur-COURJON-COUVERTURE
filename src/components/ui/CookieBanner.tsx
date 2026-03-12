"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 md:bottom-4 left-0 md:left-4 right-0 md:right-4 md:max-w-lg z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-white border border-neutral-200 rounded-none md:rounded-xl shadow-xl p-5">
        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
          Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie
          publicitaire n&apos;est utilisé.{" "}
          <Link href="/politique-confidentialite" className="text-accent-600 underline hover:text-accent-700">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 py-2.5 px-4 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={refuse}
            className="flex-1 py-2.5 px-4 text-sm font-semibold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
