import { SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ButtonDefault } from "./ButtonDefault";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "Nada encontrado",
  description = "Não foi possível localizar informações.",
}: EmptyStateProps) {
  const navigate = useNavigate();
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-4
        py-10
        text-center
      "
    >
      <SearchX size={48} className="text-slate-300" />

      <div className="space-y-1">
        <h3
          className="
            text-lg
            font-medium
            text-slate-700
          "
        >
          {title}
        </h3>
        <p
          className="
            text-sm
            text-slate-500
          "
        >
          {description}
        </p>
      </div>
      <ButtonDefault
        action={() => navigate(-1)}
        showIcon={true}
        text="Voltar"
      />
    </div>
  );
}
