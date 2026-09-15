import MenuFurgonista from "@/components/navegacion/MenuFurgonista";

export default function PaginaPrincipalFurgonista() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuFurgonista />

      <main className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          {/* PRESENTACIÓN */}
          <section className="mb-10 overflow-hidden rounded-3xl bg-blue-600 px-6 py-10 text-white shadow-sm md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                Panel del furgonista
              </p>

              <h1 className="mt-3 text-3xl font-bold md:text-4xl">
                Administra tu servicio de transporte escolar
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100 md:text-base">
                Gestiona tus asientos disponibles, revisa solicitudes de
                apoderados, configura tu servicio y mantén tus documentos al
                día.
              </p>
            </div>
          </section>

          {/* FUNCIONES PRINCIPALES */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Gestión del servicio
              </h2>

              <p className="mt-2 text-gray-600">
                Accede a las principales funciones disponibles para tu cuenta.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* ASIENTOS */}
              <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  🚐
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Disponibilidad de asientos
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Administra la cantidad de asientos disponibles y ocupados
                  dentro de tu furgón.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Marcar asientos disponibles</p>
                  <p>✓ Marcar asientos ocupados</p>
                  <p>✓ Consultar capacidad total</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Gestionar asientos
                  </button>
                </div>
              </article>

              {/* SOLICITUDES */}
              <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  📄
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Solicitudes de apoderados
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Revisa las solicitudes recibidas de apoderados interesados en
                  contratar tu servicio.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Solicitudes pendientes</p>
                  <p>✓ Solicitudes aceptadas</p>
                  <p>✓ Solicitudes rechazadas</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Ver solicitudes
                  </button>
                </div>
              </article>

              {/* SERVICIO */}
              <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  ⚙️
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Mi servicio
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Configura la información que los apoderados podrán consultar
                  sobre tu servicio de transporte escolar.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Precio mensual</p>
                  <p>✓ Zonas donde operas</p>
                  <p>✓ Datos del vehículo</p>
                  <p>✓ Capacidad del furgón</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Administrar servicio
                  </button>
                </div>
              </article>

              {/* DOCUMENTOS */}
              <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  📁
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Documentación
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Sube y consulta el estado de los documentos necesarios para
                  mantener tu perfil verificado.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Licencia de conducir</p>
                  <p>✓ Certificado de antecedentes</p>
                  <p>✓ Permiso de transporte escolar</p>
                  <p>✓ Revisión técnica</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Ver documentación
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* FLUJO GENERAL */}
          <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-gray-900">
              Mantén tu servicio actualizado
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              La información registrada será utilizada para mostrar tu servicio
              a los apoderados dentro de FURGONAPP.
            </p>

            <div className="mt-7 grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  1
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Configura tu servicio
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Ingresa precios, zonas y los datos correspondientes a tu
                  vehículo.
                </p>
              </div>

              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  2
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Mantén tus documentos vigentes
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Sube la documentación requerida para que pueda ser revisada
                  dentro de la plataforma.
                </p>
              </div>

              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  3
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Gestiona tus cupos
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Mantén actualizada la disponibilidad de asientos para los
                  apoderados.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
