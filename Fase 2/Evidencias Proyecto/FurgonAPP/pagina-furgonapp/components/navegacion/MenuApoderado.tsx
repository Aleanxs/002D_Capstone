import Link from "next/link";

export default function MenuApoderado() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/apoderado" className="text-xl font-bold text-blue-600">
          FURGONAPP
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/apoderado"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
          >
            Inicio
          </Link>

          <Link
            href="/apoderado/buscar"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
          >
            Buscar transporte
          </Link>

          <Link
            href="/apoderado/solicitudes"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
          >
            Solicitudes
          </Link>
        </nav>
      </div>
    </header>
  );
}
