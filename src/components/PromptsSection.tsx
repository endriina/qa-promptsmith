import { prompts, type Category } from "@/data/prompts";
import PromptCard from "./PromptCard";

interface Props {
  activeCategory: Category | null;
}

const PromptsSection = ({ activeCategory }: Props) => {
  const filtered = activeCategory
    ? prompts.filter((p) => p.category === activeCategory)
    : prompts;

  return (
    <section id="prompts" className="py-16">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="mb-2 font-display text-2xl font-bold">Prompt Library</h2>
            <p className="text-muted-foreground">
              {filtered.length} prompt{filtered.length !== 1 && "s"}
              {activeCategory && (
                <span> in <span className="font-medium text-foreground">{activeCategory}</span></span>
              )}
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PromptCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromptsSection;
