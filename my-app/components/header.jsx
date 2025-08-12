import { SignedIn, SignedOut, UserButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <>
      <SignedOut>
        <SignUpButton />
      </SignedOut>
      
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default Header;
