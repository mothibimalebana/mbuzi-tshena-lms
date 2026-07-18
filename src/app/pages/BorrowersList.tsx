import { Users } from "lucide-react";

export default function BorrowersList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#111827] tracking-tight">Reliable Borrowers</h2>
          <p className="text-gray-500 mt-1 font-medium">AI-identified low-risk customers for pre-approved offers.</p>
        </div>
        <button className="bg-[#005B3F] hover:bg-[#00432E] text-white px-5 py-2.5 rounded-lg font-bold transition-colors shadow-sm w-full sm:w-auto">
          Run Batch Analysis
        </button>
      </div>

      <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-[#E5F2D9] border border-[#B4D330]/30 text-[#005B3F] rounded-2xl flex items-center justify-center mb-5 shadow-sm">
          <Users className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#111827] mb-2">Borrower Directory</h3>
        <p className="text-gray-500 max-w-md font-medium">
          This module is currently indexing the latest credit bureau data. AI profiling will be available once the sync completes.
        </p>
      </div>
    </div>
  );
}