const Jumbotron = () => {
  return (
    <section className="px-8 min-h-screen flex items-center bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16 items-center bg-[url('/img/lotus_bg1.svg')">
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
  );
};

export default Jumbotron;
