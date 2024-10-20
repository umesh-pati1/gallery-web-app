import FullPageImageView from "~/app/_components/full-image";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <main className="flex items-center justify-center">
      <FullPageImageView id={idAsNumber} />
    </main>
  );
}
