"use client";

import Link from "next/link";

import {
  FaPaw,
  FaClipboardList,
  FaHeart,
  FaInbox,
  FaPlusCircle,
  FaArrowRight,
  FaUserCircle,
} from "react-icons/fa";

import PrivateRoute from "@/components/providers/PrivateRoute";
import useAuth from "@/hooks/useAuth";

export default function DashboardPage() {

  const { user } = useAuth();

  const dashboardCards = [
    {
      title: "Add Pet",
      desc: "Create a new pet adoption listing",
      icon: <FaPlusCircle className="text-3xl" />,
      href: "/dashboard/add-pet",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "My Listings",
      desc: "Manage all your listed pets",
      icon: <FaClipboardList className="text-3xl" />,
      href: "/dashboard/my-listings",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "My Requests",
      desc: "Track your adoption requests",
      icon: <FaHeart className="text-3xl" />,
      href: "/dashboard/my-requests",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Requests",
      desc: "Manage received adoption requests",
      icon: <FaInbox className="text-3xl" />,
      href: "/dashboard/received-requests",
      color: "from-violet-500 to-violet-600",
    },
  ];

  return (

    <PrivateRoute>

      <div className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-5 py-12">

          {/* ===============================
              HEADER
          =============================== */}
          <div className="flex flex-col lg:flex-row gap-8">

            {/* LEFT PROFILE */}
            <div className="lg:w-[350px]">

              <div className="sticky top-24 bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] p-8 shadow-xl">

                {/* PROFILE */}
                <div className="flex flex-col items-center text-center">

                  {
                    user?.photoURL ? (

                      <img
                        src={user.photoURL}
                        alt="user"
                        className="w-28 h-28 rounded-full object-cover border-4 border-orange-500 shadow-lg"
                      />

                    ) : (

                      <FaUserCircle className="text-[110px] text-orange-500" />

                    )
                  }

                  <h2 className="text-3xl font-extrabold mt-5">

                    {user?.name || "User"}

                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 mt-2 break-all">

                    {user?.email}

                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold">

                    <FaPaw />

                    Pet Adoption Member

                  </div>

                </div>

                {/* QUICK STATS */}
                <div className="grid grid-cols-2 gap-4 mt-10">

                  <div className="bg-white dark:bg-[#0f172a] border border-black/5 dark:border-white/10 rounded-2xl p-5 text-center">

                    <h3 className="text-3xl font-extrabold text-orange-500">

                      4

                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">

                      Total Sections

                    </p>

                  </div>

                  <div className="bg-white dark:bg-[#0f172a] border border-black/5 dark:border-white/10 rounded-2xl p-5 text-center">

                    <h3 className="text-3xl font-extrabold text-cyan-500">

                      Active

                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">

                      Dashboard

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1">

              {/* TOP TITLE */}
              <div className="mb-10">

                <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold mb-5">

                  <FaPaw />

                  DASHBOARD

                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

                  Welcome Back,
                  <span className="text-orange-500">
                    {" "}
                    {user?.name?.split(" ")[0] || "User"}
                  </span>

                </h1>

                <p className="text-gray-500 dark:text-gray-400 mt-5 text-lg leading-8 max-w-3xl">

                  Manage your pets, monitor adoption requests, and keep track of your pet adoption activities from one beautiful dashboard.

                </p>

              </div>

              {/* DASHBOARD CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {
                  dashboardCards.map((card, index) => (

                    <Link
                      key={index}
                      href={card.href}
                    >

                      <div className="group bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden relative">

                        {/* GRADIENT */}
                        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${card.color} opacity-10 rounded-full blur-3xl`} />

                        {/* ICON */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center text-white shadow-lg`}>

                          {card.icon}

                        </div>

                        {/* CONTENT */}
                        <div className="mt-8 relative z-10">

                          <h2 className="text-3xl font-extrabold">

                            {card.title}

                          </h2>

                          <p className="text-gray-500 dark:text-gray-400 mt-4 leading-7">

                            {card.desc}

                          </p>

                          <div className="mt-8 flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-4 transition-all">

                            Explore

                            <FaArrowRight />

                          </div>

                        </div>

                      </div>

                    </Link>

                  ))
                }

              </div>

              {/* INFO SECTION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

                <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] p-6">

                  <h3 className="text-2xl font-bold">

                    Manage Listings

                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 mt-4 leading-7">

                    Add, edit, and manage all your pet adoption listings easily.

                  </p>

                </div>

                <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] p-6">

                  <h3 className="text-2xl font-bold">

                    Track Requests

                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 mt-4 leading-7">

                    Monitor adoption requests and communicate with adopters smoothly.

                  </p>

                </div>

                <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] p-6">

                  <h3 className="text-2xl font-bold">

                    Safe Adoption

                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 mt-4 leading-7">

                    Ensure pets get loving homes through a trusted adoption process.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </PrivateRoute>

  );

}

