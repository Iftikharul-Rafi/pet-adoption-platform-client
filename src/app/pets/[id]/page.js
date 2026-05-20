"use client";

import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import toast from "react-hot-toast";

import {
  FaPaw,
  FaMapMarkerAlt,
  FaVenusMars,
  FaHeartbeat,
  FaShieldAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

import api from "@/services/api";

import useAuth from "@/hooks/useAuth";

export default function PetDetailsPage() {

  const params = useParams();

  const router = useRouter();

  const id = params.id;

  const { user, loading: authLoading } = useAuth();





  // ===============================
  // STATES
  // ===============================
  const [pet, setPet] = useState(null);

  const [loading, setLoading] = useState(true);

  const [pickupDate, setPickupDate] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);







  // ===============================
  // PRIVATE ROUTE CHECK
  // ===============================
  useEffect(() => {

    if (!authLoading && !user) {

      router.push("/login");

    }

  }, [user, authLoading, router]);








  // ===============================
  // FETCH SINGLE PET
  // ===============================
  useEffect(() => {

    const fetchPet = async () => {

      try {

        const res = await api.get(
          `/pets/${id}`
        );

        setPet(res.data.pet);

      } catch (error) {

        toast.error(
          "Failed to load pet details"
        );

      } finally {

        setLoading(false);

      }

    };

    if (id) {

      fetchPet();

    }

  }, [id]);








  // ===============================
  // HANDLE ADOPTION
  // ===============================
  const handleAdoption = async (e) => {

    e.preventDefault();





    // validation
    if (!pickupDate || !message) {

      return toast.error(
        "Please fill all fields"
      );

    }






    try {

      setSubmitting(true);





      // adoption data
      const adoptionData = {

        petId: pet._id,

        petName: pet.petName,

        petImage: pet.image,

        ownerEmail: pet.ownerEmail,

        userName: user?.name,

        userEmail: user?.email,

        pickupDate,

        message,

        status: "pending",

      };







      // send request
      const res = await api.post(
        "/adoptions",
        adoptionData
      );







      toast.success(
        res.data.message ||
        "Adoption request submitted"
      );







      // reset form
      setPickupDate("");

      setMessage("");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Adoption failed"
      );

    } finally {

      setSubmitting(false);

    }

  };








  // ===============================
  // LOADING
  // ===============================
  if (loading || authLoading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a]">

        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

      </div>

    );

  }








  // ===============================
  // PET NOT FOUND
  // ===============================
  if (!pet) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <h1 className="text-4xl font-bold">

          Pet Not Found

        </h1>

      </div>

    );

  }








  return (

    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white px-5 py-16 transition-colors duration-300">

      <div className="max-w-7xl mx-auto">




        {/* ===============================
            TOP HEADER
        =============================== */}
        <div className="mb-12 text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold mb-5">

            <FaPaw />

            PET DETAILS

          </div>





          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

            Meet
            <span className="text-orange-500">
              {" "}
              {pet.petName}
            </span>

          </h1>





          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">

            Give this lovely pet a caring forever home and create beautiful memories together.

          </p>

        </div>









        {/* ===============================
            MAIN GRID
        =============================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">




          {/* ===============================
              LEFT CONTENT
          =============================== */}
          <div className="lg:col-span-2 bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-xl">




            {/* IMAGE */}
            <div className="overflow-hidden">

              <img
                src={pet.image}
                alt={pet.petName}
                className="w-full h-[500px] object-cover hover:scale-105 transition-all duration-700"
              />

            </div>







            {/* CONTENT */}
            <div className="p-8 md:p-10">




              {/* TOP */}
              <div className="flex flex-wrap items-center justify-between gap-4">

                <div>

                  <h2 className="text-4xl font-extrabold">

                    {pet.petName}

                  </h2>





                  <div className="flex items-center gap-2 mt-3 text-gray-500 dark:text-gray-400">

                    <FaMapMarkerAlt className="text-orange-500" />

                    {pet.location}

                  </div>

                </div>






                <span className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold">

                  {pet.species}

                </span>

              </div>








              {/* DESCRIPTION */}
              <div className="mt-8">

                <h3 className="text-2xl font-bold mb-4">

                  About {pet.petName}

                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">

                  {pet.description}

                </p>

              </div>








              {/* INFO GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">




                {/* Breed */}
                <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-black/5 dark:border-white/10">

                  <div className="flex items-center gap-3">

                    <FaPaw className="text-orange-500 text-xl" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Breed
                      </p>

                      <h4 className="text-xl font-bold mt-1">
                        {pet.breed}
                      </h4>

                    </div>

                  </div>

                </div>







                {/* Age */}
                <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-black/5 dark:border-white/10">

                  <div className="flex items-center gap-3">

                    <FaCalendarAlt className="text-orange-500 text-xl" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Age
                      </p>

                      <h4 className="text-xl font-bold mt-1">
                        {pet.age} Years
                      </h4>

                    </div>

                  </div>

                </div>







                {/* Gender */}
                <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-black/5 dark:border-white/10">

                  <div className="flex items-center gap-3">

                    <FaVenusMars className="text-orange-500 text-xl" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Gender
                      </p>

                      <h4 className="text-xl font-bold mt-1">
                        {pet.gender}
                      </h4>

                    </div>

                  </div>

                </div>







                {/* Health */}
                <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-black/5 dark:border-white/10">

                  <div className="flex items-center gap-3">

                    <FaHeartbeat className="text-orange-500 text-xl" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Health Status
                      </p>

                      <h4 className="text-xl font-bold mt-1">
                        {pet.healthStatus}
                      </h4>

                    </div>

                  </div>

                </div>







                {/* Vaccination */}
                <div className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-black/5 dark:border-white/10 md:col-span-2">

                  <div className="flex items-center gap-3">

                    <FaShieldAlt className="text-orange-500 text-xl" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Vaccination Status
                      </p>

                      <h4 className="text-xl font-bold mt-1">
                        {pet.vaccinationStatus}
                      </h4>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>










          {/* ===============================
              RIGHT SIDEBAR FORM
          =============================== */}
          <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] p-8 h-fit sticky top-24 shadow-xl">




            {/* PRICE */}
            <div className="text-center border-b border-black/10 dark:border-white/10 pb-8">

              <p className="text-gray-500 dark:text-gray-400">

                Adoption Fee

              </p>





              <h2 className="text-5xl font-extrabold text-orange-500 mt-3">

                ${pet.adoptionFee}

              </h2>





              {
                pet.adopted && (

                  <div className="mt-5 inline-block px-5 py-2 rounded-full bg-red-500/10 text-red-500 font-semibold">

                    Already Adopted

                  </div>

                )
              }

            </div>









            {/* FORM */}
            <form
              onSubmit={handleAdoption}
              className="mt-8 space-y-5"
            >




              <h3 className="text-2xl font-bold mb-5">

                Adoption Form

              </h3>








              {/* PET NAME */}
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">

                  Pet Name

                </label>

                <input
                  type="text"
                  value={pet.petName}
                  readOnly
                  className="w-full bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none"
                />

              </div>








              {/* USER NAME */}
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">

                  Your Name

                </label>

                <div className="relative">

                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    value={user?.name || ""}
                    readOnly
                    className="w-full pl-12 bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none"
                  />

                </div>

              </div>








              {/* USER EMAIL */}
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">

                  Your Email

                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="w-full pl-12 bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none"
                  />

                </div>

              </div>








              {/* PICKUP DATE */}
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">

                  Pickup Date

                </label>

                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) =>
                    setPickupDate(e.target.value)
                  }
                  required
                  className="w-full bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none"
                />

              </div>








              {/* MESSAGE */}
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">

                  Message

                </label>

                <textarea
                  rows="5"
                  placeholder="Why do you want to adopt this pet?"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  required
                  className="w-full bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none resize-none"
                ></textarea>

              </div>








              {/* BUTTON */}
              <button
                type="submit"
                disabled={
                  submitting || pet.adopted
                }
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 py-4 rounded-2xl text-lg font-bold text-white shadow-lg"
              >

                {
                  submitting
                    ? "Submitting..."
                    : pet.adopted
                    ? "Already Adopted"
                    : "Adopt Now"
                }

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );

}