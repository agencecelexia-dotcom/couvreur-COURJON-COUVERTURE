"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { services } from "@/data/services";
import { company } from "@/data/company";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-sm shadow-[var(--shadow-header)]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo light={transparent} />

            {/* Desktop nav with services dropdown */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-md group",
                  transparent
                    ? pathname === "/" ? "text-accent-300" : "text-white/85 hover:text-white"
                    : pathname === "/" ? "text-primary-700" : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                Accueil
                <span className={cn(
                  "absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left",
                  transparent ? "bg-accent-300" : "bg-accent-500",
                  pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-md group flex items-center gap-1",
                    transparent
                      ? pathname.startsWith("/services") ? "text-accent-300" : "text-white/85 hover:text-white"
                      : pathname.startsWith("/services") ? "text-primary-700" : "text-neutral-600 hover:text-neutral-900"
                  )}
                >
                  Services
                  <svg className="h-3.5 w-3.5 transition-transform duration-200" style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={cn(
                    "absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left",
                    transparent ? "bg-accent-300" : "bg-accent-500",
                    pathname.startsWith("/services") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav links */}
              {[
                { href: "/realisations", label: "Réalisations" },
                { href: "/blog", label: "Blog" },
                { href: "/a-propos", label: "À Propos" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-md group",
                    transparent
                      ? pathname.startsWith(item.href) ? "text-accent-300" : "text-white/85 hover:text-white"
                      : pathname.startsWith(item.href) ? "text-primary-700" : "text-neutral-600 hover:text-neutral-900"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left",
                    transparent ? "bg-accent-300" : "bg-accent-500",
                    pathname.startsWith(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              ))}
            </div>

            {/* CTA + Phone (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${company.contact.phone}`}
                className={cn(
                  "hidden xl:flex items-center gap-2 text-sm font-medium transition-colors",
                  transparent ? "text-white/80 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {company.contact.phone}
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors shadow-sm"
              >
                Devis Gratuit
              </Link>
            </div>

            {/* Burger (mobile) */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                transparent ? "text-white hover:bg-white/10" : "text-neutral-700 hover:bg-neutral-100"
              )}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
