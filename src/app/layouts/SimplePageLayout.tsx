import { LoaderCircle } from "lucide-react";
import { EmptyState } from "../../components/ui/EmptyState";

type SimplePageLayoutProps = {
  isLoading: boolean;
  title: string;
  isEmpty: boolean;
  titleEmpty: string;
  descriptionEmpty: string;
  children: React.ReactNode;
};

export function SimplePageLayout({
  isLoading,
  title,
  isEmpty,
  titleEmpty,
  descriptionEmpty,
  children,
}: SimplePageLayoutProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center bg-white p-4 gap-2 rounded-2xl shadow-sm w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-zinc-700">
          {title}
        </h2>
        <div className="flex flex-col w-full gap-4">
          {isLoading ? (
            <div className="flex justify-center">
              <LoaderCircle className="animate-spin" />
            </div>
          ) : isEmpty ? (
            <EmptyState
              title={titleEmpty}
              description={descriptionEmpty}
            />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
