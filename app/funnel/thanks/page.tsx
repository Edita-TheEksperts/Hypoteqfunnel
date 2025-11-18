export default function ThanksPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-[32px] md:text-[42px] font-semibold text-black mb-4">
        Vielen Dank, dass Sie das Formular ausgefüllt haben.
      </h1>

      <p className="text-[18px] text-gray-700 mb-8">
        Wir melden uns in Kürze bei Ihnen!
      </p>

      <a
        href="/"
        className="px-6 py-2 bg-[#c2e86f] hover:bg-[#b5dc63] text-black rounded-full text-sm"
      >
        Zurück zur Homepage
      </a>

    </div>
  );
}
