import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// This would be replaced with actual blog posts from CMS/filesystem
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Solutions with Modern Architecture",
    description: "Exploring microservices, containerization, and cloud-native approaches for enterprise applications.",
    date: "2025-01-15",
    tags: ["Architecture", "Cloud", "Microservices"],
    slug: "scalable-modern-architecture",
  },
  {
    id: 2,
    title: "Bridging the Gap Between IT and Business",
    description: "How technical leaders can effectively communicate with stakeholders and drive business value.",
    date: "2025-01-10",
    tags: ["Leadership", "Communication", "Business"],
    slug: "bridging-it-business-gap",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on technology, leadership, and building better solutions.
          </p>
        </header>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}