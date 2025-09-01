import Header from "@/components/Header";  // ✅ import your Header
import { Button } from "@/components/ui/button"; // (only needed if you actually use Button inside this file)

export default function Home() {
  return (
    <main>
      <Header />
      <section className="pt-20 container mx-auto">
        <h1 className="text-3xl font-bold">Welcome to AIspire 🚀</h1>
        <p className="mt-2 text-muted-foreground">
          Sign in to access your dashboard and tools.
        </p>
      </section>
    </main>
  );
}
