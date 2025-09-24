import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Hypoteq
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
