export default function WhyAdoptSection() {

  const features = [
    {
      icon: "🐾",
      title: "Save a Precious Life",
      desc: "Every pet deserves love, care, and a safe home. Your adoption gives rescued animals a second chance at happiness.",
    },
    {
      icon: "❤️",
      title: "Unconditional Companionship",
      desc: "Pets become loyal family members who provide emotional support, joy, comfort, and endless unforgettable memories.",
    },
    {
      icon: "🌍",
      title: "Support Animal Welfare",
      desc: "By adopting, you help shelters reduce overcrowding and continue rescuing more homeless and abandoned animals.",
    },
  ];

  return (

    <section className="relative py-24 px-5 overflow-hidden">

      {/* background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-16">

          <div className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-300 px-5 py-2 rounded-full text-sm font-medium mb-6">
            Why People Choose Adoption
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Why Adopt
            <span className="text-orange-500 dark:text-orange-400">
              {" "}Pets?
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Pet adoption is more than bringing home an animal —
            it’s about creating lifelong bonds, saving lives,
            and making the world kinder for every rescued pet.
          </p>

        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            features.map((item, index) => (

              <div
                key={index}
                className="group relative bg-white/70 dark:bg-[#1e293b]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 p-8 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-cyan-500/0 group-hover:from-orange-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

                {/* icon */}
                <div className="relative z-10 w-20 h-20 rounded-3xl bg-orange-500/10 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-300">

                  {item.icon}

                </div>

                {/* title */}
                <h3 className="relative z-10 text-2xl font-bold mb-5">

                  {item.title}

                </h3>

                {/* description */}
                <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">

                  {item.desc}

                </p>

                {/* bottom line */}
                <div className="relative z-10 mt-8 w-16 h-1 bg-orange-500 rounded-full group-hover:w-28 transition-all duration-300"></div>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  );

}