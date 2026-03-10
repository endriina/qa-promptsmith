import { useEffect, useMemo, useState } from "react";
import type { Category } from "@/data/prompts";

const categoryOptions: Category[] = [
  "Test Design",
  "Bug Reporting",
  "Test Data",
  "Accessibility",
  "Automation",
];

type SavedPrompt = {
  id: string;
  title: string;
  category: Category;
  description: string;
  prompt: string;
};

const STORAGE_KEY = "qa-custom-prompts";

const CustomPromptBuilder = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category>("Test Design");
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("");
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw) as SavedPrompt[];
      if (Array.isArray(parsed)) {
        setSavedPrompts(parsed);
      }
    } catch (error) {
      console.error("Failed to load saved prompts:", error);
    }
  }, []);

  const formattedPrompt = useMemo(() => {
    return `Title: ${title || "[Custom prompt title]"}

Category: ${category}

Description:
${description || "[Short description]"}

Prompt:
${prompt || "[Write your custom prompt here]"}`;
  }, [title, category, description, prompt]);

  const savePromptsToStorage = (promptsToSave: SavedPrompt[]) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(promptsToSave));
    } catch (error) {
      console.error("Failed to save prompts:", error);
      alert("Saving failed. Please try again.");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedPrompt);
      alert("Custom prompt copied to clipboard.");
    } catch (error) {
      console.error("Failed to copy prompt:", error);
      alert("Copy failed. Please try again.");
    }
  };

  const handleSave = () => {
    if (!title.trim() || !prompt.trim()) {
      alert("Please add at least a prompt title and prompt text.");
      return;
    }

    const newPrompt: SavedPrompt = {
      id: crypto.randomUUID(),
      title: title.trim(),
      category,
      description: description.trim(),
      prompt: prompt.trim(),
    };

    const updatedPrompts = [newPrompt, ...savedPrompts];
    setSavedPrompts(updatedPrompts);
    savePromptsToStorage(updatedPrompts);

    alert("Prompt saved in your browser.");
  };

  const handleDelete = (id: string) => {
    const updatedPrompts = savedPrompts.filter((item) => item.id !== id);
    setSavedPrompts(updatedPrompts);
    savePromptsToStorage(updatedPrompts);
  };

  const handleCopySavedPrompt = async (item: SavedPrompt) => {
    const textToCopy = `Title: ${item.title}

Category: ${item.category}

Description:
${item.description || "[Short description]"}

Prompt:
${item.prompt}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Saved prompt copied to clipboard.");
    } catch (error) {
      console.error("Failed to copy saved prompt:", error);
      alert("Copy failed. Please try again.");
    }
  };

  return (
    <section className="container py-12">
      <div className="mx-auto max-w-4xl rounded-2xl border bg-card p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold">Custom Prompt Builder</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Create your own QA prompt, copy it instantly, or save it in your browser.
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

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Copy Custom Prompt
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Save Prompt
          </button>
        </div>

        <div className="mt-6 rounded-xl border bg-muted/30 p-4">
          <p className="mb-2 text-sm font-medium">Preview</p>
          <pre className="whitespace-pre-wrap break-words text-xs text-muted-foreground">
            {formattedPrompt}
          </pre>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Saved Prompts</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            These prompts are saved locally in your browser.
          </p>

          <div className="mt-4 space-y-4">
            {savedPrompts.length === 0 ? (
              <div className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
                No saved prompts yet.
              </div>
            ) : (
              savedPrompts.map((item) => (
                <div key={item.id} className="rounded-xl border p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.category}
                      </p>
                      {item.description ? (
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopySavedPrompt(item)}
                        className="rounded-lg border px-3 py-2 text-xs font-medium hover:bg-muted"
                      >
                        Copy
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="rounded-lg border px-3 py-2 text-xs font-medium hover:bg-muted"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <pre className="mt-4 whitespace-pre-wrap break-words rounded-lg bg-muted/30 p-3 text-xs text-muted-foreground">
                    {item.prompt}
                  </pre>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPromptBuilder;
