type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div
      className="
        min-h-screen
        bg-slate-100
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          w-full
          max-w-md
        "
      >
        <div className="mb-8 text-center">
          <h1
            className="
              text-4xl
              font-bold
              text-slate-800
            "
          >
            Zelo Frota
          </h1>

          <p
            className="
              text-slate-500
              mt-2
            "
          >
            Gerencie viagens, motoristas e veículos
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-3xl
            shadow-sm
            border
            border-slate-100
            p-8
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
