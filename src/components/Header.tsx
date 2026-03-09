import { Terminal, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="font-display text-sm font-bold">QA AI Prompts</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#categories" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Categories</a>
          <a href="#prompts" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Prompts</a>
        </nav>
        <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
