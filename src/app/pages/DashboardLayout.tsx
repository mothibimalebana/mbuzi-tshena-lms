import { Outlet, NavLink } from "react-router";
import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  Users, 
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import clsx from "clsx";
import { Logo } from "../components/Logo";

export default function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Overview", path: "/admin", icon: LayoutDashboard, exact: true },
    { name: "Loan Requests", path: "/admin/loans", icon: FileText },
    { name: "Payments", path: "/admin/payments", icon: CreditCard },
    { name: "Borrowers", path: "/admin/borrowers", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F8] flex font-['Inter',sans-serif] overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Nedbank Dark Green */}
      <aside className={clsx(
        "w-64 bg-[#005B3F] text-white flex flex-col shrink-0 border-r border-[#00432E] fixed lg:static inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 flex items-center justify-between">
          <Logo textColor="text-white" />
          <button 
            className="lg:hidden text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="px-6 py-4 text-xs font-semibold text-[#B4D330] uppercase tracking-wider opacity-80">
          Management
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.exact}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium border-l-4",
                isActive 
                  ? "bg-[#00432E] text-white border-[#B4D330] shadow-sm" 
                  : "border-transparent text-white/80 hover:text-white hover:bg-[#00432E]/50"
              )}
            >
              <item.icon className={clsx("w-5 h-5", "transition-colors")} />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-[#00432E]">
          <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-[#00432E]/50 rounded-lg w-full transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </button>
          <NavLink to="/admin/login" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-[#00432E]/50 rounded-lg w-full transition-colors mt-1">
            <LogOut className="w-5 h-5" />
            Log Out
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        {/* Header - White with subtle Nedbank Accent */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 shrink-0 relative z-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#B4D330]"></div>
          
          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-[#111827] truncate hidden sm:block">System Dashboard</h1>
            <h1 className="text-xl font-bold text-[#111827] truncate sm:hidden">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E5F2D9] border border-[#B4D330]/30 flex items-center justify-center text-[#005B3F] font-bold shadow-sm text-sm sm:text-base">
                AO
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-sm font-bold text-[#111827]">Admin Officer</span>
                <span className="text-xs text-gray-500 font-medium">Risk Department</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}