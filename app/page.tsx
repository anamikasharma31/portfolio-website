import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <main className=" relative bg-black flex justrify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
    <div className="max-w-7xl w-full">
    <Hero />
    </div>
   </main>
  );
}
