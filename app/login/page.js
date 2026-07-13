// ============================================
// FILE: app/login/page.js
// ============================================
// This is the LOGIN PAGE — URL: /login
// "use client" because we need useState and signIn
// ============================================

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // stores what user types in form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // stores error message if login fails
  const [error, setError] = useState("");

  // true while login request is happening
  const [isLoading, setIsLoading] = useState(false);

  // useRouter lets us navigate to another page
  const router = useRouter();

  // =============================================
  // handleSubmit
  // =============================================
  // runs when user clicks Login button
  // sends email + password to NextAuth
  // NextAuth checks against our route.js
  // =============================================
  async function handleSubmit(e) {
    // stop page from refreshing
    e.preventDefault();

    // show loading spinner, clear old errors
    setIsLoading(true);
    setError("");

    // =========================================
    // signIn — sends credentials to NextAuth
    // =========================================
    // "credentials" = use our CredentialsProvider
    // email, password = what user typed
    // redirect: false = we handle redirect ourselves
    // =========================================
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // login failed — show error
    if (result.error) {
      setError("Wrong email or password. Try again.");
      setIsLoading(false);
      return;
    }

    // login success — go to admin dashboard
    router.push("/admin");
  }

  return (
    // full screen — center everything
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* white card — max width 448px */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* header */}
        <div className="text-center mb-8">
          {/* green icon */}
          <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">+</span>
          </div>

          {/* clinic name */}
          <h1 className="text-2xl font-bold text-gray-900">ZENOVA Clinic</h1>

          {/* subtitle */}
          <p className="text-sm text-gray-500 mt-1">Admin Dashboard Login</p>
        </div>

        {/* login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* email input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@zenova.com"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* password input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* error message — only shows when error exists */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login to Dashboard"}
          </button>
        </form>

        {/* hint for demo */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Email: admin@zenova.com | Password: admin123
        </p>
      </div>
    </div>
  );
}
