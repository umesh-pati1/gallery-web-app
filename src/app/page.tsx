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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img
                src={image.url}
                className="aspect-square object-cover"
                alt="image"
              />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
