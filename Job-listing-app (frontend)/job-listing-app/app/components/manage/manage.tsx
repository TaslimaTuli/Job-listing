'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Loading() {
  return <h2 className="text-black text-9xl">Loading...</h2>;
}

export default function Manage() {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/api/show", {
        cache: "no-store",
      });
      const data = await response.json();
      setJobs(data);
    }

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
      method: "DELETE",
    });

    // Refresh data after deletion
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  return (
    <div className="mx-40 mb-auto mt-20">
      <form action="">
        <div className="relative border-2 border-gray-100 m-4 rounded-lg">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
            type="text"
            name="search"
            className="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search Laravel Gigs..."
          />
          <div className="absolute top-2 right-2">
            <button
              type="submit"
              className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="mx-4">
        <div className="bg-gray-50 border border-gray-200 p-10 rounded">
          <header>
            <h1 className="text-3xl text-center font-bold my-6 uppercase">
              Manage Gigs
            </h1>
          </header>
          {jobs.length > 0 ? (
            <table className="w-full table-auto rounded-sm">
              <tbody>
                {jobs.map((job: any) => (
                  <tr key={job.id} className="border-gray-300">
                    <td className="px-4 py-4 border-t border-b border-gray-300 text-lg ">
                      <Link
                        className="text-blue-500 "
                        href={{
                          pathname: "/See_More",
                          query: { _id: job.id },
                        }}
                      >
                        {job.title}
                      </Link>
                    </td>
                    <td className="px-4 py-4 border-t border-b border-gray-300 text-lg  items-center">
                      <Link
                        href={{ pathname: `/edit/${job.id}`, 
                        //query: { _id: job.id } 
                      }}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        key={job.id}
                        className="text-blue-500 px-6 py-2 rounded-xl"
                      >
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                      </Link>
                    </td>
                    <td className="px-4 py-4 border-t border-b border-gray-300 text-lg items-center">
                      <button
                        className="text-red-600"
                        onClick={() => handleDelete(job.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="mt-10 pb-4 flex px-6 py-4 bg-gray-50 justify-center text-center">
              <p className="text-center text-xl font-semibold text-gray-500 mt-4 mb-4">
                Loading jobs...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
