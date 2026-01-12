import { LucideClock } from "lucide-react";

export default function Footer() {
  const openElement = (
    <>
      <p className="flex items-center gap-2 text-primary">
        <LucideClock /> We are open now!
      </p>

      <p className="text-white">Call us at: (555) 123-4567</p>
    </>
  );

  const closeElement = (
    <>
      <p className="flex items-center gap-2 text-red-500">
        <LucideClock /> We are closed now.
      </p>

      <p className="text-white">Opening hours: Monday to Friday, 9AM to 5PM.</p>
    </>
  );

  const now = new Date();
  const isWeekDay = now.getDay() >= 1 && now.getDay() <= 5;
  const isOfficeHour = now.getHours() >= 9 && now.getHours() < 17;

  return (
    <footer className="flex flex-col items-center gap-2 p-4 bg-neutral-900">
      {isWeekDay && isOfficeHour ? openElement : closeElement}
    </footer>
  );
}
