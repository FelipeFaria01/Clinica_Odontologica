import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Treatments } from "./components/Tratamento";
import { Benefits } from "./components/Benefits";
import { FAQ } from "./components/FAQ";
import { AppointmentForm } from "./components/AppointmentForm";
import { WhatsAppButton } from "./components/WhatsAppButtons";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Treatments />
        <Benefits />
        <FAQ />
        <AppointmentForm />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}