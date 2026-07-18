import { ArrowUpRight, ArrowDownRight, Search, FileDown } from "lucide-react";

export default function PaymentsTracker() {
  const transactions = [
    { id: "TRX-1092", borrower: "Aisha Ndlovu", amount: "+R 2,450", type: "Repayment", date: "Today, 10:23", status: "Completed" },
    { id: "TRX-1091", borrower: "Michael Smit", amount: "-R 85,000", type: "Disbursement", date: "Today, 09:15", status: "Completed" },
    { id: "TRX-1090", borrower: "Sarah Jenkins", amount: "+R 1,200", type: "Repayment", date: "Yesterday", status: "Completed" },
    { id: "TRX-1089", borrower: "David Molefe", amount: "+R 4,500", type: "Repayment", date: "Yesterday", status: "Failed" },
    { id: "TRX-1088", borrower: "Lerato Khumalo", amount: "-R 10,000", type: "Disbursement", date: "Mar 07", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#111827] tracking-tight">Payment Tracking</h2>
          <p className="text-gray-500 mt-1 font-medium">Monitor disbursements and incoming repayments.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
          <div className="relative w-full sm:w-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="w-full sm:w-auto pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4D330] transition-shadow shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#005B3F] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#00432E] transition-colors shadow-sm w-full sm:w-auto">
            <FileDown className="w-4 h-4 text-[#B4D330]" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Total Collected Today</h4>
            <div className="text-2xl font-bold text-[#111827] mt-1 tracking-tight">R 124,500</div>
          </div>
          <div className="w-12 h-12 bg-[#E5F2D9] border border-[#B4D330]/30 rounded-xl flex items-center justify-center text-[#005B3F]">
            <ArrowDownRight className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Total Disbursed Today</h4>
            <div className="text-2xl font-bold text-[#111827] mt-1 tracking-tight">R 450,000</div>
          </div>
          <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-700">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Failed Transactions</h4>
            <div className="text-2xl font-bold text-[#111827] mt-1 tracking-tight">3</div>
          </div>
          <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center text-red-700">
            <span className="font-bold text-xl">!</span>
          </div>
        </div>
      </div>

      {/* Ledger */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gray-50/50">
          <h3 className="font-bold text-[#111827]">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-gray-100">
              {transactions.map((tx, i) => (
                <tr key={i} className="hover:bg-[#F4F6F8] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${tx.type === 'Repayment' ? 'bg-[#E5F2D9] text-[#005B3F] border-[#B4D330]/30' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                        {tx.type === 'Repayment' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="font-bold text-[#111827]">{tx.borrower}</div>
                        <div className="text-xs text-gray-500 mt-0.5 font-medium">{tx.id} • {tx.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`font-bold ${tx.type === 'Repayment' ? 'text-[#005B3F]' : 'text-[#111827]'}`}>
                      {tx.amount}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                    {tx.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${
                      tx.status === 'Completed' ? 'bg-[#E5F2D9] text-[#005B3F] border-[#B4D330]/30' :
                      tx.status === 'Failed' ? 'bg-red-50 text-red-700 border-red-100' :
                      'bg-amber-50 text-amber-700 border-amber-100'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}