import { SignedIn, SignedOut, UserButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <link rel="stylesheet" href="" />
        <img
          src="/logo.png"
          alt="AIspire logo"
          width={400}
          height={320}
          className="h-24 py-1 w-auto object-contain"
        />
      </nav>

      <SignedOut>
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;

