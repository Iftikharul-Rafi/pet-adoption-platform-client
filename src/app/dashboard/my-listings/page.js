"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import toast from "react-hot-toast";

import {
  FaPaw,
  FaCheckCircle,
  FaClock,
  FaEdit,
  FaTrash,
  FaEye,
  FaListUl,
  FaDollarSign,
} from "react-icons/fa";

import api from "@/services/api";

import PrivateRoute from "@/components/providers/PrivateRoute";

export default function MyListingsPage() {

  // ===============================
  // STATES
  // ===============================
  const [pets, setPets] = useState([]);

  const [loading, setLoading] =
    useState(true);





  // ===============================
  // FETCH MY LISTINGS
  // ===============================
  useEffect(() => {

    const fetchMyPets = async () => {

      try {

        const res = await api.get(
          "/pets/my/listings"
        );

        setPets(res.data.pets);

      } catch (error) {

        toast.error(
          "Failed to load listings"
        );

      } finally {

        setLoading(false);

      }

    };

    fetchMyPets();

  }, []);







  // ===============================
  // DELETE PET
  // ===============================
  const handleDelete = async (
    id
  ) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this pet?"
      );

    if (!confirmDelete) return;

    try {

      const res = await api.delete(
        `/pets/${id}`
      );

      toast.success(
        res.data.message
      );

      setPets(
        pets.filter(
          (pet) => pet._id !== id
        )
      );

    } catch (error) {

      toast.error(
        error.response?.data
          ?.message ||
          "Delete failed"
      );

    }

  };







  // ===============================
  // STATS
  // ===============================
  const totalListings =
    pets.length;

  const adoptedPets =
    pets.filter(
      (pet) => pet.adopted
    ).length;

  const availablePets =
    pets.filter(
      (pet) => !pet.adopted
    ).length;







  // ===============================
  // LOADING
  // ===============================
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a]">

        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

      </div>

    );

  }







  return (

    <PrivateRoute>

      <div className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white px-5 py-16 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">




          {/* ===============================
              HEADER
          =============================== */}
          <div className="mb-12">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold mb-5">

              <FaPaw />

              MY PET LISTINGS

            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold">

              Manage Your
              <span className="text-orange-500">
                {" "}Pet Listings
              </span>

            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">

              View, edit, and manage all pets you have added for adoption.

            </p>

          </div>











          {/* ===============================
              STATS CARDS
          =============================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">




            {/* TOTAL */}
            <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-3xl p-6 shadow-lg">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500 dark:text-gray-400">

                    Total Listings

                  </p>

                  <h2 className="text-4xl font-extrabold mt-3">

                    {totalListings}

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                  <FaListUl className="text-orange-500 text-3xl" />

                </div>

              </div>

            </div>







            {/* AVAILABLE */}
            <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-3xl p-6 shadow-lg">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500 dark:text-gray-400">

                    Available Pets

                  </p>

                  <h2 className="text-4xl font-extrabold mt-3 text-green-500">

                    {availablePets}

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">

                  <FaClock className="text-green-500 text-3xl" />

                </div>

              </div>

            </div>







            {/* ADOPTED */}
            <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-3xl p-6 shadow-lg">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500 dark:text-gray-400">

                    Adopted Pets

                  </p>

                  <h2 className="text-4xl font-extrabold mt-3 text-cyan-500">

                    {adoptedPets}

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                  <FaCheckCircle className="text-cyan-500 text-3xl" />

                </div>

              </div>

            </div>

          </div>











          {/* ===============================
              EMPTY STATE
          =============================== */}
          {
            pets.length === 0 ? (

              <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] p-16 text-center shadow-lg">

                <h2 className="text-4xl font-bold">

                  No Listings Found

                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-5 text-lg">

                  You have not added any pets yet.

                </p>

              </div>

            ) : (







              /* ===============================
                  PET GRID
              =============================== */
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                {
                  pets.map((pet) => (

                    <div
                      key={pet._id}
                      className="group bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                    >




                      {/* IMAGE */}
                      <div className="relative overflow-hidden">

                        <img
                          src={pet.image}
                          alt={pet.petName}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
                        />






                        {/* STATUS */}
                        <div className="absolute top-5 right-5">

                          {
                            pet.adopted ? (

                              <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">

                                Adopted

                              </span>

                            ) : (

                              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">

                                Available

                              </span>

                            )
                          }

                        </div>

                      </div>











                      {/* CONTENT */}
                      <div className="p-6">




                        {/* TOP */}
                        <div className="flex items-center justify-between gap-4">

                          <div>

                            <h2 className="text-3xl font-extrabold">

                              {pet.petName}

                            </h2>

                            <p className="text-gray-500 dark:text-gray-400 mt-1">

                              {pet.species}

                            </p>

                          </div>

                          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                            <FaPaw className="text-orange-500 text-2xl" />

                          </div>

                        </div>









                        {/* PRICE */}
                        <div className="mt-6 flex items-center gap-3">

                          <FaDollarSign className="text-orange-500 text-xl" />

                          <div>

                            <p className="text-gray-500 dark:text-gray-400 text-sm">

                              Adoption Fee

                            </p>

                            <h3 className="text-3xl font-bold text-orange-500">

                              ${pet.adoptionFee}

                            </h3>

                          </div>

                        </div>









                        {/* ACTION BUTTONS */}
                        <div className="grid grid-cols-2 gap-4 mt-8">




                          {/* REQUESTS */}
                          <button
                            className="bg-purple-500 hover:bg-purple-600 transition-all py-3 rounded-2xl font-bold text-white"
                          >

                            Requests

                          </button>







                          {/* EDIT */}
                          <Link
                            href={`/dashboard/update-pet/${pet._id}`}
                          >

                            <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all py-3 rounded-2xl font-bold text-white">

                              <FaEdit />

                              Edit

                            </button>

                          </Link>







                          {/* VIEW */}
                          <Link
                            href={`/pets/${pet._id}`}
                          >

                            <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition-all py-3 rounded-2xl font-bold text-white">

                              <FaEye />

                              View

                            </button>

                          </Link>







                          {/* DELETE */}
                          <button
                            onClick={() =>
                              handleDelete(
                                pet._id
                              )
                            }
                            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition-all py-3 rounded-2xl font-bold text-white"
                          >

                            <FaTrash />

                            Delete

                          </button>

                        </div>

                      </div>

                    </div>

                  ))
                }

              </div>

            )
          }

        </div>

      </div>

    </PrivateRoute>

  );

}