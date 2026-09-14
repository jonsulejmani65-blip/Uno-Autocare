import type { Metadata } from "next";
import { LocationPageContent } from "@/components/locations/LocationPageContent";
import { getLocation } from "@/lib/locations";

const location = getLocation("biberist")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: "/standorte/biberist" },
};

export default function LocationPage() {
  return <LocationPageContent location={location} />;
}
