import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <section className="flex flex-col flex-1 items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Hypoteq 🚀</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          This is the base homepage structure, ready for design integration.
        </p>
      </section>
      <Footer />
    </main>
  );
}
