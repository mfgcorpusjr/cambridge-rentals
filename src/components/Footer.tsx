import { LucideClock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 p-4 bg-neutral-900">
      <p className="flex items-center gap-2 text-primary">
        <LucideClock /> We are open now!
      </p>

      <p className="text-white">Call us at: (555) 123-4567</p>
    </footer>
  );
}
