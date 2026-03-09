const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_70%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 font-display text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            open-source prompt collection
          </div>
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-6xl">
            QA AI Prompt{" "}
            <span className="text-gradient">Library</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            A curated collection of AI prompts for QA engineers to speed up testing, bug reporting, accessibility checks, automation and test data generation.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#prompts"
              className="inline-flex h-11 items-center rounded-lg bg-primary px-6 font-display text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Prompts
            </a>
            <a
              href="#categories"
              className="inline-flex h-11 items-center rounded-lg border bg-card px-6 font-display text-sm font-medium transition-colors hover:bg-secondary"
            >
              View Categories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
