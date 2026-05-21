
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

import {
  FaPaw,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";

import useAuth from "@/hooks/useAuth";
import api from "@/services/api";

export default function Navbar() {

  const router = useRouter();
  const pathname = usePathname();

  const { user, setUser } = useAuth();

  const { theme, setTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ===============================
  // FIX HYDRATION
  // ===============================
  useEffect(() => {
    setMounted(true);
  }, []);

  // ===============================
  // ACTIVE LINK
  // ===============================
  const activeLink = (path) => {
    return pathname === path
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-500 transition";
  };

  // ===============================
  // CLOSE MENU
  // ===============================
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ===============================
  // LOGOUT
  // ===============================
  const handleLogout = async () => {

    try {

      await api.post("/auth/logout");

      setUser(null);

      toast.success("Logout successful");

      router.push("/login");

      setMenuOpen(false);

    } catch (error) {

      toast.error("Logout failed");

    }

  };

  return (

    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-[#0f172a]/80 border-b border-black/10 dark:border-white/10">

      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <div className="bg-orange-500 p-3 rounded-2xl">

            <FaPaw className="text-white text-xl" />

          </div>

          <div>

            <h2 className="text-2xl font-bold">

              PetAdopt

            </h2>

            <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">

              Find your companion

            </p>

          </div>

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">

          <Link
            href="/"
            className={activeLink("/")}
          >
            Home
          </Link>

          <Link
            href="/pets"
            className={activeLink("/pets")}
          >
            All Pets
          </Link>

          {
            user && (

              <Link
                href="/dashboard"
                className={activeLink("/dashboard")}
              >
                Dashboard
              </Link>

            )
          }

        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* THEME BUTTON */}
          <button
            onClick={() =>
              setTheme(
                theme === "dark"
                  ? "light"
                  : "dark"
              )
            }
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-[#1e293b] dark:hover:bg-[#334155] transition"
          >

            {
              mounted && (
                theme === "dark"
                  ? <FaSun />
                  : <FaMoon />
              )
            }

          </button>

          {
            user ? (

              <>

                {/* USER */}
                <div className="hidden md:flex items-center gap-3 bg-gray-100 dark:bg-[#1e293b] px-4 py-2 rounded-full border border-black/10 dark:border-white/10">

                  {
                    user?.photoURL ? (

                      <img
                        src={user.photoURL}
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                    ) : (

                      <FaUserCircle className="text-4xl text-orange-500" />

                    )
                  }

                  <div>

                    <p className="text-xs text-gray-500 dark:text-gray-400">

                      Logged In

                    </p>

                    <h3 className="text-sm font-semibold max-w-[140px] truncate">

                      {user.email}

                    </h3>

                  </div>

                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="hidden sm:block bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full text-white font-semibold transition"
                >

                  Logout

                </button>

              </>

            ) : (

              <div className="hidden sm:flex items-center gap-3">

                <Link href="/login">

                  <button className="border border-black/20 dark:border-white/20 px-5 py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">

                    Login

                  </button>

                </Link>

                <Link href="/register">

                  <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-white font-semibold transition">

                    Register

                  </button>

                </Link>

              </div>

            )
          }

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="lg:hidden text-2xl"
          >

            {
              menuOpen
                ? <FaTimes />
                : <FaBars />
            }

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {
        menuOpen && (

          <div className="lg:hidden border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#0f172a]">

            <div className="px-6 py-6 flex flex-col gap-5">

              <Link
                href="/"
                onClick={closeMenu}
                className={activeLink("/")}
              >
                Home
              </Link>

              <Link
                href="/pets"
                onClick={closeMenu}
                className={activeLink("/pets")}
              >
                All Pets
              </Link>

              {
                user && (

                  <Link
                    href="/dashboard"
                    onClick={closeMenu}
                    className={activeLink("/dashboard")}
                  >
                    Dashboard
                  </Link>

                )
              }

              {
                !user && (

                  <div className="flex flex-col gap-3 pt-3">

                    <Link
                      href="/login"
                      onClick={closeMenu}
                    >

                      <button className="w-full border border-black/20 dark:border-white/20 py-3 rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">

                        Login

                      </button>

                    </Link>

                    <Link
                      href="/register"
                      onClick={closeMenu}
                    >

                      <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-2xl text-white font-semibold transition">

                        Register

                      </button>

                    </Link>

                  </div>

                )
              }

              {
                user && (

                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 py-3 rounded-2xl text-white font-semibold transition"
                  >

                    Logout

                  </button>

                )
              }

            </div>

          </div>

        )
      }

    </header>

  );

}
