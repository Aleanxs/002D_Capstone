import Link from "next/link";

export default function MenuFurgonista() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/furgonista" className="text-xl font-bold text-blue-600">
          FURGONAPP
        </Link>

        <nav className="flex flex-wrap items-center gap-2">
          <Link
            href="/furgonista"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
          >
            Inicio
          </Link>

          <span className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400">
            Asientos
          </span>

          <span className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400">
            Solicitudes
          </span>

          <span className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400">
            Mi servicio
          </span>

          <span className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400">
            Documentación
          </span>
        </nav>
      </div>
    </header>
  );
}
