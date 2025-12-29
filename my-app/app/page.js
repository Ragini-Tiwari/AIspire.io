import Header from "../components/Header";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Users, Newspaper, Layout, Rocket, Code2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Next Generation Dev Collaboration</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
                Build Together. <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Inspire with AI.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                AIspire is the ultimate platform for developers to collaborate on
                cutting-edge projects, share insights through blogs, and manage
                growth with AI-powered tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/collab">
                  <Button size="lg" className="h-12 px-8 text-md font-semibold bg-blue-600 hover:bg-blue-700">
                    Explore Collab Hub
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-md font-semibold">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-background border rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero_collab.png"
                  alt="AI Collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Scale</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of tools designed for modern developer workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border bg-background hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collab Hub</h3>
              <p className="text-muted-foreground">
                Find the perfect teammates for your next big idea. Our hub connects developers with complementary skills.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-background hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Layout className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Dashboard</h3>
              <p className="text-muted-foreground">
                Manage your projects, tracks your growth metrics, and stay updated with your collaboration requests in one place.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-background hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                <Newspaper className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tech Blog</h3>
              <p className="text-muted-foreground">
                Share your knowledge with the community. Our markdown-powered blog makes writing tech articles effortless.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-background hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <Code2 className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Project Showcase</h3>
              <p className="text-muted-foreground">
                Highlight your best work. Our stunning project pages make your portfolio stand out to potential collaborators.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-background hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <Rocket className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rapid Deployment</h3>
              <p className="text-muted-foreground">
                Get from idea to launch faster with integrated tools and a community that supports your growth.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-dashed flex flex-col items-center justify-center text-center">
              <p className="text-muted-foreground mb-4">More features coming soon...</p>
              <Button variant="link" className="text-blue-500">View Roadmap</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
