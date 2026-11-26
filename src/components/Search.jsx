import { Search } from "lucide-react";

export function InputSearch({ type, placeholder }) {
  return (
    <div className="w-70 bg-slate-100 flex  gap-2 py-2 px-2 border border-slate-100 rounded-full">
      <Search />
      <input
        className="w-full outline-none text-slate-900 font-mono"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
