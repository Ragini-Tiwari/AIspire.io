import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of AI in Developer Workflows",
        excerpt: "How generative AI is changing the way we collaborate and build software in 2025.",
        category: "AI & ML",
        author: "Ragini Tiwari",
        date: "Dec 28, 2025",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
        slug: "future-of-ai-dev-workflows"
    },
    {
        id: 2,
        title: "Mastering Next.js 15 App Router",
        excerpt: "Deep dive into the latest features of Next.js and how to optimize your server components.",
        category: "Web Dev",
        author: "Alex Chen",
        date: "Dec 25, 2025",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop",
        slug: "mastering-nextjs-15"
    },
    {
        id: 3,
        title: "Building Scalable Collaboration Tools",
        excerpt: "Architectural patterns for real-time collaborative applications using WebSockets.",
        category: "Architecture",
        author: "Sarah Smith",
        date: "Dec 20, 2025",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        slug: "building-scalable-collab-tools"
    }
];

export default function BlogList() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2">Tech Insights</h1>
                    <p className="text-muted-foreground text-lg">Discovery stories, tutorials, and insights from the AIspire community.</p>
                </div>
                <div className="flex w-full md:w-auto gap-3">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-10" placeholder="Search articles..." />
                    </div>
                    <Link href="/blog/write">
                        <Button>Write Post</Button>
                    </Link>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {BLOG_POSTS.map((post) => (
                    <Card key={post.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-muted-foreground/10">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <Badge className="absolute top-4 left-4 bg-blue-600/90 hover:bg-blue-600">{post.category}</Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="leading-tight group-hover:text-blue-500 transition-colors">
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col items-start gap-4">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    {post.author}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {post.date}
                                </div>
                            </div>
                            <Link href={`/blog/${post.slug}`} className="w-full">
                                <Button variant="ghost" className="w-full justify-between group-hover:bg-blue-500/10 group-hover:text-blue-500">
                                    Read More
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
