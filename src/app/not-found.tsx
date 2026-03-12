import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4 text-center">
      <Container>
        <div className="w-20 h-20 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>

        <p className="text-accent-600 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
          Erreur 404
        </p>

        <h1 className="font-heading text-6xl lg:text-8xl font-bold text-primary-900 mb-4">
          404
        </h1>

        <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
          Page introuvable
        </h2>

        <p className="text-neutral-500 max-w-md mx-auto mb-10 leading-relaxed">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Revenez à l&apos;accueil pour découvrir nos services.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </Container>
    </div>
  );
}
