import { LucideHouse, LucidePhone, LucideMail } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 p-4 border-b bg-neutral-900/80 backdrop-blur-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="flex items-center gap-2">
          <LucideHouse className="text-primary" />
          <span className="text-white text-2xl font-bold tracking-tight">
            Cambridge Rentals
          </span>
        </h1>

        <div className="flex items-center gap-2">
          <LucidePhone className="text-primary" size={18} />
          <span className="text-white text-sm">(555) 123-4567</span>
        </div>

        <div className="flex items-center gap-2">
          <LucideMail className="text-primary" size={18} />
          <span className="text-white text-sm">me@example.com</span>
        </div>
      </div>
    </header>
  );
}
