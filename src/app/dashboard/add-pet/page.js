"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import {
  FaPaw,
  FaImage,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

import PrivateRoute from "@/components/providers/PrivateRoute";

import useAuth from "@/hooks/useAuth";

import api from "@/services/api";

export default function AddPetPage() {

  const router = useRouter();

  const { user } = useAuth();





  // ===============================
  // FORM STATE
  // ===============================
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    petName: "",
    species: "",
    breed: "",
    age: "",
    gender: "",
    image: "",
    healthStatus: "",
    vaccinationStatus: "",
    location: "",
    adoptionFee: "",
    description: "",
  });





  // ===============================
  // HANDLE INPUT CHANGE
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





    // IMAGE URL VALIDATION
    if (
      !formData.image.startsWith("http")
    ) {

      return toast.error(
        "Please provide a valid image URL"
      );

    }






    try {

      setLoading(true);





      // FINAL DATA
      const petData = {
        ...formData,

        age: Number(formData.age),

        adoptionFee: Number(
          formData.adoptionFee
        ),

        ownerEmail: user?.email,
      };





      // API REQUEST
      const res = await api.post(
        "/pets",
        petData
      );





      // SUCCESS
      toast.success(
        res.data.message ||
        "Pet added successfully"
      );





      // RESET FORM
      setFormData({
        petName: "",
        species: "",
        breed: "",
        age: "",
        gender: "",
        image: "",
        healthStatus: "",
        vaccinationStatus: "",
        location: "",
        adoptionFee: "",
        description: "",
      });





      // REDIRECT
      router.push("/dashboard");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to add pet"
      );

    } finally {

      setLoading(false);

    }

  };







  return (

    <PrivateRoute>

      <div className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white px-5 py-16 transition-colors duration-300 overflow-hidden relative">




        {/* background blur */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>







        <div className="max-w-6xl mx-auto relative z-10">




          {/* ===============================
              HEADER
          =============================== */}
          <div className="text-center mb-14">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-400 text-sm font-semibold mb-5">

              <FaPaw />

              PET ADOPTION CENTER

            </div>





            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

              Add a New
              <span className="text-orange-500">
                {" "}Pet
              </span>

            </h1>





            <p className="text-gray-600 dark:text-gray-400 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">

              Fill in the pet information below to create a professional pet adoption listing.

            </p>

          </div>









          {/* ===============================
              FORM CONTAINER
          =============================== */}
          <div className="bg-gray-100 dark:bg-[#111827] border border-black/10 dark:border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl">




            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-7"
            >





              {/* PET NAME */}
              <div>

                <label className="block mb-3 font-semibold">
                  Pet Name
                </label>

                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  required
                  placeholder="Enter pet name"
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                />

              </div>






              {/* SPECIES */}
              <div>

                <label className="block mb-3 font-semibold">
                  Species
                </label>

                <select
                  name="species"
                  value={formData.species}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                >

                  <option value="">
                    Select Species
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

                  <option value="Rabbit">
                    Rabbit
                  </option>

                </select>

              </div>






              {/* BREED */}
              <div>

                <label className="block mb-3 font-semibold">
                  Breed
                </label>

                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                  placeholder="Golden Retriever"
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                />

              </div>






              {/* AGE */}
              <div>

                <label className="block mb-3 font-semibold">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="2"
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                />

              </div>






              {/* GENDER */}
              <div>

                <label className="block mb-3 font-semibold">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                </select>

              </div>






              {/* IMAGE URL */}
              <div>

                <label className="mb-3 font-semibold flex items-center gap-2">
                  <FaImage />
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  placeholder="https://..."
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                />

              </div>






              {/* HEALTH STATUS */}
              <div>

                <label className="block mb-3 font-semibold">
                  Health Status
                </label>

                <input
                  type="text"
                  name="healthStatus"
                  value={formData.healthStatus}
                  onChange={handleChange}
                  required
                  placeholder="Healthy"
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                />

              </div>






              {/* VACCINATION */}
              <div>

                <label className="block mb-3 font-semibold">
                  Vaccination Status
                </label>

                <input
                  type="text"
                  name="vaccinationStatus"
                  value={formData.vaccinationStatus}
                  onChange={handleChange}
                  required
                  placeholder="Vaccinated"
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                />

              </div>






              {/* LOCATION */}
              <div>

                <label className="mb-3 font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt />
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Dhaka"
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                />

              </div>






              {/* ADOPTION FEE */}
              <div>

                <label className="mb-3 font-semibold flex items-center gap-2">
                  <FaMoneyBillWave />
                  Adoption Fee
                </label>

                <input
                  type="number"
                  name="adoptionFee"
                  value={formData.adoptionFee}
                  onChange={handleChange}
                  required
                  placeholder="100"
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500"
                />

              </div>






              {/* OWNER EMAIL */}
              <div className="md:col-span-2">

                <label className="block mb-3 font-semibold">
                  Owner Email
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full px-5 py-4 rounded-2xl bg-gray-200 dark:bg-[#334155] border border-black/10 dark:border-white/10 outline-none cursor-not-allowed"
                />

              </div>






              {/* DESCRIPTION */}
              <div className="md:col-span-2">

                <label className="block mb-3 font-semibold">
                  Description
                </label>

                <textarea
                  rows="6"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Write detailed information about the pet..."
                  className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 outline-none focus:border-orange-500 resize-none"
                ></textarea>

              </div>






              {/* BUTTON */}
              <div className="md:col-span-2">

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-500 transition-all duration-300 py-4 rounded-2xl font-bold text-lg text-white shadow-lg shadow-orange-500/20"
                >

                  {
                    loading
                      ? "Adding Pet..."
                      : "Add Pet"
                  }

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </PrivateRoute>

  );

}