import { useState } from "react";
import { Search, Filter, ShieldCheck, ShieldAlert, Clock, ChevronRight } from "lucide-react";
import clsx from "clsx";

const mockRequests = [
  { id: "REQ-9012", name: "Sarah Jenkins", amount: "R 50,000", score: 12, aiAction: "Auto-Approve", status: "Approved", date: "Today, 09:41" },
  { id: "REQ-9011", name: "David Molefe", amount: "R 120,000", score: 78, aiAction: "Flagged", status: "Under Review", date: "Today, 08:30" },
  { id: "REQ-9010", name: "Aisha Ndlovu", amount: "R 25,000", score: 25, aiAction: "Auto-Approve", status: "Approved", date: "Yesterday, 14:22" },
  { id: "REQ-9009", name: "Michael Smit", amount: "R 85,000", score: 55, aiAction: "Manual Review", status: "Pending", date: "Yesterday, 11:15" },
  { id: "REQ-9008", name: "Lerato Khumalo", amount: "R 10,000", score: 8, aiAction: "Auto-Approve", status: "Approved", date: "Mar 07, 16:45" },
  { id: "REQ-9007", name: "Johan Van Der Merwe", amount: "R 200,000", score: 82, aiAction: "Decline", status: "Rejected", date: "Mar 07, 09:10" },
  { id: "REQ-9006", name: "Thabo Mbeki", amount: "R 40,000", score: 34, aiAction: "Auto-Approve", status: "Approved", date: "Mar 06, 13:20" },
];

export default function LoanRequests() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#111827] tracking-tight">Loan Requests</h2>
          <p className="text-gray-500 mt-1 font-medium">Manage and review applicant requests processed by AI.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
          <div className="relative w-full sm:w-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by ID or name..." 
              className="w-full sm:w-auto pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4D330] focus:border-[#B4D330] transition-shadow shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-[#111827] font-semibold hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {["All", "Pending Review", "Auto-Approved", "Flagged"].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-bold transition-all border",
              filter === f 
                ? "bg-[#005B3F] text-white border-[#005B3F] shadow-sm" 
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Applicant</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">AI Risk Score</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">AI Action</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockRequests.map((req) => (
                <tr key={req.id} className="hover:bg-[#F4F6F8] transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-[#111827]">{req.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5 font-medium">{req.id}</div>
                  </td>
                  <td className="px-6 py-4 font-bold text-[#005B3F]">
                    {req.amount}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-full max-w-[80px] h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200/50">
                        <div 
                          className={clsx(
                            "h-full rounded-full",
                            req.score < 30 ? "bg-[#B4D330]" : req.score < 60 ? "bg-amber-400" : "bg-red-500"
                          )}
                          style={{ width: `${req.score}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#111827] w-6">{req.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={clsx(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold",
                      req.aiAction === "Auto-Approve" ? "bg-green-100 text-green-700" :
                      req.aiAction === "Flagged" || req.aiAction === "Decline" ? "bg-red-100 text-red-700" :
                      "bg-yellow-100 text-yellow-700"
                    )}>
                      {req.aiAction === "Auto-Approve" && <ShieldCheck className="w-3.5 h-3.5" />}
                      {(req.aiAction === "Flagged" || req.aiAction === "Decline") && <ShieldAlert className="w-3.5 h-3.5" />}
                      {req.aiAction === "Manual Review" && <Clock className="w-3.5 h-3.5" />}
                      {req.aiAction}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={clsx(
                      "inline-block px-3 py-1 rounded-md text-xs font-bold border",
                      req.status === "Approved" ? "bg-[#E5F2D9] text-[#005B3F] border-[#B4D330]/30" :
                      req.status === "Rejected" ? "bg-red-50 text-red-700 border-red-100" :
                      "bg-blue-50 text-blue-700 border-blue-100"
                    )}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                    {req.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-[#E5F2D9] rounded-lg text-gray-400 hover:text-[#005B3F] transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm">
          <span className="text-gray-500 font-medium">Showing 1-7 of 1,248 entries</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-[#111827] font-bold hover:bg-gray-50 disabled:opacity-50 transition-colors">Previous</button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-[#111827] font-bold hover:bg-gray-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}