"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { ArrowLeft, Rocket } from "lucide-react";
import Link from "next/link";

export default function NewProject() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-12 max-w-3xl">
            <Link href="/collab">
                <Button variant="ghost" className="mb-8 gap-2 pl-0 hover:pl-0 hover:bg-transparent">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Collaboration Hub
                </Button>
            </Link>

            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Start a New Project</h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Launch your vision. Assemble your dream team. Build the future.
                </p>
            </div>

            <Card className="border-muted-foreground/10">
                <CardHeader>
                    <CardTitle className="text-2xl">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Project Title</Label>
                        <Input id="title" placeholder="e.g. AI Open Source Ledger" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe your project, its goals, and the impact it will have..."
                            className="min-h-[120px]"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="tags">Technolgies (comma separated)</Label>
                            <Input id="tags" placeholder="e.g. Next.js, Python, Tailwind" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="teamSize">Target Team Size</Label>
                            <Input id="teamSize" type="number" placeholder="e.g. 4" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="roles">Open Roles (comma separated)</Label>
                        <Input id="roles" placeholder="e.g. Frontend Developer, AI Engineer" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                    <Link href="/collab">
                        <Button variant="outline">Cancel</Button>
                    </Link>
                    <Button className="gap-2">
                        Launch Project
                        <Rocket className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
