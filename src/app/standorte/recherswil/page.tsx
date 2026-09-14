import type { Metadata } from "next";
import { LocationPageContent } from "@/components/locations/LocationPageContent";
import { getLocation } from "@/lib/locations";

const location = getLocation("recherswil")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: "/standorte/recherswil" },
};

export default function LocationPage() {
  return <LocationPageContent location={location} />;
}
