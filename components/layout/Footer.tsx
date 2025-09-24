export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto text-center px-6 py-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} Hypoteq. All rights reserved.
      </div>
    </footer>
  )
}
