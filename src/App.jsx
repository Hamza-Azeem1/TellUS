import Navbar from "./components/navbar";
import Banner from "./components/banner";
import ServiceSection from "./components/services";
import ProcessFlow from "./components/process";
import ProjectFilter from "./components/projects";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ServiceSection />
      <ProcessFlow />
      <ProjectFilter />
    </>
  );
}

export default App
