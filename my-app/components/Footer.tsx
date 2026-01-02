import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
    Github,
    Twitter,
    Linkedin,
    Mail,
    Heart,
    Code2,
    Sparkles
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-muted/30 border-t pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-blue-500/10">
                                <Code2 className="w-6 h-6 text-blue-500" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                AIspire
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Empowering developers to build the future together.
                            The ultimate platform for collaboration, innovation, and growth
                            powered by AI.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-blue-500/10 hover:text-blue-500">
                                <Github className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-blue-400/10 hover:text-blue-400">
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-blue-700/10 hover:text-blue-700">
                                <Linkedin className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/collab" className="hover:text-foreground transition-colors">
                                    Collab Hub
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-foreground transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-foreground transition-colors">
                                    Tech Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                                    Roadmap <span className="text-[10px] bg-blue-500/10 text-blue-500 px-1.5 py-0.5 rounded">New</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Community Rules
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h3 className="font-semibold mb-4">Stay Updated</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to our newsletter for the latest AI trends and platform updates.
                        </p>
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <Input type="email" placeholder="Enter your email" className="bg-background" />
                                <Button size="icon" variant="default">
                                    <Mail className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-[10px] text-muted-foreground">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} AIspire. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        <span>Made with</span>
                        <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
                        <span>by Ragini</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
