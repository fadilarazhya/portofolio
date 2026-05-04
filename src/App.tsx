import "./App.css";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Project from "./pages/Project";

const App = () => {
  return (
    <main className="bg-white dark:bg-gray-800">
      <Navbar />
      <About />
      <section className="m-8 sm:flex">
        <div className="mx-4 mb-3 ">
          <h1 className="text-2xl text-teal-600">Test</h1>
          <p className="text-gray-500 dark:text-gray-300">
            Track work across the enterprise through an open, collaborative
            platform. Link issues across Jira and ingest data from other
            software development tools, so your IT support and operations teams
            have richer contextual information to rapidly respond to requests,
            incidents, and changes.
          </p>
        </div>
        <div className="mx-4 mb-3 ">
          <h1 className="text-2xl text-teal-600">Test</h1>
          <p className="text-gray-500 dark:text-gray-300">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease, with a complete audit
            trail for every change.
          </p>
        </div>
      </section>
      <Project />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
