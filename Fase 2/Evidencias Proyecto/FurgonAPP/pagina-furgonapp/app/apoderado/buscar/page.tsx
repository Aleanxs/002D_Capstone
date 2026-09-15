import Link from "next/link";

import BuscadorFurgones from "@/components/busqueda/BuscadorFurgones";
import MenuApoderado from "@/components/navegacion/MenuApoderado";

export default function BuscarTransportePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuApoderado />

      <main className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          {/* VOLVER */}
          <Link
            href="/apoderado"
            className="inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            ← Volver al inicio
          </Link>

          {/* ENCABEZADO */}
          <div className="mb-8 mt-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Buscar transporte escolar
            </h1>

            <p className="mt-2 text-gray-600">
              Consulta zonas, precios, disponibilidad de asientos e información
              general de los conductores.
            </p>
          </div>

          {/* BUSCADOR */}
          <BuscadorFurgones />
        </div>
      </main>
    </div>
  );
}
