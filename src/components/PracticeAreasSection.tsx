import { Scale, Home, Briefcase, Users, Building, FileText, Landmark, DollarSign, Gavel, Receipt, ShieldCheck, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: Landmark,
      title: "Revenue Law",
      description: "Expert representation in Revenue Law matters before Board of Revenue, Revenue Appellate Authority, and all revenue courts.",
      experts: "Led by Senior Revenue Expert Gyaneshwar Bardhar with 53 years of specialization",
      specialties: [
        "Land Revenue Act",
        "Tenancy Act",
        "Land Acquisition",
        "Revenue Appeals",
      ],
    },
    {
      icon: Scale,
      title: "Civil Law",
      description: "Comprehensive civil litigation services including property disputes, contracts, and civil appeals.",
      experts: "Led by Senior Advocate Giriraj Bardhar with 49 years of experience",
      specialties: [
        "Property Disputes",
        "Contract Law",
        "Civil Appeals",
        "Partition Suits",
      ],
    },
    {
      icon: Briefcase,
      title: "Criminal Law",
      description: "Expert defense and prosecution in criminal matters before all courts including Rajasthan High Court.",
      experts: "Handled by experienced advocates with extensive trial experience",
      specialties: [
        "Criminal Defense",
        "Bail Applications",
        "Criminal Appeals",
        "POCSO Cases",
      ],
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Sensitive handling of family matters including matrimonial disputes, custody, succession, and protection orders.",
      experts: "Compassionate representation with focus on amicable resolution",
      specialties: [
        "Divorce & Separation (Contested/Mutual Consent)",
        "Child Custody, Visitation & Guardianship",
        "Alimony & Child Maintenance",
        "Marital Asset Division",
        "Domestic Violence Protection Orders",
      ],
    },
    {
      icon: DollarSign,
      title: "Banking & Finance",
      description: "Expert representation for banking institutions, financial matters, and debt recovery.",
      experts: "Panel lawyers for Punjab National Bank and other major institutions",
      specialties: [
        "Debt Recovery",
        "Banking Disputes",
        "SARFAESI Act",
        "Financial Litigation",
      ],
    },
    {
      icon: FileText,
      title: "Service Law",
      description: "Comprehensive service law matters including government employee disputes and labor issues.",
      experts: "Extensive experience before service tribunals and administrative courts",
      specialties: [
        "Service Disputes",
        "Labor Law",
        "Tribunal Matters",
        "Employment Law",
      ],
    },
    {
      icon: Building2,
      title: "Real Estate Law",
      description: "Complete real estate legal services including due diligence, documentation, RERA compliance, and dispute resolution.",
      experts: "Thorough legal due diligence and property documentation expertise",
      specialties: [
        "Title Verification & Property Search",
        "Sale Deeds & Lease Agreements",
        "RERA Dispute Representation",
        "Ownership & Title Disputes",
        "Boundary & Landlord-Tenant Disputes",
      ],
    },
    {
      icon: Building,
      title: "Constitutional & Writ Law",
      description: "Expert handling of constitutional matters and writ petitions before High Court.",
      experts: "Extensive experience in constitutional litigation and public interest matters",
      specialties: [
        "Writ Petitions",
        "Public Interest",
        "Constitutional Law",
        "Judicial Review",
      ],
    },
    {
      icon: Gavel,
      title: "Arbitration",
      description: "Expert representation in commercial arbitration, construction disputes, and enforcement of arbitral awards.",
      experts: "Experienced in handling complex arbitration matters under various institutional rules",
      specialties: [
        "Commercial Disputes (Breach of Contract)",
        "JV & Shareholder Disputes",
        "Construction Claims (Delays, Cost Overruns, Defects)",
        "Enforcement/Setting Aside of Arbitral Awards",
      ],
    },
    {
      icon: Receipt,
      title: "Negotiable Instruments",
      description: "Comprehensive handling of cheque bounce cases, recovery litigation, and legal notice drafting under N.I. Act.",
      experts: "Specialized in Section 138 cases and recovery proceedings",
      specialties: [
        "Cheque Bounce Cases (Section 138 N.I. Act)",
        "Promissory Notes & Bills of Exchange Recovery",
        "Drafting & Serving Demand Notices",
        "Criminal & Civil Recovery Proceedings",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Consumer Protection",
      description: "Expert representation in consumer disputes involving service deficiency, defective products, and real estate complaints.",
      experts: "Successful track record before Consumer Forums and Commissions",
      specialties: [
        "Insurance, Banking & Medical Negligence",
        "Defective Products (Compensation/Refund)",
        "Real Estate Delays & Construction Defects",
        "E-commerce & Service Deficiency Claims",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive <span className="text-primary">Legal Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Decades of expertise across diverse practice areas, serving individuals,
              businesses, and governmental entities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          {/* Practice Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-[var(--shadow-glow)]"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <area.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{area.title}</CardTitle>
                  <CardDescription className="text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-primary font-medium mb-3">
                        Key Practice Areas:
                      </p>
                      <ul className="space-y-2">
                        {area.specialties.map((specialty, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">{area.experts}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-secondary/30 rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Panel & Standing Counsel Services
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Jaipur Vidyut Vitran Nigam Limited (JVVNL)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Rajasthan Public Service Commission (RPSC)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Punjab National Bank (PNB)</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Oriental Insurance Company Ltd
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Jaipur Development Authority (JDA)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Various Insurance Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
