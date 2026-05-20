"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import {
  FaPaw,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import api from "@/services/api";

export default function RegisterPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      photoURL: "",
      password: "",
      confirmPassword: "",
    });







  // ===============================
  // HANDLE CHANGE
  // ===============================
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };









  // ===============================
  // HANDLE SUBMIT
  // ===============================
  const handleSubmit = async (e) => {

    e.preventDefault();

    const {
      name,
      email,
      photoURL,
      password,
      confirmPassword,
    } = formData;







    // password validation
    if (password.length < 6) {

      return toast.error(
        "Password must be at least 6 characters"
      );

    }







    if (!/[A-Z]/.test(password)) {

      return toast.error(
        "Password must contain one uppercase letter"
      );

    }







    if (!/[a-z]/.test(password)) {

      return toast.error(
        "Password must contain one lowercase letter"
      );

    }







    if (password !== confirmPassword) {

      return toast.error(
        "Passwords do not match"
      );

    }








    try {

      setLoading(true);

      const userData = {
        name,
        email,
        photoURL,
        password,
      };







      const res = await api.post(
        "/auth/register",
        userData
      );







      toast.success(
        res.data.message ||
        "Registration successful"
      );







      router.push("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

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

              Join The
              <br />
              PetAdopt Family 🐾

            </h2>








            <p className="mt-6 text-lg text-white/90 leading-relaxed">

              Create your account and start your journey
              to adopt loving pets and help animals
              find caring forever homes.

            </p>








            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Trusted Pet Adoption Platform
                </p>

              </div>








              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Safe & Secure Registration
                </p>

              </div>








              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-white"></div>

                <p>
                  Easy Adoption Experience
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

              Create Account

            </h1>








            <p className="text-gray-500 dark:text-gray-400 mt-3">

              Register to start your pet adoption journey

            </p>

          </div>












          {/* ===============================
              FORM
          =============================== */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >




            {/* name */}
            <div>

              <label className="block mb-2 font-medium">

                Full Name

              </label>








              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-orange-500 transition"
              />

            </div>









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










            {/* photo url */}
            <div>

              <label className="block mb-2 font-medium">

                Photo URL

              </label>








              <input
                type="text"
                name="photoURL"
                required
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="Enter your photo URL"
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
                  placeholder="Create password"
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








              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 space-y-1">

                <p>
                  • Minimum 6 characters
                </p>

                <p>
                  • At least one uppercase letter
                </p>

                <p>
                  • At least one lowercase letter
                </p>

              </div>

            </div>












            {/* confirm password */}
            <div>

              <label className="block mb-2 font-medium">

                Confirm Password

              </label>








              <div className="relative">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-orange-500 transition"
                />








                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >

                  {
                    showConfirmPassword
                      ? <FaEyeSlash />
                      : <FaEye />
                  }

                </button>

              </div>

            </div>












            {/* submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 py-4 rounded-2xl font-bold text-lg text-white shadow-lg shadow-orange-500/20 disabled:opacity-70"
            >

              {
                loading
                  ? "Creating Account..."
                  : "Create Account"
              }

            </button>

          </form>












          {/* login link */}
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">

            Already have an account?

            <Link
              href="/login"
              className="text-orange-500 dark:text-orange-400 font-semibold ml-2 hover:underline"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}