"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between bg-[#0C2D48]/90 px-4 py-2">
      <h1 className="text-5xl font-extrabold text-white">Gallery Web App</h1>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <div className="flex gap-5">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              // alert("Upload Completed");

              router.refresh();
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}
