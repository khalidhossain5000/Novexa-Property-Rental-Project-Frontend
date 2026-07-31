import React from "react";
interface IStatProps{
    label:string;
    value:string;
}
const PropertyStatCard = ({ label, value }:IStatProps) => {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-700/60 dark:bg-slate-800/60">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
        {label}
      </span>
      <span className="text-base font-bold text-slate-900 dark:text-white">
        {value}
      </span>
    </div>
  );
};

export default PropertyStatCard;
