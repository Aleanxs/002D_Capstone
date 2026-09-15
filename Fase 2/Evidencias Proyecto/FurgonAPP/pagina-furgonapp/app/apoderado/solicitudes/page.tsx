import Link from "next/link";

import CardSoliApoderado from "@/components/solicitudes/CardSoliApoderado";
import MenuApoderado from "@/components/navegacion/MenuApoderado";

export default function SolicitudesApoderadoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuApoderado />

      <main className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
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
              Mis solicitudes
            </h1>

            <p className="mt-2 text-gray-600">
              Revisa el estado, precio, disponibilidad y antecedentes de cada
              solicitud.
            </p>
          </div>

          {/* SOLICITUDES */}
          <div className="space-y-6">
            <CardSoliApoderado
              nombreFurgonista="Juan Pérez"
              estado="Pendiente"
              precio={85000}
              zona="Las Condes"
              zonaDisponible={true}
              asientosDisponibles={3}
              patente="ABCD-12"
              licenciaAprobada={true}
              antecedentesAprobados={true}
              permisoEscolarAprobado={true}
            />

            <CardSoliApoderado
              nombreFurgonista="María González"
              estado="Aceptada"
              precio={92000}
              zona="Providencia"
              zonaDisponible={true}
              asientosDisponibles={1}
              patente="EFGH-34"
              licenciaAprobada={true}
              antecedentesAprobados={true}
              permisoEscolarAprobado={true}
            />

            <CardSoliApoderado
              nombreFurgonista="Pedro Ramírez"
              estado="Rechazada"
              precio={78000}
              zona="Vitacura"
              zonaDisponible={true}
              asientosDisponibles={0}
              patente="IJKL-56"
              licenciaAprobada={true}
              antecedentesAprobados={true}
              permisoEscolarAprobado={true}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
