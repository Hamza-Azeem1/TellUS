import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import ServiceSection from "./components/services";
import ProcessFlow from "./components/process";
import ProjectFilter from "./components/projects";
import TeamMembers from "./components/team";
import Slider from "./components/slider";
import Footer from "./components/footer";
import Aboutus from "./components/about";
import Contactus from "./components/contact";
import ScrollToTop from "./components/scroll";
import NotFound from "./components/notfound";

const Home = () => (
  <>
    <Navbar />
    <Banner />
    <ServiceSection />
    <ProcessFlow />
    <ProjectFilter />
    <TeamMembers />
    <Slider />
    <Footer />
    <ScrollToTop />
  </>
);

const About = () => (
  <>
    <Navbar />
    <Aboutus />
    <Footer />
  </>
);

const ServicesComponent = () => (
  <>
    <Navbar />
    <ServiceSection />
    <Footer />
  </>
);

const Portfolio = () => (
  <>
    <Navbar />
    <ProjectFilter />
    <Footer />
  </>
);

const Contact = () => (
  <>
    <Navbar />
    <Contactus />
    <Footer />
  </>
);

const PageNotFound = () => (
  <>
    <Navbar />
    <NotFound />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
