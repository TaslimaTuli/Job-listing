import React from 'react'

export default function SigninForm() {
  return (
    <div className="mx-4">
      <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
        <header className="text-center">
          <h2 className="text-2xl font-bold uppercase mb-1">Log In</h2>
          <p className="mb-4">Log in to post gigs</p>
        </header>

        <form action="">
          <div className="mb-6">
            <label htmlFor="email" className="inline-block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-200 rounded p-2 w-full"
              name="email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="inline-block text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              className="border border-gray-200 rounded p-2 w-full"
              name="password"
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              // className="bg-laravel text-white rounded py-2 px-4 hover:bg-black"
              className="w-full 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 
         text-white font-bold py-3 rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Sign In
            </button>
          </div>

          <div className="mt-8">
            <p>
              Don't have an account?
              <a href="signup" className="text-laravel">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
