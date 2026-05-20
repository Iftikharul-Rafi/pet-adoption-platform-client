"use client";

import Link from "next/link";
import { FaPaw, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] text-black dark:text-white px-5 transition-colors duration-300">

      <div className="max-w-2xl w-full text-center">

        {/* icon */}
        <div className="w-28 h-28 mx-auto rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-8">

          <FaPaw className="text-5xl text-orange-500" />

        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-orange-500">

          404

        </h1>

        {/* title */}
        <h2 className="text-3xl md:text-5xl font-bold mt-6">

          Page Not Found

        </h2>

        {/* desc */}
        <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg leading-8 max-w-xl mx-auto">

          Oops! The page you are looking for does not exist or may have been removed.

        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          <Link href="/">

            <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-white flex items-center gap-3 shadow-lg">

              <FaArrowLeft />

              Back To Home

            </button>

          </Link>

          <Link href="/pets">

            <button className="border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">

              Browse Pets

            </button>

          </Link>

        </div>

      </div>

    </div>

  );

}