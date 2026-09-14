import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section className="relative bg-base-anthracite py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Unsere Leistungen"
            title="Vier Bereiche. Ein Anspruch."
            subtitle="Von der kompletten Aufbereitung bis zur gezielten Detailarbeit – jede Leistung folgt demselben Massstab."
          />
          <div className="hidden sm:block">
            <Button href="/dienstleistungen" variant="secondary">
              Alle Leistungen
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/dienstleistungen" variant="secondary" className="w-full justify-center">
            Alle Leistungen
          </Button>
        </div>
      </div>
    </section>
  );
}
