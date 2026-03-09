import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import PromptsSection from "@/components/PromptsSection";
import type { Category } from "@/data/prompts";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesSection activeCategory={activeCategory} onSelect={setActiveCategory} />
      <PromptsSection activeCategory={activeCategory} />
      <footer className="border-t py-8">
        <div className="container text-center font-display text-xs text-muted-foreground">
          QA AI Prompt Library — Built for QA engineers
        </div>
      </footer>
    </div>
  );
};

export default Index;
