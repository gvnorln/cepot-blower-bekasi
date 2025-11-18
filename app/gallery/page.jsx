import Link from "next/link";
import HeaderHome from "../components/HeaderHome";
import GalleryGrid from "../components/GalleryGrid";

export const metadata = {
  title: "Gallery - Cepot Blower Bekasi",
  description: "Kumpulan foto dan dokumentasi event Cepot Blower Bekasi",
};

const WHATSAPP_PHONE = "6281234567890";

export default function GalleryPage() {
  return (
    <>
      <HeaderHome WHATSAPP_PHONE={WHATSAPP_PHONE} />
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 text-center">
            Gallery
          </h1>
          <p className="text-gray-600 text-center mb-10">
            Koleksi foto event dan perlengkapan Cepot Blower Bekasi
          </p>

          <GalleryGrid />

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              &larr; Kembali ke Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
