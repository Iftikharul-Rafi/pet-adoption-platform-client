"use client";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import WhyAdoptSection from "@/components/home/WhyAdoptSection";
import SuccessStories from "@/components/home/SuccessStories";
import PetCareTips from "@/components/home/PetCareTips";
import OurMission from "@/components/home/OurMission";
import AdoptionProcess from "@/components/home/AdoptionProcess";

export default function Home() {

  const { user, loading } = useAuth();

  // ===============================
  // LOADING
  // ===============================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] transition-colors duration-300">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0f172a] dark:text-white overflow-hidden transition-colors duration-300">

      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-24">

        {/* background gradients */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        {/* main content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-300 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md">
              🐾 Trusted Pet Adoption Platform
            </div>

            {/* heading */}
            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
              Find Your
              <span className="text-orange-500 dark:text-orange-400">
                {" "}Forever Friend
              </span>
            </h1>

            {/* description */}
            <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Give rescued pets a second chance at life.
              Discover loving dogs, cats, birds, and more waiting
              for a caring family and a forever home.
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              {/* adopt button */}
              <Link href={user ? "/pets" : "/login"}>
                <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/20 text-white">
                  Adopt Now
                </button>
              </Link>

              {/* explore button */}
              <Link href={user ? "/pets" : "/login"}>
                <button className="border border-black/20 dark:border-white/30 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold">
                  Explore Pets
                </button>
              </Link>

            </div>

            {/* stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">

              {/* stat */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400">
                  500+
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Pets Adopted
                </p>
              </div>

              {/* stat */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 dark:text-cyan-400">
                  120+
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Shelters
                </p>
              </div>

              {/* stat */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-pink-500 dark:text-pink-400">
                  98%
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Happy Families
                </p>
              </div>

            </div>

            {/* logged in user */}
            {
              user && (
                <div className="mt-10 bg-gray-200 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 px-6 py-4 rounded-2xl transition-colors duration-300 max-w-md">
                  <p className="text-gray-600 dark:text-gray-300">
                    Welcome back,
                  </p>
                  <h2 className="text-xl font-bold text-orange-500 dark:text-orange-400 mt-1 break-all">
                    {user.email}
                  </h2>
                </div>
              )
            }

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center">

            {/* glow */}
            <div className="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full"></div>

            {/* main image */}
            <div className="relative bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[40px] p-5 backdrop-blur-xl shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="Pet"
                className="w-full max-w-lg h-[500px] object-cover rounded-[30px]"
              />

              {/* floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-3xl p-5 shadow-2xl backdrop-blur-md">

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Recently Adopted
                </p>

                <h3 className="text-xl font-bold mt-1">
                  Golden Retriever 🐕
                </h3>

                <p className="text-sm text-orange-500 dark:text-orange-400 mt-2">
                  Now living happily with a loving family.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          STATS SECTION
      ========================================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* stat card */}
          <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 p-8 rounded-3xl text-center transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-5xl font-bold text-orange-500 dark:text-orange-400">
              500+
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
              Pets Adopted
            </p>
          </div>

          {/* stat card */}
          <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 p-8 rounded-3xl text-center transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-5xl font-bold text-cyan-500 dark:text-cyan-400">
              120+
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
              Trusted Shelters
            </p>
          </div>

          {/* stat card */}
          <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 p-8 rounded-3xl text-center transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-5xl font-bold text-pink-500 dark:text-pink-400">
              98%
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
              Happy Families
            </p>
          </div>

        </div>

      </section>

      {/* EXTRA STATIC SECTIONS */}
      <WhyAdoptSection />
      <SuccessStories />
      <PetCareTips />
      <OurMission />
      <AdoptionProcess />

    </main>
  );

}