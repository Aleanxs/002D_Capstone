import Link from "next/link";
import MenuApoderado from "@/components/navegacion/MenuApoderado";

export default function PaginaPrincipalApoderado() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuApoderado />

      <main className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          {/* PRESENTACIÓN */}
          <section className="mb-10 overflow-hidden rounded-3xl bg-blue-600 px-6 py-10 text-white shadow-sm md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                Panel del apoderado
              </p>

              <h1 className="mt-3 text-3xl font-bold md:text-4xl">
                Encuentra transporte escolar para tus hijos
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100 md:text-base">
                Busca furgones escolares disponibles, compara precios, consulta
                las zonas donde operan y revisa la información de sus
                conductores.
              </p>

              <Link
                href="/apoderado/buscar"
                className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Buscar transporte
              </Link>
            </div>
          </section>

          {/* FUNCIONES DEL APODERADO */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                ¿Qué deseas hacer?
              </h2>

              <p className="mt-2 text-gray-600">
                Accede a las funciones disponibles para gestionar el transporte
                escolar.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* BUSCAR TRANSPORTE */}
              <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  🔍
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Buscar transporte
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Encuentra furgones escolares disponibles y consulta toda la
                  información necesaria antes de realizar una solicitud.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Zona donde opera</p>
                  <p>✓ Precio mensual</p>
                  <p>✓ Asientos disponibles</p>
                  <p>✓ Información del conductor</p>
                  <p>✓ Datos del vehículo</p>
                  <p>✓ Estado de su documentación</p>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/apoderado/buscar"
                    className="inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Buscar transporte
                  </Link>
                </div>
              </article>

              {/* SOLICITUDES */}
              <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  📄
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Mis solicitudes
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Revisa las solicitudes que has enviado a los conductores y
                  consulta el estado actual de cada una.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Solicitudes pendientes</p>
                  <p>✓ Solicitudes aceptadas</p>
                  <p>✓ Solicitudes rechazadas</p>
                  <p>✓ Solicitudes canceladas</p>
                  <p>✓ Datos del servicio solicitado</p>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/apoderado/solicitudes"
                    className="inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Ver solicitudes
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* FLUJO */}
          <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-gray-900">¿Cómo funciona?</h2>

            <div className="mt-7 grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  1
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Busca transporte
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Encuentra furgones que trabajen en la zona que necesitas.
                </p>
              </div>

              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  2
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Revisa el servicio
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Consulta el precio, los asientos disponibles, el vehículo y la
                  información del conductor.
                </p>
              </div>

              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  3
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Envía una solicitud
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Solicita el servicio y sigue posteriormente su estado desde
                  Mis solicitudes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
