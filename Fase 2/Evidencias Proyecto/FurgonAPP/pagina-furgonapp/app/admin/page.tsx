import MenuAdmin from "@/components/navegacion/MenuAdmin";

export default function PaginaPrincipalAdmin() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuAdmin />

      <main className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          {/* PRESENTACIÓN */}
          <section className="mb-10 flex min-h-[100px] items-center justify-center overflow-hidden rounded-3xl bg-blue-600 px-6 py-8 text-center text-white shadow-sm md:px-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              Panel de administración FURGONAPP
            </p>
          </section>

          {/* FUNCIONES PRINCIPALES */}
          <section>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Gestión de la plataforma
              </h2>

              <p className="mt-2 text-gray-600">
                Acceso a las principales herramientas administrativas.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* GESTIÓN DE USUARIOS */}
              <article className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  👥
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Gestión de usuarios
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
                  Consulta y administra las cuentas registradas dentro de
                  FURGONAPP.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Apoderados</p>
                  <p>✓ Furgonistas</p>
                  <p>✓ Colegios</p>
                  <p>✓ Administradores</p>
                  <p>✓ Estado de las cuentas</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Gestionar usuarios
                  </button>
                </div>
              </article>

              {/* REVISIÓN DE DOCUMENTOS */}
              <article className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  📁
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Revisión de documentos
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
                  Revisa los antecedentes y documentos enviados por los
                  furgonistas antes de validarlos dentro de la plataforma.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>✓ Licencias de conducir</p>
                  <p>✓ Certificados de antecedentes</p>
                  <p>✓ Permisos de transporte escolar</p>
                  <p>✓ Revisiones técnicas</p>
                  <p>✓ Otros documentos requeridos</p>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Revisar documentos
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* FUNCIONES ADMINISTRATIVAS */}
          <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm md:p-8">
            <h2 className="text-xl font-bold text-gray-900">
              Funciones administrativas
            </h2>

            <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-gray-600">
              El administrador controla la información principal de la
              plataforma y verifica que los antecedentes de los transportistas
              cumplan con los requisitos definidos.
            </p>

            <div className="mt-7 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  1
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Gestionar usuarios
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
                  Consulta las cuentas registradas y administra su estado dentro
                  de la plataforma.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  2
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Revisar antecedentes
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
                  Revisa la documentación enviada por los furgonistas y
                  determina si cumple con los requisitos.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  3
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Aprobar o rechazar
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
                  Define el estado de los documentos para que los demás usuarios
                  puedan conocer si fueron verificados.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
