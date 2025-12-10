import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Rajasthan High Court"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-lg md:text-xl tracking-wider uppercase">
              Est. 1950
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              A Legacy of Legal Excellence{" "}
              <span className="text-primary">Since 1950</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Three Generations of Unwavering Commitment to Justice in Rajasthan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => onNavigate("practice")}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)] text-lg px-8 py-6"
            >
              Explore Our Expertise
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("team")}
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              Meet Our Team
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">75+</h3>
              <p className="text-muted-foreground">Years of Combined Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">3</h3>
              <p className="text-muted-foreground">Generations of Lawyers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">400+</h3>
              <p className="text-muted-foreground">Lawyers Trained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
