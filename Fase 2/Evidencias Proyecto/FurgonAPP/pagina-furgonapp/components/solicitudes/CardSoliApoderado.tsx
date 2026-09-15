interface PropiedadesSolicitud {
  nombreFurgonista: string;
  estado: "Pendiente" | "Aceptada" | "Rechazada" | "Cancelada";
  precio: number;
  zona: string;
  zonaDisponible: boolean;
  asientosDisponibles: number;
  patente: string;
  licenciaAprobada: boolean;
  antecedentesAprobados: boolean;
  permisoEscolarAprobado: boolean;
}

export default function CardSoliApoderado({
  nombreFurgonista,
  estado,
  precio,
  zona,
  zonaDisponible,
  asientosDisponibles,
  patente,
  licenciaAprobada,
  antecedentesAprobados,
  permisoEscolarAprobado,
}: PropiedadesSolicitud) {
  const coloresEstado = {
    Pendiente: "bg-yellow-100 text-yellow-800",
    Aceptada: "bg-green-100 text-green-800",
    Rechazada: "bg-red-100 text-red-800",
    Cancelada: "bg-gray-200 text-gray-700",
  };

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">Solicitud a</p>

          <h2 className="text-xl font-bold text-gray-900">
            {nombreFurgonista}
          </h2>
        </div>

        <span
          className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${coloresEstado[estado]}`}
        >
          {estado}
        </span>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-gray-500">Precio mensual</p>

          <p className="mt-1 text-lg font-semibold text-gray-900">
            ${precio.toLocaleString("es-CL")}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Patente</p>

          <p className="mt-1 text-lg font-semibold text-gray-900">{patente}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">Zona de operación</p>

          <p className="mt-1 text-gray-900">{zona}</p>

          <p
            className={`mt-1 text-sm font-medium ${
              zonaDisponible ? "text-green-600" : "text-red-600"
            }`}
          >
            {zonaDisponible
              ? "Disponible para tu zona"
              : "No disponible para tu zona"}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">
            Asientos disponibles
          </p>

          <p
            className={`mt-1 text-lg font-semibold ${
              asientosDisponibles > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {asientosDisponibles > 0
              ? `${asientosDisponibles} disponibles`
              : "Sin disponibilidad"}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-5">
        <h3 className="font-semibold text-gray-900">
          Antecedentes del conductor
        </h3>

        <div className="mt-3 space-y-2 text-sm">
          <p className={licenciaAprobada ? "text-green-700" : "text-red-700"}>
            {licenciaAprobada ? "✓" : "✕"} Licencia de conducir
          </p>

          <p
            className={
              antecedentesAprobados ? "text-green-700" : "text-red-700"
            }
          >
            {antecedentesAprobados ? "✓" : "✕"} Certificado de antecedentes
          </p>

          <p
            className={
              permisoEscolarAprobado ? "text-green-700" : "text-red-700"
            }
          >
            {permisoEscolarAprobado ? "✓" : "✕"} Permiso de transporte escolar
          </p>
        </div>
      </div>
    </article>
  );
}
