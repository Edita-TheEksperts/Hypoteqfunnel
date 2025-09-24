import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <section className="flex flex-col flex-1 items-center justify-center text-center px-6">
        <h1 className="text-4xl font-semibold text-gray-800">About Hypoteq</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          This page serves as a template. The final design will expand with
          more sections and visuals according to the design system.
        </p>
      </section>
      <Footer />
    </main>
  );
}
