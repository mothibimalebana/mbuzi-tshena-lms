import { useState } from "react";
import { useNavigate } from "react-router";
import { Lock, Mail } from "lucide-react";
import { Logo, LogoIcon } from "../components/Logo";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

   const API_URL = import.meta.env.VITE_API_URL;

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {
    const res = await fetch(
  `${API_URL}/api/auth/admin/login`,
  {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }
);

    const data = await res.json();

    if (!res.ok) {
      setError(data.detail || data.message || "Invalid email/ID number or password.");
      return;
    }

    // Fetch the authenticated user using the cookie
    const meRes = await fetch(
      `${API_URL}/api/auth/me`,
      {
        credentials: "include",
      }
    );

    if (!meRes.ok) {
      setError("Failed to retrieve user information.");
      return;
    }

    const user = await meRes.json();



    // store only the user (not the JWT)
    sessionStorage.setItem("user", JSON.stringify(user));

    navigate("/admin");
  } catch (err) {
    setError("Unable to connect to the server. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-[#F4F6F8] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-['Inter',sans-serif]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Logo textClassName="text-3xl font-bold tracking-tight" iconClassName="w-10 h-10 text-[#005B3F]" containerClassName="flex flex-col items-center gap-4 text-center" />
        </div>
        <p className="mt-4 text-center text-sm font-medium text-gray-500">
          Sign in to the Admin Dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl border border-gray-200 sm:rounded-2xl sm:px-10 relative overflow-hidden">
          {/* Subtle top accent border - Nedbank Style */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#B4D330]"></div>
          
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-bold text-[#111827]">
                Email address
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-[#F4F6F8] border border-gray-200 rounded-lg text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4D330] focus:border-transparent transition-all font-medium sm:text-sm"
                  placeholder="admin@microfin.ai"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#111827]">
                Password
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-[#F4F6F8] border border-gray-200 rounded-lg text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4D330] focus:border-transparent transition-all font-medium sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#005B3F] focus:ring-2 focus:ring-[#B4D330] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-gray-600">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-[#005B3F] hover:text-[#00432E] transition-colors">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
                {error && (
      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {error}
      </div>
    )}
                  <button
  type="submit"
  disabled={loading}
  className="w-full flex justify-center items-center py-3 px-4 rounded-lg shadow-sm text-sm font-bold text-white bg-[#005B3F] hover:bg-[#00432E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4D330] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
>
  {loading ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      Signing In...
    </>
  ) : (
    "Sign In"
  )}
</button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-medium">Internal System Access Only</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs font-medium text-gray-400">
          © {new Date().getFullYear()} Mbudzi Tshena Financial Solutions. All rights reserved.
        </div>
      </div>
    </div>
  );
}