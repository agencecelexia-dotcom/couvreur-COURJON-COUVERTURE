import { company } from "@/data/company";

export default function GoogleMap() {
  const { lat, lng } = company.coordinates;
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3s_o&q=${lat},${lng}&zoom=14`;

  return (
    <div className="rounded-xl overflow-hidden aspect-[4/3] w-full bg-neutral-100">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Notre localisation"
      />
    </div>
  );
}
