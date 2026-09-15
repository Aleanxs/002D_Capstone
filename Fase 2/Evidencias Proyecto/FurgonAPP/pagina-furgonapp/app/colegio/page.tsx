import MenuColegio from "@/components/navegacion/MenuColegio";

export default function PaginaPrincipalColegio() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuColegio />

      <main className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          {/* PRESENTACIÓN */}
          <section className="mb-10 overflow-hidden rounded-3xl bg-blue-600 px-6 py-10 text-white shadow-sm md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                Panel del colegio
              </p>

              <h1 className="mt-3 text-3xl font-bold md:text-4xl">
                Consulta los servicios de transporte escolar
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100 md:text-base">
                Revisa los furgonistas disponibles, las zonas donde operan,
                información de sus vehículos y el estado de la documentación de
                los conductores.
              </p>
            </div>
          </section>

          {/* FUNCIONES PRINCIPALES */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Consulta de transporte
              </h2>

              <p className="mt-2 text-gray-600">
                Accede a la información disponible para tu establecimiento.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* FURGONISTAS */}
              <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  🚐
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Furgonistas
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Consulta los conductores y servicios de transporte escolar
                  disponibles para el establecimiento.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Información del conductor</p>
                  <p>✓ Patente y datos del vehículo</p>
                  <p>✓ Zonas donde opera</p>
                  <p>✓ Disponibilidad de asientos</p>
                  <p>✓ Estado de la documentación</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Ver furgonistas
                  </button>
                </div>
              </article>

              {/* COBERTURA */}
              <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  📍
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Cobertura y zonas
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Consulta los sectores donde actualmente existen servicios de
                  transporte escolar disponibles.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Sectores cubiertos</p>
                  <p>✓ Furgonistas disponibles por zona</p>
                  <p>✓ Disponibilidad de cupos</p>
                  <p>✓ Información del servicio</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Ver cobertura
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* INFORMACIÓN GENERAL */}
          <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-gray-900">
              Información disponible
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
              FURGONAPP permite al establecimiento consultar información
              relevante de los servicios de transporte escolar registrados en la
              plataforma.
            </p>

            <div className="mt-7 grid gap-8 md:grid-cols-3">
              {/* CONDUCTORES */}
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  1
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Conductores
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Consulta datos generales del conductor y el estado de sus
                  antecedentes y documentación.
                </p>
              </div>

              {/* VEHÍCULOS */}
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  2
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">Vehículos</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Revisa patente, características generales y capacidad del
                  vehículo utilizado para el transporte escolar.
                </p>
              </div>

              {/* COBERTURA */}
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  3
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">Cobertura</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Identifica las zonas en las que opera cada furgonista y la
                  disponibilidad existente.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
