const features = [
  { title: "24x7 Emergency", desc: "Round-the-clock emergency care." },
  { title: "Expert Doctors", desc: "Highly experienced specialists." },
  { title: "International Patients", desc: "World-class facilities for global patients." }
];

export default function FeatureCards() {
  return (
    <section className="grid md:grid-cols-3 gap-6 p-10">
      {features.map((f, i) => (
        <div key={i} className="p-6 border rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}