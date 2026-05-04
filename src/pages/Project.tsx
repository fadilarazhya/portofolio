<section
  id="project"
  className="px-8 py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div className="py-8 lg:px-10 lg:py-16 text-center">
      <h1 className="mb-6 text-2xl sm:text-4xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white lg:text-5xl">
        Project
      </h1>
    </div>

    {/* Ensuring vertical centering */}
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-y-8">
      {/* Image Section */}
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto overflow-hidden rounded-md bg-cover bg-[url('/img/obm.jpg')]">
        <div className="bg-teal-700 bg-opacity-25 rounded-md hover:bg-opacity-0 h-auto transition-all duration-500 ease-in-out">
          <img
            className="w-full opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out"
            src="./img/obm.jpg"
            alt="Company Profile OBM"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left">
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
          Company Profile
          <a
            href="https://orelabahari.co.id/"
            className="pl-4"
            data-tooltip-target="tooltip-right"
            data-tooltip-placement="right">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white hover:text-teal-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
              />
            </svg>
          </a>
        </h1>

        <hr className="my-2 md:my-4 border-gray-200 dark:border-gray-800" />

        <p className="mb-6 text-gray-500 dark:text-gray-400">
          I revamped and rebuilt the company profile website for PT. Orela
          Bahari Mandiri. The new design focuses on presenting the company's
          products and services in a clear and engaging manner. I use{" "}
          <span className="text-teal-500">Figma</span> to create the UI design &
          <span className="text-teal-500"> Notion</span> for content
          copywriting.
        </p>
      </div>
    </div>
  </div>
</section>;
