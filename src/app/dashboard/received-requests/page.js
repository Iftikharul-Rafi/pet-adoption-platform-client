"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import api from "@/services/api";

import PrivateRoute from "@/components/providers/PrivateRoute";

export default function ReceivedRequestsPage() {

  // ===============================
  // STATES
  // ===============================
  const [requests, setRequests] =
    useState([]);

  const [loading, setLoading] =
    useState(true);








  // ===============================
  // FETCH RECEIVED REQUESTS
  // ===============================
  useEffect(() => {

    const fetchRequests =
      async () => {

        try {

          const res =
            await api.get(
              "/adoptions/received"
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



    fetchRequests();

  }, []);









  // ===============================
  // APPROVE REQUEST
  // ===============================
  const handleApprove =
    async (id) => {

      try {

        const res =
          await api.patch(
            `/adoptions/approve/${id}`
          );





        toast.success(
          res.data.message
        );






        // update ui
        setRequests((prev) =>
          prev.map((req) =>

            req._id === id
              ? {
                  ...req,
                  status: "approved",
                }
              : {
                  ...req,

                  status:
                    req.petId ===
                    prev.find(
                      (r) =>
                        r._id === id
                    )?.petId
                      ? "rejected"
                      : req.status,
                }
          )
        );

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
            "Approve failed"
        );

      }

    };









  // ===============================
  // REJECT REQUEST
  // ===============================
  const handleReject =
    async (id) => {

      try {

        const res =
          await api.patch(
            `/adoptions/reject/${id}`
          );






        toast.success(
          res.data.message
        );






        // update ui
        setRequests((prev) =>
          prev.map((req) =>
            req._id === id
              ? {
                  ...req,
                  status: "rejected",
                }
              : req
          )
        );

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
            "Reject failed"
        );

      }

    };









  // ===============================
  // LOADING
  // ===============================
  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">

        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

      </div>
    );

  }










  return (

    <PrivateRoute>

      <div className="min-h-screen px-5 py-16">

        <div className="max-w-7xl mx-auto">




          {/* ===============================
              PAGE HEADER
          =============================== */}
          <div className="mb-12">

            <h1 className="text-5xl font-bold">
              Received Requests
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Manage adoption requests for your pets
            </p>

          </div>









          {/* ===============================
              EMPTY STATE
          =============================== */}
          {requests.length === 0 ? (

            <div className="bg-[#1e293b] p-12 rounded-3xl text-center border border-white/10">

              <h2 className="text-3xl font-bold">
                No Requests Yet
              </h2>

              <p className="text-gray-400 mt-4">
                Adoption requests will appear here.
              </p>

            </div>

          ) : (








            /* ===============================
               REQUESTS GRID
            =============================== */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {requests.map((request) => (

                <div
                  key={request._id}
                  className="bg-[#1e293b] border border-white/10 rounded-3xl overflow-hidden"
                >





                  {/* IMAGE */}
                  <img
                    src={request.petImage}
                    alt={request.petName}
                    className="w-full h-72 object-cover"
                  />








                  {/* CONTENT */}
                  <div className="p-8">




                    {/* top */}
                    <div className="flex items-center justify-between">

                      <div>

                        <h2 className="text-3xl font-bold">
                          {request.petName}
                        </h2>

                        <p className="text-gray-400 mt-2">
                          Requested by
                        </p>

                        <h3 className="text-lg font-semibold">
                          {request.userName}
                        </h3>

                      </div>








                      {/* status */}
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold
                        
                        ${
                          request.status ===
                          "approved"
                            ? "bg-green-500/20 text-green-400"

                            : request.status ===
                              "rejected"
                            ? "bg-red-500/20 text-red-400"

                            : "bg-yellow-500/20 text-yellow-400"
                        }
                        
                        `}
                      >

                        {request.status}

                      </span>

                    </div>









                    {/* requester info */}
                    <div className="mt-8 space-y-4 text-gray-300">

                      <p>
                        <span className="font-semibold text-white">
                          Email:
                        </span>{" "}
                        {request.userEmail}
                      </p>

                      <p>
                        <span className="font-semibold text-white">
                          Phone:
                        </span>{" "}
                        {request.phone}
                      </p>

                      <p>
                        <span className="font-semibold text-white">
                          Address:
                        </span>{" "}
                        {request.address}
                      </p>

                      <p>
                        <span className="font-semibold text-white">
                          Message:
                        </span>{" "}
                        {request.message}
                      </p>

                    </div>









                    {/* buttons */}
                    {request.status ===
                      "pending" && (

                      <div className="mt-8 flex gap-4">




                        {/* approve */}
                        <button
                          onClick={() =>
                            handleApprove(
                              request._id
                            )
                          }
                          className="flex-1 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-2xl font-bold"
                        >
                          Approve
                        </button>







                        {/* reject */}
                        <button
                          onClick={() =>
                            handleReject(
                              request._id
                            )
                          }
                          className="flex-1 bg-red-500 hover:bg-red-600 transition-all py-3 rounded-2xl font-bold"
                        >
                          Reject
                        </button>

                      </div>

                    )}

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </PrivateRoute>

  );

}