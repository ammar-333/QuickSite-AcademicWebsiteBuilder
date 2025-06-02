const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Professor of Computer Science",
      quote:
        "QuickSite made it incredibly easy to showcase my research and publications. I had a professional site up in less than an hour.",
    },
    {
      name: "Dr. Ahmed Khan",
      title: "Postdoctoral Researcher",
      quote:
        "I love how simple and focused QuickSite is for academic profiles. It saved me time and looks great.",
    },
    {
      name: "Dr. Emily Zhao",
      title: "Lecturer in Philosophy",
      quote:
        "Finally, a website builder that understands what academics actually need. Highly recommended!",
    },
  ];
  
  const TestimonialsSection = () => {
    return (
      <section className="py-20 bg-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Academics Are Saying
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <div className="text-sm font-medium text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-600">{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  