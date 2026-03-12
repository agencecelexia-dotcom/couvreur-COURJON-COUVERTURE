import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";
import { clientConfig } from "@/config/client.config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: {
    default: clientConfig.META_TITLE,
    template: `%s | ${clientConfig.NOM_ENTREPRISE}`,
  },
  description: clientConfig.META_DESCRIPTION,
  keywords: clientConfig.META_KEYWORDS.split(",").map((k) => k.trim()),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `https://${clientConfig.DOMAINE}`,
    siteName: clientConfig.NOM_ENTREPRISE,
    title: clientConfig.META_TITLE,
    description: clientConfig.META_DESCRIPTION,
    images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      style={{
        ["--font-playfair" as string]: playfair.variable,
        ["--font-dmsans" as string]: dmSans.variable,
      }}
    >
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": clientConfig.SCHEMA_TYPE,
              name: clientConfig.NOM_ENTREPRISE,
              description: clientConfig.META_DESCRIPTION,
              url: `https://${clientConfig.DOMAINE}`,
              telephone: clientConfig.TELEPHONE,
              email: clientConfig.EMAIL,
              address: {
                "@type": "PostalAddress",
                streetAddress: clientConfig.ADRESSE,
                postalCode: clientConfig.CODE_POSTAL,
                addressLocality: clientConfig.VILLE,
                addressRegion: clientConfig.REGION,
                addressCountry: clientConfig.PAYS,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: clientConfig.LATITUDE,
                longitude: clientConfig.LONGITUDE,
              },
              areaServed: clientConfig.ZONE_INTERVENTION,
              openingHours: clientConfig.HORAIRES,
              sameAs: [
                clientConfig.FACEBOOK_URL,
                clientConfig.INSTAGRAM_URL,
                clientConfig.LINKEDIN_URL,
              ].filter(Boolean),
            }),
          }}
        />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
