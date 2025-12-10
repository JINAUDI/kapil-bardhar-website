"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, FileText, Calendar, ArrowRight, BookOpen, Newspaper, ArrowLeft } from "lucide-react"

interface JudgmentItem {
  id: number
  title: string
  category: "judgment" | "article" | "update"
  date: string
  summary: string
  court?: string
  citation?: string
}

const LegalUpdates = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<"all" | "judgment" | "article" | "update">("all")

  useEffect(() => {
    // Update document title for SEO
    document.title = "Judgments | Articles | Legal Updates - Bardhar & Bardhar Associates"
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", "Stay informed with the latest court orders, legal analysis, and regulatory updates from Bardhar & Bardhar Associates.")
    } else {
      const meta = document.createElement('meta')
      meta.name = "description"
      meta.content = "Stay informed with the latest court orders, legal analysis, and regulatory updates from Bardhar & Bardhar Associates."
      document.head.appendChild(meta)
    }
  }, [])

  // Sample data - In production, this would come from a CMS or database
  const items: JudgmentItem[] = [
    {
      id: 1,
      title: "Important Supreme Court Ruling on Property Rights",
      category: "judgment",
      date: "2025-11-15",
      summary: "A landmark judgment addressing property inheritance rights and succession laws in Rajasthan.",
      court: "Supreme Court of India",
      citation: "2025 SCC 1234",
    },
    {
      id: 2,
      title: "Understanding the New Consumer Protection Rules 2025",
      category: "article",
      date: "2025-11-10",
      summary: "A comprehensive analysis of the recent amendments to consumer protection regulations and their implications for businesses.",
    },
    {
      id: 3,
      title: "Rajasthan High Court Order on Revenue Matters",
      category: "judgment",
      date: "2025-11-05",
      summary: "Key ruling on land revenue disputes and tenancy rights under the Rajasthan Tenancy Act.",
      court: "Rajasthan High Court",
      citation: "2025 RJ HC 567",
    },
    {
      id: 4,
      title: "New RERA Guidelines for Home Buyers",
      category: "update",
      date: "2025-10-28",
      summary: "Important updates on Real Estate Regulatory Authority guidelines affecting home buyers and developers in Rajasthan.",
    },
    {
      id: 5,
      title: "Arbitration Clause Validity in Commercial Contracts",
      category: "article",
      date: "2025-10-20",
      summary: "Legal insights on drafting enforceable arbitration clauses and recent judicial interpretations.",
    },
    {
      id: 6,
      title: "Section 138 NI Act - Recent Developments",
      category: "update",
      date: "2025-10-15",
      summary: "Updates on cheque bounce cases and procedural changes under the Negotiable Instruments Act.",
    },
    {
      id: 7,
      title: "Land Acquisition Act Amendments - Key Changes",
      category: "judgment",
      date: "2025-10-10",
      summary: "Analysis of recent Supreme Court interpretations on fair compensation under the Land Acquisition Act.",
      court: "Supreme Court of India",
      citation: "2025 SCC 890",
    },
    {
      id: 8,
      title: "GST Compliance for Legal Services",
      category: "article",
      date: "2025-10-05",
      summary: "Comprehensive guide on GST applicability and compliance requirements for legal practitioners.",
    },
    {
      id: 9,
      title: "Cybercrime Laws - Recent Updates",
      category: "update",
      date: "2025-09-28",
      summary: "New provisions under the IT Act and recent amendments affecting digital transactions and data protection.",
    },
    {
      id: 10,
      title: "Family Court Jurisdiction - Important Ruling",
      category: "judgment",
      date: "2025-09-20",
      summary: "Rajasthan High Court clarifies jurisdictional aspects in matrimonial disputes.",
      court: "Rajasthan High Court",
      citation: "2025 RJ HC 445",
    },
    {
      id: 11,
      title: "Understanding NCLT Procedures",
      category: "article",
      date: "2025-09-15",
      summary: "A detailed guide on filing procedures and best practices before the National Company Law Tribunal.",
    },
    {
      id: 12,
      title: "Motor Accident Claims - New Guidelines",
      category: "update",
      date: "2025-09-10",
      summary: "Updated guidelines for computing compensation in motor accident claims under the Motor Vehicles Act.",
    },
  ]

  const filteredItems = activeTab === "all" ? items : items.filter(item => item.category === activeTab)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "judgment":
        return <Scale className="w-5 h-5" />
      case "article":
        return <BookOpen className="w-5 h-5" />
      case "update":
        return <Newspaper className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "judgment":
        return "Judgment"
      case "article":
        return "Article"
      case "update":
        return "Legal Update"
      default:
        return category
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

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
      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Judgments | <span className="text-primary">Articles</span> | Legal Updates
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay informed with the latest court orders, legal analysis, and regulatory updates
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { key: "all", label: "All" },
                { key: "judgment", label: "Judgments" },
                { key: "article", label: "Articles" },
                { key: "update", label: "Legal Updates" },
              ].map((tab) => (
                <Button
                  key={tab.key}
                  variant={activeTab === tab.key ? "default" : "outline"}
                  className={`${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-transparent"
                  }`}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-[var(--shadow-glow)] flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                          item.category === "judgment"
                            ? "bg-primary/20 text-primary"
                            : item.category === "article"
                            ? "bg-accent/20 text-accent"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {getCategoryIcon(item.category)}
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{item.summary}</p>
                    {item.court && (
                      <p className="text-xs text-primary font-medium mb-2">
                        Court: {item.court}
                      </p>
                    )}
                    {item.citation && (
                      <p className="text-xs text-muted-foreground mb-4">
                        Citation: {item.citation}
                      </p>
                    )}
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10 mt-auto bg-transparent group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
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

            {/* Admin Note */}
            <div className="mt-12 bg-secondary/30 border border-border rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">For Administrators:</strong> New judgments, articles, and legal updates can be added through the content management system.
                Contact the web administrator to upload new content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LegalUpdates
