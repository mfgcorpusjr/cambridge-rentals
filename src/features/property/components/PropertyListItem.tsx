import { cn } from "@/lib/utils";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import PropertyImage from "@/features/property/components/PropertyImage";
import PropertyBanner from "@/features/property/components/PropertyBanner";
import PropertyType from "@/features/property/components/PropertyType";
import PropertyAttributes from "@/features/property/components/PropertyAttributes";
import PropertyDetails from "@/features/property/components/PropertyDetails";

import { type Property } from "@/features/property/types";

type PropertyListItemProps = {
  property: Property;
};

export default function PropertyListItem({ property }: PropertyListItemProps) {
  return (
    <Card
      className={cn("pt-0 overflow-hidden", {
        "opacity-50": !property.available,
      })}
    >
      <CardHeader className="p-0">
        <PropertyImage image={property.image} address={property.address}>
          {!property.available && <PropertyBanner />}

          <PropertyType type={property.type} />

          <PropertyAttributes
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            surface={property.surface}
          />
        </PropertyImage>
      </CardHeader>
      <CardContent>
        <PropertyDetails
          address={property.address}
          rent={property.rent}
          date={property.date}
        />
      </CardContent>
    </Card>
  );
}
