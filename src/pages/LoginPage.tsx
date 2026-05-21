import { Lock, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { AuthLayout } from "../app/layouts/AuthLayout";
import { FormInput } from "../components/ui/FormInput";

export function LoginPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h2
            className="
              text-2xl
              font-semibold
              text-slate-800
            "
          >
            Entrar
          </h2>

          <p
            className="
              text-slate-500
              mt-1
            "
          >
            Faça login para acessar o sistema
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-4">
          <FormInput
            labelName="Email"
            typeField="Email"
            icon={Mail}
            placeholder="Digite seu email"
          />
          <FormInput
            labelName="Senha"
            typeField="password"
            icon={Lock}
            placeholder="Digite sua senha"
          />
          {/* LOGIN BUTTON */}
          <button
            className="
              h-12
              rounded-xl
              bg-blue-500
              hover:bg-blue-600
              text-white
              font-medium
              transition-colors
              cursor-pointer
              mt-2
            "
          >
            Entrar
          </button>
        </form>

        {/* DIVIDER */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-sm text-slate-400">ou</span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* GOOGLE */}
        <button
          className="
            h-12
            rounded-xl
            border
            border-slate-200
            flex
            items-center
            justify-center
            gap-3
            hover:bg-slate-50
            transition-colors
            cursor-pointer
          "
        >
          <FcGoogle size={22} />
          Continuar com Google
        </button>
      </div>
    </AuthLayout>
  );
}
