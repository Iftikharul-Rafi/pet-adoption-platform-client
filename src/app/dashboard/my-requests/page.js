"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import toast from "react-hot-toast";

import {
  FaPaw,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaTrash,
  FaEye,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

import api from "@/services/api";

import PrivateRoute from "@/components/providers/PrivateRoute";

export default function MyRequestsPage() {

  // ===============================
  // STATES
  // ===============================
  const [requests, setRequests] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedRequest, setSelectedRequest] =
    useState(null);

  const [updating, setUpdating] =
    useState(false);







  // ===============================
  // FETCH REQUESTS
  // ===============================
  const fetchRequests = async () => {

    try {

      const res = await api.get(
        "/adoptions/my-requests"
      );

      setRequests(
        res.data.requests
      );

    } catch (error) {

      toast.error(
        "Failed to load requests"
      );

    } finally {

      setLoading(false);

    }

  };







  // ===============================
  // UPDATE STATUS
  // ===============================
  const handleStatusUpdate =
    async (id, status) => {

      try {

        setUpdating(true);

        const res =
          await api.patch(
            `/adoptions/${id}`,
            { status }
          );

        toast.success(
          res.data.message
        );

        setRequests(
          requests.map((item) =>
            item._id === id
              ? {
                  ...item,
                  status,
                }
              : item
          )
        );

        setSelectedRequest(
          (prev) => ({
            ...prev,
            status,
          })
        );

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
            "Update failed"
        );

      } finally {

        setUpdating(false);

      }

    };







  // ===============================
  // DELETE REQUEST
  // ===============================
  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this request?"
        );

      if (!confirmDelete) {
        return;
      }

      try {

        const res =
          await api.delete(
            `/adoptions/${id}`
          );

        toast.success(
          res.data.message
        );

        setRequests(
          requests.filter(
            (item) =>
              item._id !== id
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
  // INITIAL LOAD
  // ===============================
  useEffect(() => {

    fetchRequests();

  }, []);







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

      <div className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white px-5 py-14 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">




          {/* ===============================
              HEADER
          =============================== */}
          <div className="mb-12">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold mb-5">

              <FaPaw />

              ADOPTION REQUESTS

            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold">

              Manage
              <span className="text-orange-500">
                {" "}Pet Requests
              </span>

            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">

              Review and manage all incoming pet adoption requests.

            </p>

          </div>











          {/* ===============================
              EMPTY STATE
          =============================== */}
          {
            requests.length === 0 && (

              <div className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] p-16 text-center shadow-lg">

                <h2 className="text-4xl font-bold">

                  No Requests Found

                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-5 text-lg">

                  Nobody has requested adoption yet.

                </p>

              </div>

            )
          }











          {/* ===============================
              REQUEST GRID
          =============================== */}
          {
            requests.length > 0 && (

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {
                  requests.map((request) => (

                    <div
                      key={request._id}
                      className="bg-gray-100 dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >




                      {/* TOP */}
                      <div className="p-6 border-b border-black/10 dark:border-white/10">

                        <div className="flex items-center justify-between gap-4">

                          <div>

                            <h2 className="text-3xl font-extrabold">

                              {request.petName}

                            </h2>

                            <p className="text-gray-500 dark:text-gray-400 mt-2">

                              Adoption Request

                            </p>

                          </div>






                          {/* STATUS */}
                          <div>

                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold
                              
                              ${
                                request.status === "pending"
                                  ? "bg-yellow-500/20 text-yellow-500"
                                  : request.status === "approved"
                                  ? "bg-green-500/20 text-green-500"
                                  : "bg-red-500/20 text-red-500"
                              }
                              `}
                            >

                              {
                                request.status
                              }

                            </span>

                          </div>

                        </div>

                      </div>











                      {/* CONTENT */}
                      <div className="p-6 space-y-5">




                        {/* USER */}
                        <div className="flex items-center gap-4">

                          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                            <FaUser className="text-orange-500 text-xl" />

                          </div>

                          <div>

                            <p className="text-gray-500 dark:text-gray-400 text-sm">

                              Requested User

                            </p>

                            <h3 className="text-xl font-bold">

                              {request.userName}

                            </h3>

                          </div>

                        </div>








                        {/* EMAIL */}
                        <div className="flex items-center gap-4">

                          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

                            <FaEnvelope className="text-cyan-500 text-xl" />

                          </div>

                          <div>

                            <p className="text-gray-500 dark:text-gray-400 text-sm">

                              Email Address

                            </p>

                            <h3 className="text-lg font-semibold break-all">

                              {request.userEmail}

                            </h3>

                          </div>

                        </div>








                        {/* PICKUP DATE */}
                        <div className="flex items-center gap-4">

                          <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">

                            <FaCalendarAlt className="text-green-500 text-xl" />

                          </div>

                          <div>

                            <p className="text-gray-500 dark:text-gray-400 text-sm">

                              Pickup Date

                            </p>

                            <h3 className="text-lg font-bold">

                              {
                                request.pickupDate
                              }

                            </h3>

                          </div>

                        </div>








                        {/* ACTIONS */}
                        <div className="grid grid-cols-2 gap-4 pt-4">




                          {/* VIEW */}
                          <Link
                            href={`/pets/${request.petId}`}
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
                                request._id
                              )
                            }
                            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition-all py-3 rounded-2xl font-bold text-white"
                          >

                            <FaTrash />

                            Delete

                          </button>

                        </div>








                        {/* APPROVE / REJECT */}
                        {
                          request.status ===
                            "pending" && (

                            <div className="grid grid-cols-2 gap-4 mt-2">




                              {/* APPROVE */}
                              <button
                                disabled={
                                  updating
                                }
                                onClick={() =>
                                  handleStatusUpdate(
                                    request._id,
                                    "approved"
                                  )
                                }
                                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                              >

                                <FaCheckCircle />

                                Approve

                              </button>








                              {/* REJECT */}
                              <button
                                disabled={
                                  updating
                                }
                                onClick={() =>
                                  handleStatusUpdate(
                                    request._id,
                                    "rejected"
                                  )
                                }
                                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition-all py-3 rounded-2xl font-bold text-white disabled:opacity-50"
                              >

                                <FaTimesCircle />

                                Reject

                              </button>

                            </div>

                          )
                        }








                        {/* FINAL STATUS */}
                        {
                          request.status !==
                            "pending" && (

                            <div
                              className={`mt-3 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-lg
                              
                              ${
                                request.status ===
                                "approved"
                                  ? "bg-green-500/10 text-green-500"
                                  : "bg-red-500/10 text-red-500"
                              }
                              `}
                            >

                              {
                                request.status ===
                                "approved" ? (
                                  <>
                                    <FaCheckCircle />
                                    Approved
                                  </>
                                ) : (
                                  <>
                                    <FaTimesCircle />
                                    Rejected
                                  </>
                                )
                              }

                            </div>

                          )
                        }

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