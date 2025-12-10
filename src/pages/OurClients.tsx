"use client"

import { Building2, ArrowLeft } from "lucide-react"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const OurClients = () => {
  const navigate = useNavigate()
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  const logos = useMemo(
    () => [
      { name: "JVVNL", logo: "/partners/jvvnl.png" },
      { name: "RPSC", logo: "/partners/rpsc.png" },
      { name: "Oriental Insurance", logo: "/partners/oriental-insurance.png" },
      { name: "CERC", logo: "/partners/cerc.png" },
      { name: "TATA Batteries", logo: "/partners/tata-batteries.png" },
      { name: "SBI General", logo: "/partners/sbi-general.png" },
      { name: "Reliance General", logo: "/partners/reliance-general.png" },
      { name: "Universal Sompo", logo: "/partners/universal-sompo.png" },
      { name: "Shekhawati University", logo: "/partners/shekhawati-university.png" },
      { name: "Lachoo College", logo: "/partners/lachoo-college.png" },
      { name: "TATA Motors", logo: "/partners/tata-motors.png" },
      { name: "JDA", logo: "/partners/jda.png" },
      { name: "HG Infra", logo: "/partners/hg-infra.png" },
      { name: "Varun Beverages", logo: "/partners/varun-beverages.png" },
      { name: "Programmers.io", logo: "/partners/programmers.png" },
      { name: "The Palace", logo: "/partners/the-palace.png" },
      { name: "Manglam BDL", logo: "/partners/manglam-bdl.png" },
      { name: "Khandaka Jewellers", logo: "/partners/khandaka-jewellers.png" },
    ],
    [],
  )

  const handleImageError = (logo: string) => {
    setFailedImages(prev => new Set([...prev, logo]))
  }

  // Helper to render one row track (duplicated for seamless loop)
  const LogoRow = ({
    items,
    direction = "left",
    duration = 40,
    ariaLabel,
  }: {
    items: { name: string; logo: string }[]
    direction?: "left" | "right"
    duration?: number // seconds
    ariaLabel?: string
  }) => {
    const animationClass = direction === "left" ? "animate-logo-left" : "animate-logo-right"

    return (
      <div className="logo-marquee py-4">
        <div
          className={`logo-track ${animationClass}`}
          style={{ animationDuration: `${duration}s` }}
          aria-label={ariaLabel}
        >
          {[...items, ...items].map((client, idx) => {
            const isDuplicate = idx >= items.length
            const hasFailed = failedImages.has(client.logo)

            return (
              <div
                key={`${client.name}-${idx}`}
                className="flex items-center justify-center h-24 w-[180px] rounded-md mx-2"
                aria-hidden={isDuplicate}
              >
                {!hasFailed ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-16 max-w-[160px] w-auto object-contain hover:scale-110 transition-all duration-300"
                    onError={() => handleImageError(client.logo)}
                  />
                ) : (
                  <div className="w-full h-full rounded-lg bg-card border border-border flex flex-col items-center justify-center p-3 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                    <Building2 className="w-8 h-8 text-primary mb-2" aria-hidden="true" />
                    <span className="text-sm text-center text-foreground font-medium line-clamp-2">{client.name}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Create three rows
  const row1 = logos
  const row2 = [...logos.slice(8), ...logos.slice(0, 8)]
  const row3 = [...logos.slice(4), ...logos.slice(0, 4)]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Our <span className="text-primary">Esteemed Clients</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Representing Industry Leaders and Government Institutions
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
            </div>

            {/* Three-row alternating marquee */}
            <div className="space-y-6">
              <LogoRow items={row1} direction="left" duration={46} ariaLabel="Top row of client logos scrolling left" />
              <LogoRow
                items={row2}
                direction="right"
                duration={36}
                ariaLabel="Middle row of client logos scrolling right"
              />
              <LogoRow
                items={row3}
                direction="left"
                duration={52}
                ariaLabel="Bottom row of client logos scrolling left"
              />
            </div>

            {/* Trust Statement */}
            <div className="mt-14 text-center">
              <p className="text-lg text-muted-foreground italic max-w-4xl mx-auto">
                "Trusted by leading corporations, financial institutions, government bodies, and educational organizations
                across Rajasthan and beyond."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurClients
