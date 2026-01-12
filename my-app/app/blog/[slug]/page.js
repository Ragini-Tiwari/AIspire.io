import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { ChevronLeft, Calendar, User, Share2, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-12">
            <Link href="/blog">
                <Button variant="ghost" className="gap-2 mb-8">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Blog
                </Button>
            </Link>

            <article className="max-w-3xl mx-auto">
                <header className="mb-12 text-center">
                    <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">AI & ML</Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        The Future of AI in Developer Workflows
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                            <span className="font-medium text-foreground">Ragini Tiwari</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>Dec 28, 2025</span>
                        </div>
                    </div>
                </header>

                <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                        alt="AI Concept"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        As we move further into 2025, the integration of Artificial Intelligence into our daily development
                        cycles has transitioned from a novelty to a necessity. In this post, we explore the deep shifts
                        in collaborative building.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">1. AI-Powered Pair Programming</h2>
                    <p className="mb-6">
                        Collaboration is no longer just between humans. With advanced agents like Antigravity,
                        developers can now brainstorm, architect, and execute complex features with an intelligent
                        partner that understands the context of the entire codebase.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">2. Real-time Collaboration Hubs</h2>
                    <p className="mb-6">
                        The AIspire Collaboration Hub is at the forefront of this change, connecting developers
                        not just based on their tech stack, but based on their shared vision for AI integration
                        in production environments.
                    </p>

                  <div className="bg-muted/50 p-8 rounded-2xl border my-12 italic">
                     {`The goal of AI is not to replace the developer, but to amplify their creative potential
                     and handle the mundane, so we can focus on building the extraordinary.`}
                    </div>


                    <p>
                        Stay tuned as we continue to roll out new features in the AIspire Collab Hub to
                        further bridge the gap between ideation and deployment.
                    </p>
                </div>

                <footer className="mt-16 pt-8 border-t flex items-center justify-between">
                    <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="gap-2">
                            <MessageCircle className="h-4 w-4" />
                            24 Comments
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                            <Share2 className="h-4 w-4" />
                            Share
                        </Button>
                    </div>
                    <Badge variant="outline">#AI #DevLife #Collaboration</Badge>
                </footer>
            </article>
        </div>
    );
}
