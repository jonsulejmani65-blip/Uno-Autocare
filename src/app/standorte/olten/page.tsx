import type { Metadata } from "next";
import { LocationPageContent } from "@/components/locations/LocationPageContent";
import { getLocation } from "@/lib/locations";

const location = getLocation("olten")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: "/standorte/olten" },
};

export default function LocationPage() {
  return <LocationPageContent location={location} />;
}
