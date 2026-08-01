import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SecondaryBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

const SecondaryBtn = ({
  children,
  icon,
  className,
  type = "button",
  ...props
}: SecondaryBtnProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        "group inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-[#17140A]/15 px-6 py-3.5 text-sm font-semibold text-[#17140A] transition-all duration-300 hover:border-[#17140A]/30 hover:bg-white hover:shadow-sm active:scale-[0.98] dark:border-white/15 dark:text-white dark:hover:bg-white/5 dark:hover:border-white/30",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
          {icon}
        </span>
      )}

      <span className="transition-colors duration-300">
        {children}
      </span>
    </button>
  );
};

export default SecondaryBtn;