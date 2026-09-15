"use client";

import Link from "next/link";
import { useState } from "react";

import { furgones } from "@/datos/furgones";

export default function BuscadorFurgones() {
  const [zona, setZona] = useState("");
  const [precioMaximo, setPrecioMaximo] = useState("");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const resultados = furgones.filter((furgon) => {
    const cumpleZona =
      zona === "" ||
      furgon.zonas.some((zonaFurgon) =>
        zonaFurgon.toLowerCase().includes(zona.toLowerCase()),
      );

    const cumplePrecio =
      precioMaximo === "" || furgon.precioMensual <= Number(precioMaximo);

    const cumpleDisponibilidad =
      !soloDisponibles || furgon.asientosDisponibles > 0;

    return cumpleZona && cumplePrecio && cumpleDisponibilidad;
  });

  function limpiarFiltros() {
    setZona("");
    setPrecioMaximo("");
    setSoloDisponibles(false);
  }

  return (
    <div>
      {/* FILTROS */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Buscar transporte</h2>

        <p className="mt-2 text-sm text-gray-600">
          Busca furgones según zona, precio y disponibilidad de asientos.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* ZONA */}
          <div>
            <label
              htmlFor="zona"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Zona
            </label>

            <input
              id="zona"
              type="text"
              value={zona}
              onChange={(evento) => setZona(evento.target.value)}
              placeholder="Ej: Las Condes"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* PRECIO */}
          <div>
            <label
              htmlFor="precio"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Precio mensual máximo
            </label>

            <input
              id="precio"
              type="number"
              min="0"
              value={precioMaximo}
              onChange={(evento) => setPrecioMaximo(evento.target.value)}
              placeholder="Ej: 90000"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* DISPONIBILIDAD */}
        <label className="mt-5 flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(evento) => setSoloDisponibles(evento.target.checked)}
            className="h-4 w-4 rounded border-gray-300"
          />

          <span className="text-sm font-medium text-gray-700">
            Mostrar solo furgones con asientos disponibles
          </span>
        </label>

        <button
          type="button"
          onClick={limpiarFiltros}
          className="mt-6 rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          Limpiar filtros
        </button>
      </section>

      {/* RESULTADOS */}
      <section className="mt-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Furgones disponibles
          </h2>

          <span className="text-sm text-gray-500">
            {resultados.length} resultado
            {resultados.length !== 1 ? "s" : ""}
          </span>
        </div>

        {resultados.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <h3 className="font-semibold text-gray-900">
              No encontramos furgones
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Intenta cambiar los filtros de búsqueda.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {resultados.map((furgon) => {
              const documentacionVerificada =
                furgon.licenciaAprobada &&
                furgon.antecedentesAprobados &&
                furgon.permisoEscolarAprobado &&
                furgon.revisionTecnicaAprobada;

              return (
                <article
                  key={furgon.id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  {/* CABECERA */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Conductor</p>

                      <h3 className="text-xl font-bold text-gray-900">
                        {furgon.nombreConductor}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Patente: {furgon.patente}
                      </p>
                    </div>

                    <span
                      className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${
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

                  {/* DATOS DEL SERVICIO */}
                  <div className="mt-6 grid gap-5 md:grid-cols-3">
                    <div>
                      <p className="text-sm text-gray-500">Zonas</p>

                      <p className="mt-1 font-semibold text-gray-900">
                        {furgon.zonas.join(", ")}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Precio mensual</p>

                      <p className="mt-1 font-semibold text-gray-900">
                        ${furgon.precioMensual.toLocaleString("es-CL")}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Asientos disponibles
                      </p>

                      <p
                        className={`mt-1 font-semibold ${
                          furgon.asientosDisponibles > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {furgon.asientosDisponibles > 0
                          ? `${furgon.asientosDisponibles} disponibles`
                          : "Sin disponibilidad"}
                      </p>
                    </div>
                  </div>

                  {/* ACCIONES */}
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-200 pt-5">
                    <Link
                      href={`/apoderado/furgon/${furgon.id}`}
                      className="inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Ver detalles
                    </Link>

                    {furgon.asientosDisponibles > 0 ? (
                      <button
                        type="button"
                        className="inline-flex rounded-xl border border-blue-600 bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                      >
                        Solicitar
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="cursor-not-allowed rounded-xl border border-gray-300 bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-400"
                      >
                        Sin cupos
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
