import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight, Search, FileDown, Loader2 } from "lucide-react";

 const API_URL = import.meta.env.VITE_API_URL;

interface Transaction {
  id: string;
  borrower: string;
  amount: string;
  type: string;
  date: string;
  status: string;
}

interface Summary {
  total_collected: number;
  total_disbursed: number;
  failed_count: number;
}

const PAGE_SIZE = 20;

export default function PaymentsTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [summaryLoading, setSummaryLoading] = useState(true);
  const [error, setError] = useState("");
  const [exporting, setExporting] = useState(false);

  // Debounce the search input so we don't hammer the API on every keystroke.
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 350);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    loadSummary();
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [debouncedSearch, page]);

  async function loadSummary() {
    try {
      setSummaryLoading(true);
      const res = await fetch(`${API_URL}/api/payments/summary`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Unable to load payment summary");
      const data = await res.json();
      setSummary(data);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong loading the summary");
    } finally {
      setSummaryLoading(false);
    }
  }

  async function loadTransactions() {
    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams({
        page: String(page),
        page_size: String(PAGE_SIZE),
      });
      if (debouncedSearch.trim()) params.set("search", debouncedSearch.trim());

      const res = await fetch(`${API_URL}/api/payments?${params.toString()}`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Unable to load transactions");

      const data = await res.json();
      setTransactions(data.items ?? []);
      setTotal(data.total ?? 0);
      setTotalPages(data.pages ?? 1);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong loading transactions");
    } finally {
      setLoading(false);
    }
  }

  function formatRand(amount: number) {
    return `R ${amount.toLocaleString("en-ZA", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  }

  function exportCsv() {
    if (transactions.length === 0) return;
    setExporting(true);
    try {
      const header = ["Transaction ID", "Borrower", "Amount", "Type", "Date", "Status"];
      const rows = transactions.map((tx) => [tx.id, tx.borrower, tx.amount, tx.type, tx.date, tx.status]);
      const csv = [header, ...rows]
        .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `transactions-page-${page}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  }

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transactions..."
              className="w-full sm:w-auto pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4D330] transition-shadow shadow-sm"
            />
          </div>
          <button
            onClick={exportCsv}
            disabled={exporting || transactions.length === 0}
            className="flex items-center justify-center gap-2 bg-[#005B3F] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#00432E] transition-colors shadow-sm w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {exporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileDown className="w-4 h-4 text-[#B4D330]" />}
            Export CSV
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
          {error}
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Total Collected Today</h4>
            <div className="text-2xl font-bold text-[#111827] mt-1 tracking-tight">
              {summaryLoading ? (
                <div className="w-24 h-7 bg-gray-200 rounded animate-pulse" />
              ) : (
                formatRand(summary?.total_collected ?? 0)
              )}
            </div>
          </div>
          <div className="w-12 h-12 bg-[#E5F2D9] border border-[#B4D330]/30 rounded-xl flex items-center justify-center text-[#005B3F]">
            <ArrowDownRight className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Total Disbursed Today</h4>
            <div className="text-2xl font-bold text-[#111827] mt-1 tracking-tight">
              {summaryLoading ? (
                <div className="w-24 h-7 bg-gray-200 rounded animate-pulse" />
              ) : (
                formatRand(summary?.total_disbursed ?? 0)
              )}
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-700">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Failed Transactions</h4>
            <div className="text-2xl font-bold text-[#111827] mt-1 tracking-tight">
              {summaryLoading ? (
                <div className="w-8 h-7 bg-gray-200 rounded animate-pulse" />
              ) : (
                summary?.failed_count ?? 0
              )}
            </div>
          </div>
          <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center text-red-700">
            <span className="font-bold text-xl">!</span>
          </div>
        </div>
      </div>

      {/* Ledger */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gray-50/50 flex items-center justify-between">
          <h3 className="font-bold text-[#111827]">Recent Transactions</h3>
          {!loading && <span className="text-xs font-medium text-gray-500">{total} total</span>}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                [...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4" colSpan={4}>
                      <div className="h-10 bg-gray-100 rounded animate-pulse" />
                    </td>
                  </tr>
                ))
              ) : transactions.length === 0 ? (
                <tr>
                  <td className="px-6 py-10 text-center text-sm text-gray-500 font-medium" colSpan={4}>
                    No transactions found.
                  </td>
                </tr>
              ) : (
                transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-[#F4F6F8] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                            tx.type === "Repayment"
                              ? "bg-[#E5F2D9] text-[#005B3F] border-[#B4D330]/30"
                              : "bg-blue-50 text-blue-700 border-blue-100"
                          }`}
                        >
                          {tx.type === "Repayment" ? (
                            <ArrowDownRight className="w-5 h-5" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-[#111827]">{tx.borrower}</div>
                          <div className="text-xs text-gray-500 mt-0.5 font-medium">
                            {tx.id} • {tx.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`font-bold ${tx.type === "Repayment" ? "text-[#005B3F]" : "text-[#111827]"}`}>
                        {tx.amount}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-medium">{tx.date}</td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${
                          tx.status === "Completed"
                            ? "bg-[#E5F2D9] text-[#005B3F] border-[#B4D330]/30"
                            : tx.status === "Failed"
                            ? "bg-red-50 text-red-700 border-red-100"
                            : "bg-amber-50 text-amber-700 border-amber-100"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="text-sm font-bold text-[#005B3F] disabled:text-gray-300 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-xs font-medium text-gray-500">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="text-sm font-bold text-[#005B3F] disabled:text-gray-300 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}