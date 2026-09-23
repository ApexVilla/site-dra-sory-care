import heroImg from "@/assets/hero-doctor.jpg";
import heroBg from "@/assets/hero-bg.png";
import logoImg from "@/assets/logo_sory.png";
import { Heart, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Subtle decorative circles - strictly brand colors */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center pt-24 pb-16 relative z-10">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-base font-semibold tracking-tight text-secondary-foreground border border-primary/10">
            <Heart size={16} className="text-primary" />
            Pediatría con amor
          </div>
          <div className="animate-fade-up tracking-tight mb-2 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <div className="relative">
              <img
                src={logoImg}
                alt="Dra. Sory Care"
                className="h-24 md:h-32 lg:h-40 w-auto object-contain"
              />
            </div>
          </div>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-up font-medium" style={{ animationDelay: "0.2s" }}>
            Pediatra Puericultor · Prolactancia
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Acompaño a madres, bebés y niños con calidez y profesionalismo, desde el corazón y la excelencia médica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://wa.me/584126672489"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_8px_30px_rgba(143,113,178,0.3)] hover-lift transition-all"
            >
              Agendar consulta
            </a>
            <a
              href="https://wa.me/584126672489"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-white/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-primary hover:bg-secondary/30 hover-lift transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img
              src={heroImg}
              alt="Dra. Sory - Pediatra"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 flex items-center gap-3 border border-secondary">
            <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center">
              <Heart size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">22 años</p>
              <p className="text-xs text-muted-foreground">de pediatra</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
