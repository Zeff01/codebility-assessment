export default function Features() {
  const features = [
    {
      title: "Fast Performance",
      description: "Experience lightning-fast load times with Next.js.",
    },
    {
      title: "Responsive Design",
      description: "Looks great on desktop, tablet, and mobile devices.",
    },
    {
      title: "Easy to Customize",
      description: "Tailwind CSS makes styling fast and flexible.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
