import { useMemo, useState } from "react";
import type { Category } from "@/data/prompts";

const categoryOptions: Category[] = [
  "Test Design",
  "Bug Reporting",
  "Test Data",
  "Accessibility",
  "Automation",
];

const CustomPromptBuilder = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category>("Test Design");
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("");

  const formattedPrompt = useMemo(() => {
    return `Title: ${title || "[Custom prompt title]"}

Category: ${category}

Description:
${description || "[Short description]"}

Prompt:
${prompt || "[Write your custom prompt here]"}`;
  }, [title, category, description, prompt]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedPrompt);
      alert("Custom prompt copied to clipboard.");
    } catch (error) {
      console.error("Failed to copy prompt:", error);
      alert("Copy failed. Please try again.");
    }
  };

  return (
    <section className="container py-12">
      <div className="mx-auto max-w-4xl rounded-2xl border bg-card p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold">Custom Prompt Builder</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Create your own QA prompt and copy it instantly.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="custom-title" className="text-sm font-medium">
              Prompt title
            </label>
            <input
              id="custom-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Example: API Validation Prompt"
              className="rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="custom-category" className="text-sm font-medium">
              Category
            </label>
            <select
              id="custom-category"
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              className="rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="custom-description" className="text-sm font-medium">
            Short description
          </label>
          <textarea
            id="custom-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What is this prompt used for?"
            rows={3}
            className="rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <label htmlFor="custom-prompt" className="text-sm font-medium">
            Prompt text
          </label>
          <textarea
            id="custom-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write your custom prompt here..."
            rows={12}
            className="rounded-lg border bg-background px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex w-fit items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Copy Custom Prompt
          </button>

          <div className="rounded-xl border bg-muted/30 p-4">
            <p className="mb-2 text-sm font-medium">Preview</p>
            <pre className="whitespace-pre-wrap break-words text-xs text-muted-foreground">
              {formattedPrompt}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPromptBuilder;
