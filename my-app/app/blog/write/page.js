import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { PenBox, Image as ImageIcon, Link as LinkIcon, Send } from "lucide-react";
import Link from "next/link";

export default function WriteBlog() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Write a New Blog Post</h1>
                    <div className="flex gap-3">
                        <Button variant="outline">Save Draft</Button>
                        <Button className="gap-2">
                            <Send className="h-4 w-4" />
                            Publish Post
                        </Button>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-3 space-y-6">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="title">Post Title</Label>
                                        <Input id="title" placeholder="e.g. Mastering React 19..." className="text-xl font-bold h-12" />
                                    </div>
                                    <div>
                                        <Label htmlFor="content">Content (Markdown supported)</Label>
                                        <Textarea
                                            id="content"
                                            placeholder="Share your technical insights..."
                                            className="min-h-[400px] font-mono"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm">Post Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label className="text-xs">Category</Label>
                                    <Input placeholder="AI, Web Dev, etc." size="sm" />
                                </div>
                                <div>
                                    <Label className="text-xs">Tags</Label>
                                    <Input placeholder="react, nextjs" size="sm" />
                                </div>
                                <Button variant="outline" className="w-full gap-2 text-xs">
                                    <ImageIcon className="h-3 w-3" />
                                    Add Cover Image
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-blue-500/5 border-blue-500/20">
                            <CardContent className="pt-6">
                                <p className="text-xs text-muted-foreground flex items-center gap-2">
                                    <PenBox className="h-3 w-3 text-blue-500" />
                                    Follow our community guidelines for tech articles.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
