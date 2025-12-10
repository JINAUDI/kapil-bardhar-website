"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Briefcase, Scale, Users, ArrowLeft } from "lucide-react"

const OurTeams = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Update document title for SEO
    document.title = "Our Teams | Bardhar & Bardhar Associates"
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", "Meet the expert legal teams at Bardhar & Bardhar Associates: Session Court and High Court specialists.")
    } else {
      const meta = document.createElement('meta')
      meta.name = "description"
      meta.content = "Meet the expert legal teams at Bardhar & Bardhar Associates: Session Court and High Court specialists."
      document.head.appendChild(meta)
    }
  }, [])

  // Session Court Team
  const sessionCourtTeam = [
    { name: "Roopendra Suroliya", experience: "25 years" },
    { name: "Rajesh Kumawat", experience: "20 years" },
    { name: "Tarun Gehlot", experience: "8 years" },
    { name: "Ashok Peepliwal", experience: "5 years" },
  ]

  // High Court Team
  const highCourtTeam = [
    { name: "Umesh Dubey", experience: "19 years" },
    { name: "Himanshu Kaushik", experience: "11 years" },
    { name: "Ayush Sharma", experience: "6 years" },
    { name: "Suresh Bairwa", experience: "6 years" },
    { name: "Anshulika Pareek", experience: "1 year" },
    { name: "Yogesh Meena", experience: "1 year" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-3 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">B&B</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-foreground">Bardhar & Bardhar</h1>
                <p className="text-xs text-muted-foreground">Associates</p>
              </div>
            </button>

            {/* Back Button */}
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="pt-32 pb-20 bg-secondary/30 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Legal Teams</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated professionals who form our expert legal teams
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
            </div>

            {/* Teams Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Session Court Team */}
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Session Court Team</h3>
                </div>
                <div className="grid gap-4">
                  {sessionCourtTeam.map((member, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{member.name}</span>
                      </div>
                      <span className="text-sm text-primary font-medium">{member.experience}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High Court Team */}
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">High Court Team</h3>
                </div>
                <div className="grid gap-4">
                  {highCourtTeam.map((member, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{member.name}</span>
                      </div>
                      <span className="text-sm text-primary font-medium">{member.experience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeams
