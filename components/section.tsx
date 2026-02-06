import { ReactNode } from "react";
import Container from "./container";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-stone-200 bg-stone-50 py-16"
    >
      <Container>
        <div className={align === "center" ? "text-center" : ""}>
          {eyebrow && (
            <p className="text-xs uppercase tracking-widest text-stone-500">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-2 text-3xl">{title}</h2>

          {description && (
            <p className="mx-auto mt-3 max-w-xl text-sm text-stone-700">
              {description}
            </p>
          )}
        </div>

        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  );
}
