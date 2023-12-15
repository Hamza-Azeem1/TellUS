import Navbar from "./components/navbar";
import Banner from "./components/banner";
import ServiceSection from "./components/services";
import ProcessFlow from "./components/process";
import ProjectFilter from "./components/projects";
import TeamMembers from "./components/team";
import Slider from "./components/slider";
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ServiceSection />
      <ProcessFlow />
      <ProjectFilter />
      <TeamMembers />
      <Slider />
      <Footer />
    </>
  );
}

export default App
