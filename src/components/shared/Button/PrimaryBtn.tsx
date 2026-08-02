import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean ;
}

const PrimaryBtn = ({
  children,
  icon,
  className,
  disabled,
  type = "button",
  ...props
}: PrimaryBtnProps) => {
  return (
    <button
      type={type}
      disabled={!!disabled}
      className={twMerge(
        "group inline-flex items-center gap-2 rounded-full bg-[#17140A] px-6 py-3.5 text-sm font-semibold text-[#FFC72C] transition-colors duration-300 hover:bg-[#2b2517] active:scale-[0.98] dark:bg-[#FFC72C] dark:text-[#17140A] dark:hover:bg-[#e6b526] cursor-pointer",
        className,
      )}
      {...props}
    >
      {/* Flipping Text */}
      <span className="relative block h-5 overflow-hidden leading-5">
        <span className="block transition-transform duration-[1125ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-5">
          {children}
        </span>

        <span className="absolute left-0 top-5 block transition-all duration-[1125ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
          {children}
        </span>
      </span>

      {icon && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};

export default PrimaryBtn;
