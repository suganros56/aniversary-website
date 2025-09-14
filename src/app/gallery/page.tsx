import Link from "next/link";
import Gallery from "../components/GalleryComponent";

export default function MemoriesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 text-center mb-8 drop-shadow-lg">
       Treasured Clicks
      </h1>
        <Gallery/>
      </div>
    
      <div className="mt-12">
        <Link
          href="/quiz"
          className="px-8 py-3 bg-pink-600 hover:bg-pink-700 transition text-white text-lg font-bold rounded-full shadow animate-bounce"
        >
          Next: let&apos;s have fun →
        </Link>
      </div>
    </div>
  );
}
