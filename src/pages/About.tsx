const About = () => {
  return (
    <section>
      <section id="about" className="px-8 bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="flex flex-col justify-center gap-y-4">
            <p className="text-md text-teal-500">Hello, my name is</p>
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-slate-400 md:text-5xl lg:text-6xl">
              Fadila Razhya
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
              I'm a Frontend Web Developer & UI/UX Designer. Right now, I'm
              particularly interested in React Web Development.
            </p>
          </div>
        </div>
      </section>
      <section className="px-8 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-10 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="py-4 text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="pb-10 text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="mb-4">
              Hi, I'm Fadila Razhya, but you can call me Acha. I'm a junior
              frontend web developer passionate about crafting clean,
              user-friendly interfaces. I'm continuously learning and improving,
              especially in building seamless and accessible web experiences.
            </p>
            <p className="mb-4">
              UI/UX design also excites me—I love exploring ways to make digital
              products not just functional, but visually engaging. Always eager
              to grow, I’m excited to keep refining my skills.
            </p>
            <p className="mb-4">
              And when I’m not coding, you’ll probably find me buried in a book
              or vibing to Seventeen as a proud Carat!
            </p>
          </div>
          <div className="mx-12 sm:mx-24 mt-8 flex gap-4 justify-center items-center">
            <img
              className="w-sm lg:w-md rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg"
              alt="office content 1"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
