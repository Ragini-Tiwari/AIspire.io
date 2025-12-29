import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
    Users,
    MessageSquare,
    TrendingUp,
    Plus,
    ExternalLink,
    Clock,
    Code2
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Your Dashboard</h1>
                    <p className="text-muted-foreground">Manage your collaborations and track your progress.</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/collab/new">
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" />
                            New Project
                        </Button>
                    </Link>
                    <Link href="/blog/write">
                        <Button variant="outline" className="gap-2">
                            <Plus className="h-4 w-4" />
                            Write Blog
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Collaborations</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Blog Views</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,284</div>
                        <p className="text-xs text-muted-foreground">+15% increase</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Action required</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Project Reputation</CardTitle>
                        <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10">Top Tier</Badge>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">98/100</div>
                        <p className="text-xs text-muted-foreground">Based on reviews</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Projects</CardTitle>
                        <CardDescription>You are participating in 5 active project teams.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[
                                { name: "AI Code Assistant", role: "Contributor", status: "Active", time: "2h ago" },
                                { name: "Blockchain Voting", role: "Lead", status: "In Review", time: "5h ago" },
                                { name: "SaaS Starter Kit", role: "Maintainer", status: "Active", time: "1d ago" },
                            ].map((project, i) => (
                                <div key={i} className="flex items-center justify-between transition-all hover:bg-muted/50 p-2 rounded-lg cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center">
                                            <Code2 className="h-5 w-5 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{project.name}</p>
                                            <p className="text-sm text-muted-foreground">{project.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                                            {project.status}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {project.time}
                                        </span>
                                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full mt-4">View All Projects</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Latest Blog Activity</CardTitle>
                        <CardDescription>Engagement on your recent posts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[
                                { title: "Mastering React 19", views: "450", comments: "12" },
                                { title: "AI in Prototyping", views: "320", comments: "8" },
                                { title: "The Future of Web", views: "120", comments: "2" },
                            ].map((post, i) => (
                                <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
                                    <h4 className="font-medium mb-1 hover:text-blue-500 transition-colors cursor-pointer">{post.title}</h4>
                                    <div className="flex gap-4 text-xs text-muted-foreground">
                                        <span>{post.views} views</span>
                                        <span>{post.comments} comments</span>
                                    </div>
                                </div>
                            ))}
                            <Link href="/blog">
                                <Button variant="link" className="p-0 h-auto">View all articles</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
