
import Link from "next/link";
import RapidFireQuestions from "../components/RapidFireQuestions";

export default function MemoriesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 text-center mb-8 drop-shadow-lg">
        Our Story So Far
      </h1>
<RapidFireQuestions/>
      </div>
  
      <div className="mt-12">
        <Link
          href="/audio"
          className="px-8 py-3 bg-pink-600 hover:bg-pink-700 transition text-white text-lg font-bold rounded-full shadow animate-bounce"
        >
          Next: audio →
        </Link>
      </div>
    </div>
  );
}
