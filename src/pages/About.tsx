const About = () => {
  return ( //test
    <section className="px-8 min-h-screen flex items-center bg-white dark:bg-gray-900">
      <div
        id="about"
        className="mx-auto max-w-screen-xl grid items-center gap-10 px-4 py-8 lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
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
            products not just functional, but visually engaging. Always eager to
            grow, I’m excited to keep refining my skills.
          </p>
          <p className="mb-4">
            And when I’m not coding, you’ll probably find me buried in Japanese
            literature or vibing to Seventeen as a proud Carat!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative rounded-md overflow-hidden w-xs sm:w-md">
            <div className="relative bg-teal-700 bg-opacity-25 rounded-md hover:bg-opacity-0 transition-all duration-500 ease-in-out">
              <img
                className="w-md lg:w-lg opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                src="./img/cha.jpg"
                alt="Acha"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
