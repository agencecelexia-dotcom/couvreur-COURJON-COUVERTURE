"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import { clientConfig } from "@/config/client.config";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/images/hero-toiture.png"
          alt={`${clientConfig.METIER_LABEL} ${clientConfig.NOM_ENTREPRISE}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-accent-400 mb-6"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
        >
          {clientConfig.METIER_LABEL} — {clientConfig.ZONE_INTERVENTION}
        </motion.p>

        <SplitText
          text={clientConfig.ACCROCHE_HERO}
          as="h1"
          className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white leading-tight"
          delay={0.4}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 mx-auto max-w-2xl text-lg text-neutral-200"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
        >
          {clientConfig.DESCRIPTION_ENTREPRISE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors shadow-lg"
          >
            Demander un Devis Gratuit
          </Link>
          <Link
            href="/realisations"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/40 hover:border-white/70 hover:bg-white/10 rounded-lg transition-colors"
          >
            Voir nos Réalisations
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs tracking-widest uppercase">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
