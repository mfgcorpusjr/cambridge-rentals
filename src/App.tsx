import Header from "@/components/Header";
import Title from "@/components/Title";
import PropertyList from "@/features/property/components/PropertyList";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Title />

        <PropertyList />
      </main>

      <Footer />
    </div>
  );
}
