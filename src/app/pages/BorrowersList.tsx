import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface Borrower {
  id: number;
  full_name: string;
  email: string;
  id_number: string;
}

export default function BorrowersList() {
  const [borrowers, setBorrowers] = useState<Borrower[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBorrowers = async () => {
      try {
        const res = await fetch(
          "https://organic-space-journey-q79jp6w7xgg3xwxp-8000.app.github.dev/api/admin/borrowers",
          {
            credentials: "include",
          }
        );

        if (!res.ok) return;

        const data = await res.json();
        setBorrowers(data.items);
      } finally {
        setLoading(false);
      }
    };

    loadBorrowers();
  }, []);

  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#111827]">
            Reliable Borrowers
          </h2>
          <p className="text-gray-500 mt-1">
            AI-identified low-risk customers for pre-approved offers.
          </p>
        </div>

        <button className="bg-[#005B3F] hover:bg-[#00432E] text-white px-5 py-2.5 rounded-lg font-bold">
          Run Batch Analysis
        </button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border p-5 animate-pulse"
            >
              <div className="flex justify-between items-center">
                <div className="space-y-3 w-2/3">
                  <div className="h-5 bg-gray-200 rounded w-48"></div>
                  <div className="h-4 bg-gray-200 rounded w-64"></div>
                  <div className="h-4 bg-gray-200 rounded w-40"></div>
                </div>

                <div className="w-20 h-8 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      ) : borrowers.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl shadow-sm border flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#E5F2D9] rounded-2xl flex items-center justify-center mb-5">
            <Users className="w-8 h-8 text-[#005B3F]" />
          </div>

          <h3 className="text-xl font-bold">
            No Borrowers Found
          </h3>

          <p className="text-gray-500 mt-2">
            There are currently no registered borrowers.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {borrowers.map((borrower) => (
            <div
              key={borrower.id}
              className="p-5 border-b last:border-b-0 hover:bg-gray-50"
            >
              <h3 className="font-bold text-gray-900">
                {borrower.full_name}
              </h3>

              <p className="text-gray-500">
                {borrower.email}
              </p>

              <p className="text-sm text-gray-400">
                {borrower.id_number}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}