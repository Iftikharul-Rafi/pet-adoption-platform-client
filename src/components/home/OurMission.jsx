import {
  FaPaw,
  FaHeart,
  FaHome,
  FaShieldAlt,
} from "react-icons/fa";

export default function OurMission() {

  const missions = [
    {
      icon: <FaHeart />,
      title: "Compassion First",
      desc:
        "We believe every pet deserves love, care, and a safe family where they can live happily.",
    },
    {
      icon: <FaHome />,
      title: "Find Loving Homes",
      desc:
        "Our platform connects rescued and homeless pets with caring adopters across the country.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Adoption",
      desc:
        "We ensure a secure and transparent adoption experience for both pet owners and adopters.",
    },
  ];

  return (

    <section className="py-24 px-5 bg-gradient-to-b from-gray-100 to-white dark:from-[#111827] dark:to-[#0f172a] transition-colors duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto">




        {/* ===============================
            HEADER
        =============================== */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-400 text-sm font-semibold mb-6">

            <FaPaw />

            OUR PURPOSE

          </div>





          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

            Our
            <span className="text-orange-500 dark:text-orange-400">
              {" "}Mission
            </span>

          </h2>





          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">

            We are committed to building a compassionate pet adoption platform
            where rescued animals find loving homes and families discover loyal lifelong companions.

          </p>

        </div>









        {/* ===============================
            MISSION CARDS
        =============================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {
            missions.map((item, index) => (

              <div
                key={index}
                className="group relative bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-3xl p-8 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
              >




                {/* glow effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>





                {/* icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-orange-500/20">

                  {item.icon}

                </div>






                {/* content */}
                <div className="relative z-10 mt-7">

                  <h3 className="text-2xl font-bold mb-4">

                    {item.title}

                  </h3>





                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">

                    {item.desc}

                  </p>

                </div>






                {/* bottom line */}
                <div className="relative z-10 mt-8 w-14 h-1 rounded-full bg-orange-500 group-hover:w-24 transition-all duration-500"></div>

              </div>

            ))
          }

        </div>









        {/* ===============================
            BOTTOM CTA
        =============================== */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-[2rem] p-10 md:p-14 text-center text-white shadow-2xl shadow-orange-500/20">

          <h3 className="text-3xl md:text-4xl font-extrabold">

            Together We Can Save More Lives 🐾

          </h3>





          <p className="mt-5 text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">

            Every adoption creates a brighter future for pets in need.
            Join our mission and help build a world where every animal is loved and protected.

          </p>






          <button className="mt-8 bg-white text-orange-600 hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg">

            Join Our Mission

          </button>

        </div>

      </div>

    </section>

  );

}

..