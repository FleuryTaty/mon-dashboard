import { Bell } from "lucide-react";

export function Info({ name, email }) {
  return (
    <div className="flex items-center gap-5">
      <div className="border border-slate-100 p-2 rounded-full bg-slate-100">
        <Bell size={19} />
      </div>

      <div className="flex items-center gap-2">
        <div className="w-10 h-10 flex justify-center items-center text-2xl font-black bg-slate-200 border border-slate-200 rounded-full">
          F
        </div>

        <div className="flex flex-col font-mono">
          <p className="font-bold">{name}</p>
          <p className="text-slate-400">{email}</p>
        </div>
      </div>
    </div>
  );
}
