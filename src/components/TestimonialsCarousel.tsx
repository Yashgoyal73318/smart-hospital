const testimonials = [
  { name: "John Doe", text: "SmartCare provided excellent service and care." },
  { name: "Jane Smith", text: "Truly professional and compassionate doctors." },
  { name: "Carlos Ruiz", text: "International patient care was seamless." }
];

export default function TestimonialsCarousel() {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">What Our Patients Say</h2>
      <div className="flex overflow-x-auto gap-4 px-10">
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-[300px] bg-white p-6 rounded-lg shadow">
            <p>"{t.text}"</p>
            <h4 className="mt-4 font-semibold">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}