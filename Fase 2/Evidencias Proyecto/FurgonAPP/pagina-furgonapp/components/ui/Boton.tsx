import { ButtonHTMLAttributes, ReactNode } from "react";

interface PropiedadesBoton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variante?: "primario" | "secundario" | "peligro";
}

export default function Boton({
  children,
  variante = "primario",
  className = "",
  ...props
}: PropiedadesBoton) {
  const variantes = {
    primario: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secundario:
      "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400",
    peligro: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-5
        py-2.5
        text-sm
        font-semibold
        transition-colors
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variantes[variante]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
