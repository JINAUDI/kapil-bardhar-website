"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, FileText, Calendar, ArrowRight, BookOpen, Newspaper } from "lucide-react"

interface JudgmentItem {
  id: number
  title: string
  category: "judgment" | "article" | "update"
  date: string
  summary: string
  court?: string
  citation?: string
}

const JudgmentsSection = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<"all" | "judgment" | "article" | "update">("all")

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Judgments | <span className="text-primary">Articles</span> | Legal Updates
            </h2>
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

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent px-8 py-3 group"
              onClick={() => navigate("/legal-updates")}
            >
              View All Legal Updates
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
  )
}

export default JudgmentsSection
