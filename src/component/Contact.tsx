const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="border-t border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-8 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-6 text-4xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white lg:text-5xl">
          Get in Touch
        </h1>
        <p className="mb-12 text-base font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:mx-64 lg:mb-16 lg:text-lg">
          I'm currently open to new opportunities, and my inbox is always open.
          Feel free to reach out—whether you have a question or just want to say
          hi, I'll do my best to respond!
        </p>
        <button className="relative mb-8 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg border border-teal-500 p-0.5 text-base font-medium text-gray-900 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-4 dark:text-white lg:mb-16">
          <a
            href="mailto:fadilarazhya03@gmail.com"
            className="relative rounded-md border-teal-500 px-5 py-3 font-medium transition-all duration-75 ease-in">
            Say Hello
          </a>
        </button>
      </div>
    </section>
  );
};

export default Contact;
