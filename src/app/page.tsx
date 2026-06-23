import { getHeroSlides, getPrograms, getTestimonials, getNewsArticles, getImpactStats, getModelPillars } from "@/lib/data";
import HomeClient from "@/components/HomeClient";

export const revalidate = 60;

export default async function Home() {
  const [heroSlides, programs, testimonials, news, impactStats, modelPillars] = await Promise.all([
    getHeroSlides(),
    getPrograms(),
    getTestimonials(),
    getNewsArticles(),
    getImpactStats(),
    getModelPillars(),
  ]);

  return (
    <HomeClient
      heroSlides={heroSlides}
      programs={programs}
      testimonials={testimonials}
      news={news}
      impactStats={impactStats}
      modelPillars={modelPillars}
    />
  );
}
