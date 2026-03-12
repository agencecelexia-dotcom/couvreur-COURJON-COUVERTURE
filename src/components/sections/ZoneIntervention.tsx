import FadeUp from "@/components/animations/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { clientConfig } from "@/config/client.config";

const zones = clientConfig.ZONES_LISTE.split(",").map((name, i) => ({
  name: name.trim(),
  type: i === 0 ? ("principale" as const) : ("secondaire" as const),
}));

export default function ZoneIntervention() {
  return (
    <section className="py-24 bg-primary-50">
      <Container>
        <SectionHeading
          title="Notre Zone d'Intervention"
          subtitle={`Nous intervenons sur ${clientConfig.ZONE_INTERVENTION}. Contactez-nous pour vérifier la disponibilité dans votre secteur.`}
        />
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {zones.map((zone) => (
                <div
                  key={zone.name}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm transition-colors ${
                    zone.type === "principale"
                      ? "bg-accent-500 text-white border-accent-500 font-semibold"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-accent-300"
                  }`}
                >
                  <svg className={`h-3.5 w-3.5 shrink-0 ${zone.type === "principale" ? "text-white" : "text-accent-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {zone.name}
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-center text-sm text-neutral-500 mt-8">
              Besoin d&apos;un couvreur ? Nous intervenons sur l&apos;ensemble de la region.{" "}
              <a href="/contact" className="text-accent-600 font-medium hover:text-accent-700 underline">
                Demandez un devis
              </a>
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
