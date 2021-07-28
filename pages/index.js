import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";

export default function Home() {
  return (
    <div className="h-screen w-screen p-2 dark:bg-gray-900 bg-white dark:text-white">
      <Header />
      <Hero />
      
    </div>
  );
}
