import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { User, Lock, ArrowLeft } from "lucide-react";
import { Logo, LogoIcon } from "../components/Logo";

export default function UserSignUp() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F4F6F8] flex font-['Inter',sans-serif]">
      {/* Left Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#005B3F]">
        <div className="absolute inset-0 bg-[#005B3F]/70 mix-blend-multiply z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1655720360377-b97f6715e1ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGVyc29uJTIwdXNpbmclMjBtb2JpbGUlMjBwaG9uZSUyMGJhbmtpbmd8ZW58MXx8fHwxNzczMDczNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Banking on the go"
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        <div className="relative z-20 flex flex-col justify-between p-12 text-white h-full w-full">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 hover:text-[#B4D330] transition-colors text-sm font-bold">
              <ArrowLeft className="w-4 h-4" />
              Back to main site
            </Link>
          </div>
          <div className="max-w-md">
            <div className="inline-flex bg-[#B4D330] p-3 rounded-xl mb-6 shadow-sm">
              <LogoIcon className="w-10 h-10 text-[#005B3F]" />
            </div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">Empowering your financial future.</h1>
            <p className="text-lg text-white/90 font-medium">
              Access your personalized dashboard to manage loan requests, track your payments, and view your risk score anywhere, anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 xl:px-24">
        {/* Mobile header (hidden on lg screens) */}
        <div className="lg:hidden mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[#005B3F] hover:text-[#00432E] transition-colors text-sm font-bold mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to main site
          </Link>
          <Logo textClassName="text-2xl font-bold tracking-tight" iconClassName="w-8 h-8 text-[#005B3F]" />
        </div>

        <div className="w-full max-w-md mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827]">
            Welcome!
          </h2>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Please sign up to create your personal account
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-bold text-[#111827]">
                Email or ID Number
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4D330] focus:border-transparent transition-all font-medium sm:text-sm shadow-sm"
                  placeholder="name@example.com"
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
                  className="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4D330] focus:border-transparent transition-all font-medium sm:text-sm shadow-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#111827]">
                Confirm Password
              </label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-lg text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B4D330] focus:border-transparent transition-all font-medium sm:text-sm shadow-sm"
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
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#005B3F] hover:bg-[#00432E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4D330] transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center text-sm font-medium">
            <span className="text-gray-500 mr-1">Returning to Mbudzi Tshena?</span>
            <a href="/login" className="font-bold text-[#005B3F] hover:text-[#00432E] transition-colors">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}