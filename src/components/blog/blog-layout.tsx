import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogLayoutProps {
  title: string;
  date: string;
  tags: string[];
  children: React.ReactNode;
}

export function BlogLayout({ title, date, tags, children }: BlogLayoutProps) {
  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          
          <header>
            <time className="text-sm text-muted-foreground">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-4xl font-bold mt-2 mb-4">{title}</h1>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </article>
  );
}