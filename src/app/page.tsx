import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/oOUk3MVaEcePNmhcoKutiIbaH2JcrqO3zDBYFjN1kvTusGnM",
  "https://utfs.io/f/oOUk3MVaEcePZcLnBHtvC37Bjk8gDT4fPriR9IMlJwyuYzVH",
  "https://utfs.io/f/oOUk3MVaEcePotGznTGVaEcePkQAlo5rNWC0Xx7ih4mF3qbT",
  "https://utfs.io/f/oOUk3MVaEcePUfYpDo7F6B5pj37laedKObXwSZ4LRyuAHkvn",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id + image.url} className="w-48">
            <img
              src={image.url}
              className="aspect-square object-cover"
              alt="image"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
