import { FlaskConical, Bug, Database, Accessibility, Cog } from "lucide-react";
import { categories, type Category } from "@/data/prompts";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Bug,
  Database,
  Accessibility,
  Cog,
};

interface Props {
  activeCategory: Category | null;
  onSelect: (cat: Category | null) => void;
}

const CategoriesSection = ({ activeCategory, onSelect }: Props) => {
  return (
    <section id="categories" className="border-b py-16">
      <div className="container">
        <h2 className="mb-2 font-display text-2xl font-bold">Categories</h2>
        <p className="mb-8 text-muted-foreground">Filter prompts by area of expertise</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onSelect(isActive ? null : cat.name)}
                className={`group flex flex-col gap-2 rounded-lg border p-4 text-left transition-all hover:shadow-[var(--card-shadow-hover)] ${
                  isActive
                    ? "border-primary bg-primary/5"
                    : "bg-card hover:border-primary/40"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`} />
                <span className="font-display text-sm font-semibold">{cat.name}</span>
                <span className="text-xs text-muted-foreground">{cat.description}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
