import PropertyListItem from "@/features/property/components/PropertyListItem";

import { properties } from "@/features/property/data";

export default function PropertyList() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyListItem key={property.id} property={property} />
      ))}
    </div>
  );
}
