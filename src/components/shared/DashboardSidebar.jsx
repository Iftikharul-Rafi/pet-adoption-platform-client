"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  FaPlus,
  FaList,
  FaHeart,
  FaInbox,
} from "react-icons/fa";

export default function DashboardSidebar() {

  const pathname = usePathname();

  const navItems = [

    {
      name: "Add Pet",
      path: "/dashboard/add-pet",
      icon: <FaPlus />,
    },

    {
      name: "My Listings",
      path: "/dashboard/my-listings",
      icon: <FaList />,
    },

    {
      name: "My Requests",
      path: "/dashboard/my-requests",
      icon: <FaHeart />,
    },

    {
      name: "Requests",
      path: "/dashboard/requests",
      icon: <FaInbox />,
    },

  ];

  return (

    <div className="w-[300px] min-h-screen bg-[#1e293b] border-r border-white/10 p-6 hidden md:block">

      {/* LOGO */}
      <div className="mb-10">

        <h1 className="text-3xl font-extrabold text-white">

          Dashboard

        </h1>

        <p className="text-gray-400 mt-2">

          Pet Adoption Platform

        </p>

      </div>

      {/* NAV */}
      <div className="space-y-3">

        {
          navItems.map((item) => (

            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300
              
              ${
                pathname === item.path
                  ? "bg-orange-500 text-white"
                  : "bg-[#0f172a] text-gray-300 hover:bg-orange-500 hover:text-white"
              }
              
              `}
            >

              <span className="text-lg">

                {item.icon}

              </span>

              <span className="font-semibold">

                {item.name}

              </span>

            </Link>

          ))
        }

      </div>

    </div>

  );

}

..