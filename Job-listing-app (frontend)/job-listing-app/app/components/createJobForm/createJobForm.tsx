'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateJobForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [job_link, setJob_links] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e:any) =>{
    e.preventDefault();
    setIsLoading(true);

    const create = {
      title, company, email, experience, location, skills, job_link, description
    }

    const res = await fetch("http://127.0.0.1:8000/api/create", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(create)
    });

    if (res.status === 200) {
      alert(`Data added successfully`);
      router.refresh();
      router.push("/");
    }
    
  }

  return (
    <div className="mx-4">
      <div className="flex flex-col ">
        <a
          onClick={() => router.back()}
          className="text-white mt-4 cursor-pointer block pl-10 pt-10"
        >
          Back
        </a>
        <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-8">
          <header className="text-center">
            <h2 className="text-2xl font-bold uppercase mb-1">Create a Gig</h2>
            <p className="mb-4">Post a gig to find a developer</p>
          </header>

          <form onSubmit={handleSubmit} action="">
            <div className="mb-6">
              <label htmlFor="company" className="inline-block text-lg mb-2">
                Company Name
              </label>
              <input
                required
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="company"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="title" className="inline-block text-lg mb-2">
                Job Title
              </label>
              <input
                required
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="title"
                placeholder="Example: Senior Laravel Developer"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="location" className="inline-block text-lg mb-2">
                Job Location
              </label>
              <input
                required
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="location"
                placeholder="Example: Remote, Boston MA, etc"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="text" className="inline-block text-lg mb-2">
                Experience
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="experience"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="inline-block text-lg mb-2">
                Contact Email
              </label>
              <input
                required
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="website" className="inline-block text-lg mb-2">
                Website/Application URL
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="website"
                onChange={(e) => setJob_links(e.target.value)}
                value={job_link}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="tags" className="inline-block text-lg mb-2">
                Tags (Comma Separated)
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="tags"
                placeholder="Example: Laravel, Backend, Postgres, etc"
                onChange={(e) => setSkills(e.target.value)}
                value={skills}
              />
            </div>

            {/* <div className="mb-6">
            <label htmlFor="logo" className="inline-block text-lg mb-2">
              Company Logo
            </label>
            <input
              type="file"
              className="border border-gray-200 rounded p-2 w-full"
              name="logo"
            />
          </div> */}

            <div className="mb-6">
              <label
                htmlFor="description"
                className="inline-block text-lg mb-2"
              >
                Job Description
              </label>
              <textarea
                className="border border-gray-200 rounded p-2 w-full h-96 resize-none"
                name="description"
                placeholder="Include tasks, requirements, salary, etc"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>

            <div className="mb-6">
              <button
                className="w-full 
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 
                   text-white font-bold py-3 rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
                disabled={isLoading}
              >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Create</span>}
              </button>

              {/* <a onClick={() => router.back()} className="text-black ml-4">
                {" "}
                Back{" "}
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
