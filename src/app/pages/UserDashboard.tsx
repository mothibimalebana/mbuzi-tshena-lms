import { Link, useNavigate } from "react-router";
import { 
  Bell, 
  LogOut, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Wallet, 
  PieChart, 
  TrendingUp,
  CreditCard,
  Briefcase
} from "lucide-react";
import { Logo } from "../components/Logo";
import { useState, useEffect } from "react";

export default function UserDashboard() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
   const [loggingOut, setLoggingOut] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState("");

   
  const handleLogout = async () => {
  try {
    setLoggingOut(true);
    setLogoutMessage("");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    setLogoutMessage(data.message);

    if (!res.ok) {
      throw new Error(data.message || "Logout failed");
    }

    // Give the user a moment to see the success message
    setTimeout(() => {
      sessionStorage.removeItem("user");
      navigate("/login", { replace: true });
    }, 1000);

  } catch (err: any) {
    setLogoutMessage(err.message || "Unable to log out.");
  } finally {
    setLoggingOut(false);
  }
};

  useEffect(() => {
      const storedUser = sessionStorage.getItem("user");
  
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

  // Mock loan offers based on score
  const loanOffers = [
    {
      id: 1,
      title: "Personal Growth Loan",
      amount: "R 50,000",
      rate: "Prime + 2%",
      term: "24 Months",
      type: "Personal",
      icon: <CreditCard className="w-6 h-6 text-[#005B3F]" />
    },
    {
      id: 2,
      title: "SME Starter Pack",
      amount: "R 150,000",
      rate: "Prime + 1.5%",
      term: "48 Months",
      type: "Business",
      icon: <Briefcase className="w-6 h-6 text-[#005B3F]" />
    }
  ];

  if (!user) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F6F8]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#005B3F]/20 border-t-[#005B3F] rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium">Loading dashboard...</p>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#F4F6F8] font-['Inter',sans-serif]">
      {/* Top Navigation */}
      <nav className="bg-[#005B3F] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => navigate("/")}>
              <Logo textColor="text-white" />
            </div>
            <div className="flex items-center gap-6">
              <button className="text-white/80 hover:text-white transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[#B4D330] ring-2 ring-[#005B3F]" />
              </button>
              <div className="flex items-center gap-3 border-l border-white/20 pl-6">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  {user.full_name.charAt(0) ?? "Loading..." }
                </div>
              
                <span className="font-medium hidden sm:block">{user?.full_name ?? "Loading..."}</span>
                <button 
                 onClick={handleLogout}
                  className="ml-2 text-white/80 hover:text-white transition-colors flex items-center gap-1"
                  title="Logout"
                >
                   {loggingOut ? (
          <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-5 h-5" />
                    Log Out
                  </>
                )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Hero Banner */}
        <div className="relative w-full h-48 md:h-64 rounded-3xl overflow-hidden shadow-sm mb-8">
          <div className="absolute inset-0 bg-[#005B3F]/70 mix-blend-multiply z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1559154352-06e29e1e11aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGVyc29uJTIwdXNpbmclMjBwaG9uZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzczMDc0NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="User Welcome" 
            className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-black mb-1">Welcome back, {user.name}</h1>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-lg">
              Here is your financial overview, AI risk assessment, and personalized loan offers designed for your growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Score & Offers */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* AI Risk Score Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B4D330]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                <div className="order-2 sm:order-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-[#005B3F]" />
                    <h2 className="text-lg font-bold text-gray-800">AI Risk Assessment</h2>
                  </div>
                  <p className="text-sm text-gray-500 max-w-sm mb-4">
                    <p className="text-sm text-gray-500 max-w-sm mb-4">
                  Account Status:{" "}
                  <span
                    className={`font-bold ${
                      user.is_active ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {user.is_active ? "Active" : "Inactive"}
                  </span>
                </p>
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B4D330]/20 text-[#005B3F] rounded-full text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    Pre-approved for Top Tier
                  </div>
                </div>

                <div className="order-1 sm:order-2 self-center flex flex-col items-center justify-center bg-gray-50 rounded-full w-32 h-32 border-4 border-[#B4D330] shadow-inner shrink-0">
                  <span className="text-4xl font-black text-[#005B3F]">{user.riskScore}</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Score</span>
                </div>
              </div>
            </div>

            {/* Loan Offers Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#111827]">Your Personalized Offers</h2>
                <button className="text-sm font-bold text-[#005B3F] hover:text-[#00432E] transition-colors">
                  View all
                </button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {loanOffers.map((offer) => (
                  <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="w-12 h-12 bg-[#F4F6F8] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B4D330]/20 transition-colors">
                      {offer.icon}
                    </div>
                    <div className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold mb-2">
                      {offer.type}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{offer.title}</h3>
                    <div className="text-2xl font-black text-[#005B3F] mb-4">{offer.amount}</div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Interest Rate</span>
                        <span className="font-bold text-gray-900">{offer.rate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">Repayment Term</span>
                        <span className="font-bold text-gray-900">{offer.term}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => navigate("/apply")}
                      className="w-full py-2.5 rounded-lg border-2 border-[#005B3F] text-[#005B3F] font-bold hover:bg-[#005B3F] hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Investment CTA & Quick Actions */}
          <div className="space-y-6">
            
            {/* Investment Cross-Sell CTA */}
            <div className="bg-[#005B3F] rounded-2xl shadow-lg p-6 relative overflow-hidden text-white">
              {/* Abstract decorative shapes */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#B4D330] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full opacity-10 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#B4D330] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <TrendingUp className="w-6 h-6 text-[#005B3F]" />
                </div>
                
                <h2 className="text-2xl font-bold mb-3 leading-tight">Become a MicroFin Investor</h2>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Your excellent financial standing makes you an ideal candidate to join our peer-to-peer investment fund. Earn up to <strong className="text-[#B4D330]">11.5% APY</strong> by funding local entrepreneurs.
                </p>
                
                <ul className="space-y-3 mb-8 text-sm text-white/90 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B4D330]" />
                    Capital protection fund included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B4D330]" />
                    Start with as little as R 1,000
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B4D330]" />
                    Impact local businesses directly
                  </li>
                </ul>

                <button className="w-full py-3 bg-[#B4D330] hover:bg-[#a3c02b] text-[#005B3F] font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                  Explore Investments
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Summary / Wallet info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Quick Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">Active Loan Balance</div>
                    <div className="text-sm font-bold text-gray-900">R 0.00</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">Total Invested</div>
                    <div className="text-sm font-bold text-gray-900">R 0.00</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}