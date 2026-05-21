"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import {
  FaPaw,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

import useAuth from "@/hooks/useAuth";

import api from "@/services/api";

export default function LoginPage() {

  const router = useRouter();

  const { fetchUser } = useAuth();





  // ===============================
  // STATES
  // ===============================
  const [loading, setLoading] =
    useState(false);

  const [googleLoading, setGoogleLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });









  // ===============================
  // INPUT CHANGE
  // ===============================
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };









  // ===============================
  // LOGIN SUBMIT
  // ===============================
  const handleSubmit = async (e) => {

    e.preventDefault();





    try {

      setLoading(true);





      // backend login api
      const res = await api.post(
        "/auth/login",
        formData
      );





      // success toast
      toast.success(
        res.data.message ||
        "Login successful"
      );





      // fetch logged in user
      await fetchUser();





      // redirect home
      router.push("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }

  };












  // ===============================
  // GOOGLE LOGIN
  // ===============================
  const handleGoogleLogin = async () => {

    try {

      setGoogleLoading(true);





      // example google login
      toast.success(
        "Google login coming soon"
      );





      // future redirect
      // router.push("/");

    } catch (error) {

      toast.error(
        "Google login failed"
      );

    } finally {

      setGoogleLoading(false);

    }

  };












  return (

    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white flex items-center justify-center px-5 py-20 transition-colors duration-300 overflow-hidden">




      {/* background blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>










      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 shadow-2xl bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl">




        {/* ===============================
            LEFT SIDE
        =============================== */}
        <div className="hidden lg:flex flex-col justify-center p-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">




          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-[120px] rounded-full"></div>







          <div className="relative z-10">

            <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center text-4xl mb-8 backdrop-blur-md">

              <FaPaw />

            </div>








            <h2 className="text-5xl font-extrabold leading-tight">

              Welcome
              <br />
              Back 🐾

            </h2>








            <p className="mt-6 text-lg text-white/90 leading-relaxed">

              Login to continue your journey of helping
              pets find loving forever homes and manage
              your adoption activities easily.

            </p>








            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Secure Authentication
                </p>

              </div>








              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Trusted Pet Adoption Community
                </p>

              </div>








              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Fast & Easy Adoption Experience
                </p>

              </div>

            </div>

          </div>

        </div>












        {/* ===============================
            RIGHT SIDE
        =============================== */}
        <div className="p-8 md:p-12">




          {/* heading */}
          <div className="text-center mb-10">

            <h1 className="text-4xl font-extrabold">

              Login Account

            </h1>








            <p className="text-gray-500 dark:text-gray-400 mt-3">

              Continue exploring adorable pets

            </p>

          </div>












          {/* ===============================
              FORM
          =============================== */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >




            {/* email */}
            <div>

              <label className="block mb-2 font-medium">

                Email Address

              </label>








              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-orange-500 transition"
              />

            </div>












            {/* password */}
            <div>

              <label className="block mb-2 font-medium">

                Password

              </label>








              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-orange-500 transition"
                />








                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >

                  {
                    showPassword
                      ? <FaEyeSlash />
                      : <FaEye />
                  }

                </button>

              </div>

            </div>












            {/* login button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 py-4 rounded-2xl font-bold text-lg text-white shadow-lg shadow-orange-500/20 disabled:opacity-70"
            >

              {
                loading
                  ? "Logging in..."
                  : "Login"
              }

            </button>

          </form>












          {/* divider */}
          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-black/10 dark:bg-white/10"></div>

            <p className="text-gray-500 dark:text-gray-400 text-sm">

              OR CONTINUE WITH

            </p>

            <div className="flex-1 h-[1px] bg-black/10 dark:bg-white/10"></div>

          </div>












          {/* google login */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-[#1e293b] hover:bg-gray-200 dark:hover:bg-[#334155] transition-all duration-300 py-4 rounded-2xl font-semibold"
          >

            <FaGoogle className="text-red-500 text-xl" />

            {
              googleLoading
                ? "Please wait..."
                : "Continue with Google"
            }

          </button>












          {/* register link */}
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">

            Don’t have an account?

            <Link
              href="/register"
              className="text-orange-500 dark:text-orange-400 font-semibold ml-2 hover:underline"
            >

              Register

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}
..