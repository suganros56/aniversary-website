import Dreams from "../components/Dreams";

export default function MemoriesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 text-center mb-8 drop-shadow-lg">
        Manifesting life together
      </h1>
      {/* <LetterMessage message="hello there "/> */}
   
       <Dreams/>
         {/* confettit<LoveConfessionModal/> */}
      </div>
  
    
    </div>
  );
}
