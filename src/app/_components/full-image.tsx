import Image from "next/image";
import { getMyImage } from "~/server/queries";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getMyImage(id);

  return (
    <Image
      src={image.url}
      style={{
        objectFit: "cover",
      }}
      height={400}
      width={600}
      className="aspect-video"
      alt={image.name}
    />
  );
}
