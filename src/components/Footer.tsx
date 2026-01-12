import { LucideClock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const now = new Date();
  const isWeekDay = now.getDay() >= 1 && now.getDay() <= 5;
  const isOfficeHour = now.getHours() >= 9 && now.getHours() < 17;
  const isOpen = isWeekDay && isOfficeHour;

  return (
    <footer className="flex flex-col items-center gap-4 p-8 bg-card border-t">
      <p
        className={cn("flex items-center gap-2", {
          "text-primary": isOpen,
          "text-red-500": !isOpen,
        })}
      >
        <LucideClock size={18} />{" "}
        {isOpen ? "We are open now!" : "We are closed now."}
      </p>

      <p className="text-white text-sm">
        {isOpen
          ? "Call us at: (555) 123-4567"
          : "Opening hours: Monday to Friday, 9AM to 5PM."}
      </p>
    </footer>
  );
}
