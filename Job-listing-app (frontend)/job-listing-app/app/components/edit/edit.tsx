'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { json } from 'stream/consumers';

export default function Edit({
  id,
  title,
  email,
  company,
  experience,
  location,
  skills,
  job_link,
  description,
}: any) {

  const [newTitle, setNewTitle] = useState(title);
  const [newEmail, setNewEmail] = useState(email);
  const [newCompany, setNewCompany] = useState(company);
  const [newExperience, setNewExperience] = useState(experience);
  const [newLocation, setNewLocation] = useState(location);
  const [newSkills, setNewSkills] = useState(skills);
  const [newJobLink, setNewJobLink] = useState(job_link);
  const [newDescription, setNewDescription] = useState(description);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleEdit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          email: newEmail,
          company: newCompany,
          experience: newExperience,
          location: newLocation,
          skills: newSkills,
          job_link: newJobLink,
          description: newDescription,
        }),
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error();
      }
      router.push("/");
      return response.json();
    } catch (error) {}
  };
  return (
    <div className="">
      <div className="mx-4">
        <a
          onClick={() => router.back()}
          className="text-white mt-4 cursor-pointer block pl-10 pt-10"
        >
          Back
        </a>
        <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
          <header className="text-center">
            <h2 className="text-2xl font-bold uppercase mb-1">Edit Gig</h2>
            <p className="mb-4">
              Edit: <b>{newTitle}</b>
            </p>
          </header>

          <form onSubmit={handleEdit} action="">
            <div className="mb-6">
              <label htmlFor="company" className="inline-block text-lg mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="company"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="title" className="inline-block text-lg mb-2">
                Job Title
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="inline-block text-lg mb-2">
                Contact Email
              </label>
              <input
                type="email"
                className="border border-gray-200 rounded p-2 w-full"
                name="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="inline-block text-lg mb-2">
                Experience
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="experience"
                value={newExperience}
                onChange={(e) => setNewExperience(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="location" className="inline-block text-lg mb-2">
                Job Location
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="location"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="skills" className="inline-block text-lg mb-2">
                Skills
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="skills"
                value={newSkills}
                onChange={(e) => setNewSkills(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="job_link" className="inline-block text-lg mb-2">
                Job Link
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded p-2 w-full"
                name="job_link"
                value={newJobLink}
                onChange={(e) => setNewJobLink(e.target.value)}
              />
            </div>

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
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-6">
              <button
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 text-white font-bold py-3 rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
                disabled={isLoading}
              >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Edit</span>}
              </button>

              {/* <a href="dashboard.html" className="text-black ml-4">
                Back
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
