import { Badge } from "@/components/ui/badge";

type PropertyTypeProps = {
  type: string;
};

export default function PropertyType({ type }: PropertyTypeProps) {
  return <Badge className="absolute top-2 right-2 uppercase">{type}</Badge>;
}
