"use client";

import { useAuth, UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronDown, LayoutDashboard, PenBox } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header
      className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50
      supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AIspire logo"
              width={48}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AIspire
            </span>
          </div>
        </Link>

        {/* Nav Right */}
        <div className="flex items-center space-x-2 md:space-x-6">
          <Link
            href="/collab"
            className="text-sm font-medium hover:text-blue-400 transition-colors hidden md:block"
          >
            Collab Hub
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-blue-400 transition-colors hidden md:block"
          >
            Blog
          </Link>

          {isSignedIn ? (
            <>
              {/* Dashboard */}
              <Link href="/dashboard">
                <Button variant="ghost" className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden md:block">Dashboard</span>
                </Button>
              </Link>

              {/* Create Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <PenBox className="h-4 w-4" />
                    <span className="hidden md:block">Create</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link
                      href="/blog/write"
                      className="flex items-center gap-2 w-full"
                    >
                      <PenBox className="h-4 w-4" />
                      <span>Write a Blog</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/collab/new"
                      className="flex items-center gap-2 w-full"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Start Collaboration</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Profile */}
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
