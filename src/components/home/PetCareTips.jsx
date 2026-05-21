import {
  FaBone,
  FaHeart,
  FaSyringe,
  FaPaw,
  FaStethoscope,
  FaHome,
} from "react-icons/fa";

import Link from "next/link";

export default function PetCareTips() {

  const tips = [
    {
      icon: <FaBone />,
      title: "Healthy Nutrition",
      desc:
        "Provide balanced meals and fresh water daily to keep your pets healthy and energetic.",
    },
    {
      icon: <FaStethoscope />,
      title: "Vet Checkups",
      desc:
        "Regular health checkups help prevent diseases and ensure a longer life for your pets.",
    },
    {
      icon: <FaPaw />,
      title: "Daily Exercise",
      desc:
        "Exercise and playtime improve both physical and mental health of your pets.",
    },
    {
      icon: <FaHeart />,
      title: "Love & Attention",
      desc:
        "Give your pets enough care, affection, and emotional connection every single day.",
    },
    {
      icon: <FaHome />,
      title: "Safe Environment",
      desc:
        "Maintain a clean and secure environment where your pets feel comfortable and protected.",
    },
    {
      icon: <FaSyringe />,
      title: "Vaccination Care",
      desc:
        "Timely vaccinations protect pets from harmful diseases and improve overall wellbeing.",
    },
  ];

  return (

    <section className="py-24 px-5 bg-gradient-to-b from-transparent to-gray-100 dark:to-[#111827] transition-colors duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto">




        {/* ===============================
            HEADER
        =============================== */}
        <div className="text-center mb-16">

          <div className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-400 text-sm font-semibold mb-5">

            PET CARE GUIDE

          </div>





          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

            Smart Pet Care
            <span className="text-orange-500 dark:text-orange-400">
              {" "}Tips
            </span>

          </h2>





          <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">

            Simple but powerful tips to keep your pets healthy,
            active, emotionally connected, and full of happiness.

          </p>

        </div>









        {/* ===============================
            TIPS GRID
        =============================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            tips.map((tip, index) => (

              <div
                key={index}
                className="group relative overflow-hidden bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
              >




                {/* glow effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>






                {/* icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-orange-500/20 group-hover:scale-110 transition duration-500">

                  {tip.icon}

                </div>






                {/* content */}
                <div className="relative z-10 mt-7">

                  <h3 className="text-2xl font-bold mb-4">

                    {tip.title}

                  </h3>





                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">

                    {tip.desc}

                  </p>

                </div>






                {/* bottom line */}
                <div className="relative z-10 mt-8 w-14 h-1 rounded-full bg-orange-500 group-hover:w-24 transition-all duration-500"></div>

              </div>

            ))
          }

        </div>









        {/* ===============================
            CTA SECTION
        =============================== */}
        <div className="mt-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-[2rem] p-10 md:p-14 text-center text-white shadow-2xl shadow-orange-500/20">

          <div className="text-6xl mb-5">
            🐾
          </div>





          <h3 className="text-3xl md:text-4xl font-extrabold">

            Healthy Pets,
            Happy Families

          </h3>





          <p className="mt-5 text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">

            Caring pets properly creates stronger emotional bonds
            and gives them a healthier, happier, and longer life.

          </p>






          <Link href="/pets">

            <button className="mt-8 bg-white text-orange-600 hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg">

              Explore Pets

            </button>

          </Link>

        </div>

      </div>

    </section>

  );

}
..