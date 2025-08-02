export default function ContactForm() {
  return (
    <section id="contact" className="py-10 px-4 bg-gray-50">
      <h2 className="text-center text-2xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
        <textarea placeholder="Message" className="w-full border px-4 py-2 rounded h-32"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full w-full hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}