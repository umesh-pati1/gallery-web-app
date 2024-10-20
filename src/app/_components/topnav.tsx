"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SimpleUploadButton from "./simple-upload-button";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between bg-[#0C2D48]/90 px-4 py-2">
      <h1 className="text-5xl font-extrabold text-white">Gallery Web App</h1>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <div className="flex gap-5">
          <SimpleUploadButton />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}
