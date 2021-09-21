import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Projects from "../Components/Projects/Projects";

export default function Home() {
  return (
    <div className="h-screen w-screen p-2 dark:bg-gray-900 bg-white dark:text-white">
      <Header />
      <Hero />
      <Projects />
      
    </div>
  );
}
