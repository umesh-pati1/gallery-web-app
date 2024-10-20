/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { getMyImage } from "~/server/queries";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getMyImage(id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex flex-col bg-[#B1D4E0]">
      <img
        src={image.url}
        style={{
          objectFit: "cover",
        }}
        className="aspect-video"
        alt={image.name}
      />

      <div className="about-wrapper p-4">
        <div className="about-header">
          <h3 className="text-2xl">
            About <strong>{image.name}</strong>
          </h3>
        </div>

        <div className="about-container">
          <div>
            <span>Uploaded By: </span>
            <span className="font-bold">{uploaderInfo.fullName}</span>
          </div>

          <div>
            <span>Created on: </span>
            <span className="font-bold">
              {image.createdAt.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
