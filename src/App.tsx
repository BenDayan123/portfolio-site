import { cn } from "./utils";
import { FloatingNav } from "./components/FloatingNavBar";
import { ProjectSection } from "./components/Pages/Projects";
import { LandSection } from "./components/Pages/Land";
import { Footer } from "./components/Pages/Footer";
import { GridTechStack } from "./components/Techstack";
import { NoiseFilter } from "./components/Noise";
import "./global.scss";

const navItems = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Techstack",
    link: "#techstack",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const App = () => {
  return (
    <div
      className={cn(
        "h-full w-full overflow-auto overflow-x-hidden dark bg-background-dark"
      )}
    >
      <NoiseFilter />
      <FloatingNav navItems={navItems} />
      <div className="relative h-full bg-background-light dark:bg-background-dark">
        <LandSection />
        <ProjectSection />
        <GridTechStack />
        <Footer />
      </div>
    </div>
  );
};

export default App;
