export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">SmartCare</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
    </nav>
  );
}