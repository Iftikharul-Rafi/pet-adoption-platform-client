import {
  FaSearch,
  FaInfoCircle,
  FaPaperPlane,
  FaClipboardCheck,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

export default function AdoptionProcess() {

  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse Pets",
      desc:
        "Explore hundreds of adorable pets waiting for a loving and caring family.",
    },
    {
      icon: <FaInfoCircle />,
      title: "View Details",
      desc:
        "Check pet information, health status, age, breed, and adoption requirements.",
    },
    {
      icon: <FaPaperPlane />,
      title: "Send Request",
      desc:
        "Submit an adoption request directly to the pet owner through our platform.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Request Review",
      desc:
        "The owner reviews your application and contacts you for the next steps.",
    },
    {
      icon: <FaHome />,
      title: "Bring Home",
      desc:
        "Complete the adoption process and welcome your new furry friend home.",
    },
  ];

  return (

    <section className="py-24 px-5 bg-gradient-to-b from-transparent to-gray-100 dark:to-[#111827] transition-colors duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto">




        {/* ===============================
            HEADER
        =============================== */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-400 text-sm font-semibold mb-6">

            SIMPLE ADOPTION JOURNEY

          </div>





          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">

            Adoption
            <span className="text-orange-500 dark:text-orange-400">
              {" "}Process
            </span>

          </h2>





          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">

            Adopting your perfect companion is easy.
            Follow these simple steps and start your journey today.

          </p>

        </div>









        {/* ===============================
            PROCESS STEPS
        =============================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {
            steps.map((step, index) => (

              <div
                key={index}
                className="group relative bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-3xl p-8 text-center overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
              >




                {/* glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>





                {/* step number */}
                <div className="absolute top-5 right-5 text-5xl font-extrabold text-gray-200 dark:text-white/5">

                  0{index + 1}

                </div>






                {/* icon */}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-orange-500/20">

                  {step.icon}

                </div>






                {/* content */}
                <div className="relative z-10 mt-7">

                  <h3 className="text-2xl font-bold mb-4">

                    {step.title}

                  </h3>





                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">

                    {step.desc}

                  </p>

                </div>






                {/* arrow */}
                {
                  index !== steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 text-orange-400 text-2xl z-20">

                      <FaArrowRight />

                    </div>
                  )
                }






                {/* bottom line */}
                <div className="relative z-10 mt-8 w-14 h-1 rounded-full bg-orange-500 mx-auto group-hover:w-24 transition-all duration-500"></div>

              </div>

            ))
          }

        </div>









        {/* ===============================
            BOTTOM CTA
        =============================== */}
        <div className="mt-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-[2rem] p-10 md:p-14 text-center text-white shadow-2xl shadow-orange-500/20">

          <h3 className="text-3xl md:text-4xl font-extrabold">

            Ready To Meet Your New Best Friend? 🐾

          </h3>





          <p className="mt-5 text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">

            Start exploring pets today and experience the joy of giving
            a loving animal a forever home.

          </p>






          <button className="mt-8 bg-white text-orange-600 hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg">

            Start Adoption

          </button>

        </div>

      </div>

    </section>

  );

}