import Link from "next/link";
import { notFound } from "next/navigation";

import MenuApoderado from "@/components/navegacion/MenuApoderado";
import { furgones } from "@/datos/furgones";

interface PropiedadesPagina {
  params: Promise<{
    id: string;
  }>;
}

export default async function PaginaInformacionConductor({
  params,
}: PropiedadesPagina) {
  const { id } = await params;

  const furgon = furgones.find((furgon) => furgon.id === Number(id));

  if (!furgon) {
    notFound();
  }

  const documentacionVerificada =
    furgon.licenciaAprobada &&
    furgon.antecedentesAprobados &&
    furgon.permisoEscolarAprobado &&
    furgon.revisionTecnicaAprobada;

  return (
    <div className="min-h-screen bg-gray-100">
      <MenuApoderado />

      <main className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          {/* VOLVER */}
          <Link
            href="/apoderado/buscar"
            className="inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            ← Volver a buscar transporte
          </Link>

          {/* CABECERA */}
          <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Conductor</p>

                <h1 className="mt-1 text-3xl font-bold text-gray-900">
                  {furgon.nombreConductor}
                </h1>

                <p className="mt-2 text-gray-600">
                  {furgon.marca} {furgon.modelo} · {furgon.patente}
                </p>
              </div>

              <span
                className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${
                  documentacionVerificada
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {documentacionVerificada
                  ? "Documentación verificada"
                  : "Documentación pendiente"}
              </span>
            </div>

            <div className="mt-8 grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-sm text-gray-500">Precio mensual</p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  ${furgon.precioMensual.toLocaleString("es-CL")}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Asientos disponibles</p>

                <p
                  className={`mt-1 text-2xl font-bold ${
                    furgon.asientosDisponibles > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {furgon.asientosDisponibles}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Capacidad total</p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {furgon.capacidadTotal}
                </p>
              </div>
            </div>
          </section>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* CONDUCTOR */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Información del conductor
              </h2>

              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-sm text-gray-500">Nombre</dt>

                  <dd className="mt-1 font-semibold text-gray-900">
                    {furgon.nombreConductor}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Teléfono</dt>

                  <dd className="mt-1 font-semibold text-gray-900">
                    {furgon.telefono}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Correo electrónico</dt>

                  <dd className="mt-1 font-semibold text-gray-900">
                    {furgon.correo}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Experiencia</dt>

                  <dd className="mt-1 font-semibold text-gray-900">
                    {furgon.experiencia} años
                  </dd>
                </div>
              </dl>
            </section>

            {/* VEHÍCULO */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Información del vehículo
              </h2>

              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-sm text-gray-500">Patente</dt>

                  <dd className="mt-1 font-semibold text-gray-900">
                    {furgon.patente}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Marca</dt>

                  <dd className="mt-1 font-semibold text-gray-900">
                    {furgon.marca}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Modelo</dt>

                  <dd className="mt-1 font-semibold text-gray-900">
                    {furgon.modelo}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-gray-500">Año</dt>

                  <dd className="mt-1 font-semibold text-gray-900">
                    {furgon.anio}
                  </dd>
                </div>
              </dl>
            </section>

            {/* ZONAS */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Zonas donde opera
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Sectores cubiertos actualmente por este servicio.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {furgon.zonas.map((zona) => (
                  <span
                    key={zona}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                  >
                    {zona}
                  </span>
                ))}
              </div>
            </section>

            {/* DOCUMENTOS */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Documentación del conductor
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                Estado de los antecedentes revisados por FURGONAPP.
              </p>

              <div className="mt-5 space-y-3">
                <EstadoDocumento
                  nombre="Licencia de conducir"
                  aprobado={furgon.licenciaAprobada}
                />

                <EstadoDocumento
                  nombre="Certificado de antecedentes"
                  aprobado={furgon.antecedentesAprobados}
                />

                <EstadoDocumento
                  nombre="Permiso de transporte escolar"
                  aprobado={furgon.permisoEscolarAprobado}
                />

                <EstadoDocumento
                  nombre="Revisión técnica"
                  aprobado={furgon.revisionTecnicaAprobada}
                />
              </div>
            </section>
          </div>

          {/* DISPONIBILIDAD */}
          <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {furgon.asientosDisponibles > 0 ? (
              <>
                <h2 className="text-xl font-bold text-gray-900">
                  Servicio disponible
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  Actualmente este servicio tiene{" "}
                  <strong>
                    {furgon.asientosDisponibles} asiento
                    {furgon.asientosDisponibles !== 1 ? "s" : ""} disponible
                    {furgon.asientosDisponibles !== 1 ? "s" : ""}
                  </strong>
                  .
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900">
                  Sin disponibilidad
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  Actualmente este servicio no tiene asientos disponibles.
                </p>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

function EstadoDocumento({
  nombre,
  aprobado,
}: {
  nombre: string;
  aprobado: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-gray-50 px-4 py-3">
      <span className="text-sm font-medium text-gray-700">{nombre}</span>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          aprobado
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {aprobado ? "Verificado" : "Pendiente"}
      </span>
    </div>
  );
}
