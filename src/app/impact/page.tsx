"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/ui/StatsBar";
import StoryCard from "@/components/ui/StoryCard";
import { ArrowRight } from "lucide-react";
import { SECONDARY } from "@/lib/constants";

const STORIES = [
  {
    title: "From Subsistence to Sustainability",
    excerpt: "How one family transformed their small plot into a thriving coffee farm with BCC's support, generating income they never thought possible.",
    image: "/images/impact-coffee.png",
  },
  {
    title: "A Cocoa Revolution in Bugwere",
    excerpt: "When cocoa seedlings arrived in her village, Mama Grace saw an opportunity to diversify her income and secure her children's future.",
    image: "/images/impact-cocoa.png",
  },
  {
    title: "7,000 Homes and Counting",
    excerpt: "The fertilizer distribution program has fundamentally changed crop yields across the region, enabling families to harvest more and earn more.",
    image: "/images/impact-fertilizer.png",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title="Impact Stories"
        subtitle="Real stories from the field showing how BCC programs transform lives and communities."
        breadcrumb={[{ label: "Impact", href: "/impact" }]}
      />

      {/* Key Stats */}
      <StatsBar
        stats={[
          { number: "5,000+", label: "Coffee Homes" },
          { number: "3,700+", label: "Cocoa Homes" },
          { number: "7,000+", label: "Fertilizer Homes" },
          { number: "15,000+", label: "Lives Impacted" },
        ]}
        dark
      />

      {/* Stories */}
      <Section background="white" py="xl">
        <Container>
          <SectionHeading label="From the Field" title="Impact Stories" description="Every number represents a family, a story, a transformed livelihood. Here are some of the stories behind our impact." centered />
          <div className="grid md:grid-cols-3 gap-8">
            {STORIES.map((story, i) => (
              <StoryCard
                key={i}
                image={story.image}
                title={story.title}
                excerpt={story.excerpt}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Explore more */}
      <Section background="light" py="md">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-raleway)" }}>Explore Our Data</h2>
            <p className="text-gray-600 mb-8">Dive deeper into the numbers and see how our programs are growing across the region.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" href="/impact/statistics" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Farmer Statistics
              </Button>
              <Button variant="outline" href="/impact/expansion">
                Regional Expansion
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
