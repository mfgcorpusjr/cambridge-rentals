import { LucideBed, LucideBath, LucideMaximize } from "lucide-react";

type PropertyAttributesProps = {
  bedrooms: number;
  bathrooms: number;
  surface: number;
};

export default function PropertyAttributes({
  bedrooms,
  bathrooms,
  surface,
}: PropertyAttributesProps) {
  return (
    <div className="flex items-center gap-4 absolute bottom-2 right-2 bg-neutral-900/80 px-4 py-2 rounded-md">
      <div className="flex items-center gap-1">
        <LucideBed size={16} className="text-white" />
        <span className="text-white text-xs">{bedrooms}</span>
      </div>

      <div className="flex items-center gap-1">
        <LucideBath size={16} className="text-white" />
        <span className="text-white text-xs">{bathrooms}</span>
      </div>

      <div className="flex items-center gap-1">
        <LucideMaximize size={16} className="text-white" />
        <span className="text-white text-xs">
          {surface} m<sup>2</sup>
        </span>
      </div>
    </div>
  );
}
