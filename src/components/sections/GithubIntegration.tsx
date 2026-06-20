import { Star, GitFork, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

async function getPinnedRepos(username: string): Promise<Repo[]> {
  try {
    // Note: We use a general repos endpoint and sort by updated since pinned repos require GraphQL API
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    // Fallback Mock Data
    return [
      {
        id: 1,
        name: "parkinsons-disease-prediction",
        description: "AI-powered healthcare solution detecting Parkinson's using voice biomarkers.",
        stargazers_count: 12,
        forks_count: 3,
        html_url: "https://github.com/sushmakai27",
        language: "Python"
      },
      {
        id: 2,
        name: "ai-news-recommendation",
        description: "Personalized intelligent news platform using cloud technologies.",
        stargazers_count: 8,
        forks_count: 2,
        html_url: "https://github.com/sushmakai27",
        language: "Jupyter Notebook"
      }
    ];
  }
}

export async function GithubIntegration() {
  const username = "sushmakai27";
  const repos = await getPinnedRepos(username);

  return (
    <section id="github" className="py-20 bg-secondary/10 border-y border-border/50">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-primary">
            &lt;Open Source /&gt;
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recent activity and contributions from my GitHub profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {repos.map((repo) => (
            <Link key={repo.id} href={repo.html_url} target="_blank" className="block group">
              <Card className="h-full bg-background/50 hover:bg-secondary/20 border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary group-hover:underline">
                      <BookOpen className="h-5 w-5" />
                      <CardTitle className="text-lg">{repo.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/80" />
                        <span>{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm"
          >
            <GithubIcon className="h-4 w-4" />
            View Full Profile on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
