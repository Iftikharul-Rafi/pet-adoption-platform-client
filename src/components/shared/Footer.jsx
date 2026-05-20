"use client";

import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaPaw,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="bg-white dark:bg-[#0f172a] border-t border-black/10 dark:border-white/10 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">




          {/* LOGO */}
          <div>

            <div className="flex items-center gap-3">

              <div className="bg-orange-500 p-3 rounded-2xl">

                <FaPaw className="text-white text-xl" />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  PetAdopt
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Find your companion
                </p>

              </div>

            </div>





            <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">

              PetAdopt helps families connect
              with pets that need a loving home.

            </p>

          </div>









          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">

              <Link href="/">
                Home
              </Link>

              <Link href="/pets">
                All Pets
              </Link>

              <Link href="/dashboard/add-pet">
                Add Pet
              </Link>

              <Link href="/dashboard/my-listings">
                My Listings
              </Link>

            </div>

          </div>









          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400">

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-orange-500" />

                <p>
                  support@petadopt.com
                </p>

              </div>





              <div className="flex items-center gap-3">

                <FaPhoneAlt className="text-orange-500" />

                <p>
                  +880 1234-567890
                </p>

              </div>





              <div className="flex items-center gap-3">

                <FaMapMarkerAlt className="text-orange-500" />

                <p>
                  Dhaka, Bangladesh
                </p>

              </div>

            </div>

          </div>









          {/* SOCIAL */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-200 dark:bg-[#1e293b] hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-200 dark:bg-[#1e293b] hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-200 dark:bg-[#1e293b] hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-200 dark:bg-[#1e293b] hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>









        {/* COPYRIGHT */}
        <div className="border-t border-black/10 dark:border-white/10 mt-12 pt-6 text-center text-gray-500 dark:text-gray-400">

          <p>

            © 2026 PetAdopt. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>

  );

}