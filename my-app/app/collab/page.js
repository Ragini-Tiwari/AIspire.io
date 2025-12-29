import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Search, Users, Code2, Rocket, Star, Filter } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        id: 1,
        title: "AI Open Source Ledger",
        description: "Building a transparent ledger for AI training data sets using blockchain.",
        tags: ["Next.js", "Tauri", "PyTorch"],
        teamSize: 4,
        openRoles: ["Frontend Developer", "AI Engineer"],
        stars: 124
    },
    {
        id: 2,
        title: "EcoTrack Mobile App",
        description: "Crowdsourced environmental tracking app with real-time data visualization.",
        tags: ["React Native", "Firebase", "D3.js"],
        teamSize: 3,
        openRoles: ["Mobile Developer", "UI Designer"],
        stars: 89
    },
    {
        id: 3,
        title: "DevFlow Automation",
        description: "Automating routine developer tasks with local LLMs and agentic workflows.",
        tags: ["Rust", "Python", "LLMs"],
        teamSize: 2,
        openRoles: ["Backend Engineer", "DevOps"],
        stars: 256
    }
];

export default function CollabHub() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-12">
            <div className="flex flex-col items-center text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Collaboration Hub</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    The heartbeat of AIspire. Find projects that match your skills, join elite teams, and build the future together.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-12">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-10 h-12" placeholder="Search by technology, project name, or role..." />
                </div>
                <Button variant="outline" className="h-12 gap-2">
                    <Filter className="h-4 w-4" />
                    Filter Projects
                </Button>
                <Link href="/collab/new">
                    <Button className="h-12 px-8">Start a Project</Button>
                </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project) => (
                    <Card key={project.id} className="border-muted-foreground/10 flex flex-col hover:border-blue-500/50 transition-all group">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/10">Active</Badge>
                                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    {project.stars}
                                </div>
                            </div>
                            <CardTitle className="text-2xl group-hover:text-blue-500 transition-colors">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                                ))}
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm font-semibold flex items-center gap-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    Open Roles:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.openRoles.map(role => (
                                        <span key={role} className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-500">{role}</span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Button className="w-full gap-2">
                                Join Project
                                <Rocket className="h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
