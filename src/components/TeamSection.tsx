"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Award, BookOpen, Scale, Building, Briefcase, Users } from "lucide-react"
import lawyerPlaceholder from "@/assets/lawyer-placeholder.jpg"
import girirajBardhar from "@/assets/giriraj-bardhar.jpg"
import kapilBardhar from "@/assets/KapilBardhar.jpeg"
import ptDurgaLalBardhar from "@/assets/Pt.DurgaLal-Bardhar.jpeg"
import gyaneshwarBardhar from "@/assets/GyaneshwarBardhar.jpeg"

const TeamSection = () => {
  const [selectedLawyer, setSelectedLawyer] = useState<number | null>(null)
  const navigate = useNavigate()

  const team = [
    {
      name: "Pt. Durga Lal Bardhar",
      title: "Founder & Patriarch (1924-2001)",
      designation: "MLA, Ex-Chairman Rajasthan Bar Council",
      image: ptDurgaLalBardhar,
      shortBio:
        "National-level jurist in Revenue Law, former MLA, and founder of the firm. Known as the 'People's Lawyer'.",
      fullBio: {
        overview:
          "Pt. Durga Lal Bardhar, who passed the law graduate exam in 1948, dedicated his profession to public service. He believed practicing law in the court was 'more honorable' than politics as a means of serving the public with legal knowledge.",
        achievements: [
          "National-level jurist specializing in Revenue Law",
          "Member of Legislative Assembly (MLA) for Hawamahal constituency (1962-1972)",
          "Chairman of Rajasthan Bar Council (1979)",
          "Member of Revenue Board of Rajasthan (1975)",
          "Chairman of Legislative Assembly Petition Committee (1968-72)",
          "Trained approximately 400 lawyers who went on to become judges",
        ],
        legacy:
          "Earned the title 'People's Lawyer' for organizing petitions to secure land rights for thousands of farmers. His books on Revenue Law remain superior references in the field.",
      },
    },
    {
      name: "Gyaneshwar Bardhar",
      title: "Senior Revenue Expert",
      designation: "B.A., LL.B. - 53 Years Standing",
      image: gyaneshwarBardhar,
      shortBio: "Renowned Senior Revenue Expert with 53 years of practice specializing in Revenue Laws.",
      fullBio: {
        overview:
          "Gyaneshwar Bardhar, the elder son of Durga Lal Bardhar, enrolled as an Advocate on August 12, 1972 with the Bar Council of Rajasthan and has been in continuous practice for 53 years.",
        achievements: [
          "Enrolled as Advocate: August 12, 1972",
          "Associated with Late Shri Durga Lal Bardhar (1972-1978)",
          "Secretary, District Bar Association Collectrate (1989)",
          "President, District Bar Association Collectrate (1991)",
          "Present President, Ram Kuti Trust Banipark",
          "Completed training as Mediator for Disposal of cases",
        ],
        publications: [
          "Rajasthan Tenancy Act (Publisher: Dominion Law Book Depot)",
          "Rajasthan Land Revenue Act (Publisher: Dominion Law Book Depot)",
        ],
        courts:
          "Rajasthan High Court (Bench Jaipur), Board of Revenue, Revenue Appellate Authority, Divisional Commissioner Jaipur, Collector, SDO, and ACM",
        specialization:
          "Revenue Law, Constitutional Law, with special expertise in Revenue Laws",
      },
    },
    {
      name: "Giriraj Bardhar",
      title: "Senior Advocate",
      designation: "B.A., LL.B., Diploma in Labour Laws - 49 Years Standing",
      image: girirajBardhar,
      shortBio: "Senior Advocate specializing in Civil and Revenue Laws with extensive High Court experience.",
      fullBio: {
        overview:
          "Giriraj Bardhar, son of Durga Lal Bardhar, enrolled as an Advocate on October 15, 1976 with the Bar Council of Rajasthan and has 49 years of standing.",
        achievements: [
          "Enrolled as Advocate: October 15, 1976",
          "Standing Counsel for Jaipur Development Authority (1983-85)",
          "Panel Lawyer, Oriental Insurance Company (2001-present)",
          "Panel Lawyer, New India Assurance Company (2001-present)",
          "Member, Legal Aid Committee (2009-10)",
          "Presently serving as Mediator in Jaipur District",
          "Present President, Banipark Dharmansanthan",
          "Trustee, Can Care Trust (Orphan child education)",
        ],
        reportedJudgments: [
          "2018(1)CDR498(Raj): Rajendra Karnawat and Ors. Vs. Rajendra and Ors.",
          "AIR2014Raj41: Saraf Carpet & Textiles Vs. State of Rajasthan",
          "AIR1999Raj90: Gokul Vs. Rajasthan Muslim Wakf Board and Ors.",
        ],
        courts: "Rajasthan High Court (Bench Jaipur), Civil and Session Court Jaipur",
        specialization: "Civil, Criminal, Revenue Law, Constitutional Law, Labour Law, Company Law",
      },
    },
    {
      name: "Kapil Bardhar",
      title: "Managing Partner",
      designation: "B.B.A.-LL.B. (Symbiosis) - 14 Years Standing",
      image: kapilBardhar,
      shortBio: "Third-generation lawyer with 14 years of experience, leading Bardhar & Bardhar Associates.",
      fullBio: {
        overview:
          "Kapil Bardhar, son of Giriraj Bardhar, is a dynamic third-generation lawyer with extensive litigation experience. Graduated from Symbiosis Law School, Pune in 2011.",
        achievements: [
          "Enrolled as Advocate: 2011",
          "Started chamber practice with Senior Advocate Shri Rajendra Narain Mathur",
          "Managing Partner, Bardhar & Bardhar Associates",
          "Core Partner, Bardhar and Kaushik Law Firm (Team of 11 associates)",
        ],
        // Panel & Standing Counsel section removed as per content update
        panelLawyer: [
          "Punjab National Bank (PNB)",
          "Oriental Insurance Company Ltd",
          "TATA GY Batteries, Pune",
          "TATA Motors",
          "HG Infra Engineering (P) LTD",
          "Varun Beverages",
          "SBI General Insurance",
          "Reliance General Insurance",
          // Added as Panel Lawyer Representations (content only)
          "Jaipur Vidyut Vitran Nigam Limited (JVVNL)",
          "Rajasthan Public Service Commission (RPSC)",
          "Central Electricity Regulation Commission (CERC)",
          "Pandit Deen Dayal Upadhyay University, Sikar",
          "Jaipur Development Authority (JDA)",
        ],
        specialization: "Writs, Civil, Service, Arbitration, Banking, Property, and various miscellaneous matters",
        legacy:
          "Building upon a rich family legacy dating back to 1950, handling comprehensive litigation with modern approach",
      },
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Generations of <span className="text-primary">Legal Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three generations of distinguished legal professionals dedicated to excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((lawyer, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-[var(--shadow-glow)] flex flex-col"
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                    <img
                      src={lawyer.image || "/placeholder.svg"}
                      alt={lawyer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{lawyer.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{lawyer.title}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{lawyer.designation}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground text-center mb-4 flex-1">{lawyer.shortBio}</p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10 mt-auto bg-transparent"
                    onClick={() => setSelectedLawyer(index)}
                  >
                    View Full Bio
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Biography Dialog */}
          {selectedLawyer !== null && (
            <Dialog open={selectedLawyer !== null} onOpenChange={() => setSelectedLawyer(null)}>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                      <img
                        src={team[selectedLawyer].image || "/placeholder.svg"}
                        alt={team[selectedLawyer].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl">{team[selectedLawyer].name}</DialogTitle>
                      <DialogDescription className="text-primary text-base">
                        {team[selectedLawyer].title}
                      </DialogDescription>
                      <p className="text-sm text-muted-foreground">{team[selectedLawyer].designation}</p>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Overview
                    </h3>
                    <p className="text-muted-foreground">{team[selectedLawyer].fullBio.overview}</p>
                  </div>

                  {team[selectedLawyer].fullBio.achievements && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-primary" />
                        Key Achievements & Positions
                      </h3>
                      <ul className="space-y-2">
                        {team[selectedLawyer].fullBio.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {team[selectedLawyer].fullBio.panelStandingCounsel && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Panel & Standing Counsel
                      </h3>
                      <div className="grid sm:grid-cols-1 gap-2">
                        {team[selectedLawyer].fullBio.panelStandingCounsel.map((panel, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {panel}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {team[selectedLawyer].fullBio.panelLawyer && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary" />
                        Panel Lawyer Representations
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {team[selectedLawyer].fullBio.panelLawyer.map((panel, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {panel}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {team[selectedLawyer].fullBio.publications && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Published Works
                      </h3>
                      <ul className="space-y-2">
                        {team[selectedLawyer].fullBio.publications.map((pub, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {pub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {team[selectedLawyer].fullBio.reportedJudgments && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Notable Reported Judgments</h3>
                      <ul className="space-y-2">
                        {team[selectedLawyer].fullBio.reportedJudgments.map((judgment, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {judgment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {team[selectedLawyer].fullBio.courts && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Courts of Practice</h3>
                      <p className="text-muted-foreground">{team[selectedLawyer].fullBio.courts}</p>
                    </div>
                  )}

                  {team[selectedLawyer].fullBio.specialization && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Areas of Specialization</h3>
                      <p className="text-muted-foreground">{team[selectedLawyer].fullBio.specialization}</p>
                    </div>
                  )}

                  {team[selectedLawyer].fullBio.legacy && (
                    <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                      <p className="text-muted-foreground italic">{team[selectedLawyer].fullBio.legacy}</p>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent px-8 py-3"
              onClick={() => navigate("/our-teams")}
            >
              View Our Teams
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
