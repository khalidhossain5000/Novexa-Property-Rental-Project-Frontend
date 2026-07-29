import React from "react";
type TButtonProps = {
  className: string;
  children: React.ReactNode;
};
const PrimaryButton = ({ className, children }: TButtonProps) => {
  return (
    <button
      className={`cursor-pointer bg-linear-to-tl from-primary to-primary-hover shadow-[0px_4px_32px_0_rgba(99,102,241,.10)]  py-2  border border-teal-500 text-text-primary font-medium group ${className} text-sm md:text-lg font-semibold md:font-bold`}
    >
      <div className="relative overflow-hidden">
        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
        <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
      </div>
    </button>
  );
};

export default PrimaryButton;
