"use client";

import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#f5f3e7]">
      {/* Navbar */}
      <nav className="bg-[#a7c7cc] px-8 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-[#2d3a3a]">Keep Notes</span>
        <div className="space-x-6">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/notes" className="hover:underline">
            Notes
          </Link>
          <Link href="/account" className="hover:underline">
            Account
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="px-8 pt-4 text-sm text-[#bfa77a]">
        Homepage /{" "}
        <span className="text-[#6b4f1d] font-semibold">Register Page</span>
      </div>

      {/* Login Box */}
      <div className="flex justify-center items-center h-[70vh]">
        <div className="bg-[#f5f3e7] border border-[#a78c6d] rounded-lg shadow-md w-96">
          {/* Window Bar */}
          <div className="bg-[#f7d6b3] rounded-t-lg px-4 py-1 flex justify-between items-center border-b border-[#a78c6d]">
            <span className="text-xs">Register</span>
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-red-400 rounded-full inline-block"></span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-[#5a4a2d] mb-6">
              Register
            </h2>
            <form>
              <label className="block text-[#5a4a2d] font-semibold mb-1">
                User Name
              </label>
              <input
                type="text"
                placeholder="User Name"
                className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#a7c7cc] bg-white"
              />
              <label className="block text-[#5a4a2d] font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#a7c7cc] bg-white"
              />
              <label className="block text-[#5a4a2d] font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#a7c7cc] bg-white"
              />

              <label className="block text-[#5a4a2d] font-semibold mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#a7c7cc] bg-white"
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-[#eab88b] hover:bg-[#d9a96b] text-[#5a4a2d] font-semibold px-6 py-2 rounded transition"
                >
                  Login
                </button>
                <Link href="/register">
                  <button
                    type="button"
                    className="bg-[#a7c7cc] hover:bg-[#8bb3b8] text-[#5a4a2d] font-semibold px-6 py-2 rounded transition"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
