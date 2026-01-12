import Header from "@/components/Header";
import Title from "@/components/Title";
import PropertyList from "@/features/property/components/PropertyList";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="space-y-12">
      <Header />

      <main className="space-y-12">
        <Title />

        <PropertyList />
      </main>

      <Footer />
    </div>
  );
}
