"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import api from "@/services/api";

import useAuth from "@/hooks/useAuth";

export default function AllPetsPage() {

  const router = useRouter();

  const {
    user,
    loading: authLoading,
  } = useAuth();



  // ===============================
  // REDIRECT IF NOT LOGGED IN
  // ===============================
  useEffect(() => {

    if (!authLoading && !user) {

      router.push("/login");

    }

  }, [user, authLoading, router]);





  // ===============================
  // STATES
  // ===============================
  const [pets, setPets] =
    useState([]);

  const [loading, setLoading] =
    useState(true);





  // ===============================
  // FILTER STATES
  // ===============================
  const [searchText, setSearchText] =
    useState("");

  const [speciesFilter, setSpeciesFilter] =
    useState("");

  const [sortOrder, setSortOrder] =
    useState("");








  // ===============================
  // FETCH PETS
  // ===============================
  useEffect(() => {

    const fetchPets = async () => {

      try {

        const res =
          await api.get("/pets");

        setPets(res.data.pets);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    if (user) {

      fetchPets();

    }

  }, [user]);










  // ===============================
  // FILTER + SEARCH + SORT
  // ===============================
  const filteredPets = [...pets]

    // SEARCH
    .filter((pet) =>

      pet.petName
        ?.toLowerCase()
        .includes(
          searchText.toLowerCase()
        )

    )



    // FILTER
    .filter((pet) =>

      speciesFilter
        ? pet.species ===
        speciesFilter
        : true

    )



    // SORT
    .sort((a, b) => {

      if (sortOrder === "low") {

        return (
          a.adoptionFee -
          b.adoptionFee
        );

      }

      if (sortOrder === "high") {

        return (
          b.adoptionFee -
          a.adoptionFee
        );

      }

      return 0;

    });










  // ===============================
  // LOADING
  // ===============================
  if (loading || authLoading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] transition-colors duration-300">

        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

      </div>

    );

  }









  return (

    <div className="min-h-screen px-5 py-16 bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-300">

      <div className="max-w-7xl mx-auto">




        {/* ===============================
            TITLE
        =============================== */}
        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold">

            Browse
            <span className="text-orange-500">
              {" "}All Pets
            </span>

          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">

            {
              filteredPets.length
            } pets available for adoption

          </p>

        </div>












        {/* ===============================
            FILTER SECTION
        =============================== */}
        <div className="bg-gray-100 dark:bg-[#0b1736] border border-black/10 dark:border-white/10 rounded-3xl p-6 mb-10 shadow-lg transition-colors duration-300">




          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <h2 className="text-xl font-bold flex items-center gap-2">

              <FaSearch className="text-orange-500" />

              Filter & Search

            </h2>






            {/* CLEAR FILTER */}
            <button
              onClick={() => {

                setSearchText("");
                setSpeciesFilter("");
                setSortOrder("");

              }}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-[#1e293b] dark:hover:bg-[#334155] transition"
            >

              <FaTimes />

              Clear Filters

            </button>

          </div>












          {/* FILTER GRID */}
          <div className="grid gap-5 md:grid-cols-3">




            {/* SEARCH */}
            <div>

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">

                Search by name

              </p>

              <input
                type="text"
                placeholder="Search pets..."
                value={searchText}
                onChange={(e) =>
                  setSearchText(
                    e.target.value
                  )
                }
                className="w-full p-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1e293b] outline-none"
              />

            </div>












            {/* FILTER */}
            <div>

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">

                Filter by species

              </p>

              <select
                value={speciesFilter}
                onChange={(e) =>
                  setSpeciesFilter(
                    e.target.value
                  )
                }
                className="w-full p-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1e293b] outline-none"
              >

                <option value="">
                  All Species
                </option>

                <option value="Dog">
                  Dog
                </option>

                <option value="Cat">
                  Cat
                </option>

                <option value="Bird">
                  Bird
                </option>

              </select>

            </div>












            {/* SORT */}
            <div>

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">

                Sort by fee

              </p>

              <select
                value={sortOrder}
                onChange={(e) =>
                  setSortOrder(
                    e.target.value
                  )
                }
                className="w-full p-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1e293b] outline-none"
              >

                <option value="">
                  Default
                </option>

                <option value="low">
                  Fee: Low to High
                </option>

                <option value="high">
                  Fee: High to Low
                </option>

              </select>

            </div>

          </div>











          {/* ACTIVE FILTERS */}
          <div className="flex flex-wrap gap-3 mt-5">

            {
              speciesFilter && (

                <div className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-medium">

                  {speciesFilter}

                </div>

              )
            }






            {
              sortOrder && (

                <div className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-medium">

                  {
                    sortOrder === "low"
                      ? "Fee: Low to High"
                      : "Fee: High to Low"
                  }

                </div>

              )
            }

          </div>

        </div>













        {/* ===============================
            EMPTY STATE
        =============================== */}
        {
          filteredPets.length === 0 && (

            <div className="text-center py-20">

              <h2 className="text-3xl font-bold">
                No Pets Found
              </h2>

            </div>

          )
        }












        {/* ===============================
            PET GRID
        =============================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            filteredPets.map((pet) => (

              <div
                key={pet._id}
                className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >




                {/* IMAGE */}
                <img
                  src={pet.image}
                  alt={pet.petName}
                  className="w-full h-64 object-cover"
                />









                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-center justify-between gap-3">

                    <h2 className="text-2xl font-bold">

                      {pet.petName}

                    </h2>

                    <span className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm">

                      {pet.species}

                    </span>

                  </div>









                  <div className="mt-5 space-y-2 text-gray-600 dark:text-gray-300">

                    <p>
                      Breed:
                      {" "}
                      {pet.breed}
                    </p>

                    <p>
                      Age:
                      {" "}
                      {pet.age} years
                    </p>

                    <p>
                      Location:
                      {" "}
                      {pet.location}
                    </p>

                    <p>
                      Fee:
                      {" "}
                      ${pet.adoptionFee}
                    </p>

                  </div>









                  {/* BUTTON */}
                  <Link
                    href={`/pets/${pet._id}`}
                  >

                    <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 transition-all py-3 rounded-2xl font-semibold text-white">

                      View Details

                    </button>

                  </Link>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );

}