export default function TerminalCard() {
  return (
    <div className="w-[320px] bg-[#0f172a] text-white rounded-3xl overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-slate-700 flex gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <div className="p-5 font-mono text-sm space-y-3">
        <p className="text-cyan-400">
          terraform apply --auto-approve
        </p>

        <p className="text-slate-300">
          Acquiring state lock...
        </p>

        <p className="text-yellow-400">
          Plan: 2 to add, 1 to change
        </p>

        <p className="text-green-400">
          Apply complete.
        </p>

        <div className="bg-green-900/40 text-green-300 p-3 rounded-xl">
          Outputs: dashboard_url ready
        </div>
      </div>
    </div>
  );
}