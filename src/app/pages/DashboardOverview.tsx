import { 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  BrainCircuit
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", approvals: 4000, rejections: 2400 },
  { name: "Tue", approvals: 3000, rejections: 1398 },
  { name: "Wed", approvals: 2000, rejections: 9800 },
  { name: "Thu", approvals: 2780, rejections: 3908 },
  { name: "Fri", approvals: 1890, rejections: 4800 },
  { name: "Sat", approvals: 2390, rejections: 3800 },
  { name: "Sun", approvals: 3490, rejections: 4300 },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* AI Status Banner - Nedbank Style */}
      <div className="relative bg-[#005B3F] rounded-2xl p-6 md:p-8 flex items-center justify-between text-white shadow-lg overflow-hidden border border-[#00432E] min-h-[140px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#005B3F]/80 mix-blend-multiply z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1757421392324-cc071fb8b644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBwZW9wbGUlMjBhZnJpY2F8ZW58MXx8fHwxNzczMDc0NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Corporate Office" 
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B4D330] opacity-20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 z-10"></div>
        
        <div className="relative z-20 flex items-center gap-4">
          <div className="bg-white/10 p-3.5 rounded-xl border border-white/20 backdrop-blur-md shadow-sm">
            <BrainCircuit className="w-8 h-8 text-[#B4D330]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">AI Risk Engine Active</h2>
            <p className="text-sm text-white/90 mt-1 font-medium">Processed 1,248 loan requests today with 99.8% accuracy.</p>
          </div>
        </div>
        <div className="relative z-20 text-right hidden md:block bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
          <div className="text-3xl font-black text-[#B4D330] tracking-tight leading-none">Active</div>
          <div className="text-xs text-white/80 font-bold uppercase tracking-wider mt-1.5">System Status</div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard 
          title="Total Active Loans" 
          value="R 42.5M" 
          trend="+12.5%" 
          isPositive={true}
          icon={TrendingUp}
          color="blue"
        />
        <StatCard 
          title="Reliable Borrowers" 
          value="8,432" 
          trend="+5.2%" 
          isPositive={true}
          icon={Users}
          color="green"
        />
        <StatCard 
          title="Avg. AI Risk Score" 
          value="24/100" 
          trend="-2.1%" 
          isPositive={true}
          icon={CheckCircle2}
          color="indigo"
        />
        <StatCard 
          title="Fraud Alerts Detected" 
          value="14" 
          trend="+2" 
          isPositive={false}
          icon={AlertTriangle}
          color="red"
        />
      </div>

      {/* Charts & AI Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#111827]">Loan Processing Trends</h3>
            <select className="bg-[#F4F6F8] border border-gray-200 text-sm font-semibold text-[#005B3F] rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-[#B4D330] hover:bg-gray-50 transition-colors">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApprovals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#005B3F" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#005B3F" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRejections" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12, fontWeight: 500}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12, fontWeight: 500}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="approvals" stroke="#005B3F" strokeWidth={3} fillOpacity={1} fill="url(#colorApprovals)" />
                <Area type="monotone" dataKey="rejections" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorRejections)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col">
          <h3 className="text-lg font-bold text-[#111827] mb-6">Recent Fraud Alerts</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {[
              { id: "REQ-8902", reason: "Identity mismatch detected by AI", time: "10 mins ago", risk: 94 },
              { id: "REQ-8895", reason: "Unusual application location", time: "1 hr ago", risk: 82 },
              { id: "REQ-8841", reason: "Multiple concurrent requests", time: "3 hrs ago", risk: 88 },
              { id: "REQ-8802", reason: "Inconsistent income history", time: "5 hrs ago", risk: 76 },
            ].map((alert) => (
              <div key={alert.id} className="bg-[#FEF2F2] p-4 rounded-xl border border-red-100 transition-all hover:border-red-200">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-bold text-red-900">{alert.id}</span>
                  <span className="text-xs font-bold text-red-700 bg-red-100 border border-red-200 px-2 py-0.5 rounded-md">
                    Risk: {alert.risk}
                  </span>
                </div>
                <p className="text-sm text-red-800 font-medium mb-2">{alert.reason}</p>
                <div className="text-xs text-red-500 font-medium">{alert.time}</div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-3 text-sm font-bold text-[#005B3F] bg-white border border-[#005B3F]/20 rounded-xl hover:bg-[#F4F6F8] transition-colors">
            View All Alerts
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, isPositive, icon: Icon, color }: any) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    green: "bg-[#E5F2D9] text-[#005B3F] border-[#B4D330]/30",
    red: "bg-red-50 text-red-700 border-red-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-xl border ${colorMap[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center gap-1 text-sm font-bold bg-gray-50 px-2 py-1 rounded-md ${isPositive ? 'text-green-700' : 'text-red-700'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {trend}
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-sm font-semibold text-gray-500">{title}</h4>
        <div className="text-2xl font-bold text-[#111827] mt-1 tracking-tight">{value}</div>
      </div>
    </div>
  );
}