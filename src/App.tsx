import "./App.css";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Jumbotron from "./component/Jumbotron";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Project from "./pages/Project";
import Tools from "./pages/Tools";

const App = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Jumbotron />
      <About />
      <Project />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
