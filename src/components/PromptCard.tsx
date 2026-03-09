import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Prompt } from "@/data/prompts";

const PromptCard = ({ title, description, category, prompt }: Prompt) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex flex-col rounded-lg border bg-card p-5 shadow-[var(--card-shadow)] transition-all hover:shadow-[var(--card-shadow-hover)]">
      <span className="mb-3 inline-flex w-fit rounded-md bg-secondary px-2 py-0.5 font-display text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {category}
      </span>
      <h3 className="mb-2 font-display text-sm font-semibold leading-snug">{title}</h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">{description}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className="w-full gap-2 font-display text-xs"
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        {copied ? "Copied!" : "Copy Prompt"}
      </Button>
    </div>
  );
};

export default PromptCard;
