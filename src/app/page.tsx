import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id} className="aspect-video">
          <Link href={`/image/${image.id}`} className="contents">
            <Image
              src={image.url}
              style={{
                objectFit: "cover",
              }}
              height={240}
              width={400}
              className="h-full w-full"
              alt={image.name}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div>Loggin Above First</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
