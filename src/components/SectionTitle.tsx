interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 max-w-2xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-gray-500 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}