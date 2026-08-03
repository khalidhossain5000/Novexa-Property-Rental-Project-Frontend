import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) => {
  return (
    <div className={twMerge("space-y-3 text-center", className)}>
      <h2
        className={twMerge(
          "font-lora text-3xl md:text-4xl font-bold text-text-primary",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={twMerge(
            "text-base md:text-lg text-text-secondary",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;